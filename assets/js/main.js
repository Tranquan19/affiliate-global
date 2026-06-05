/**
 * Affiliate Global — Main JavaScript
 * Site interactivity, hero slider, featured products, search, cart, etc.
 * Depends on products.js (window.products, getProductById, getProductsByCategory)
 */

(function () {
  'use strict';

  // ============================================================
  // UTILITY HELPERS
  // ============================================================

  /** Format a number with commas */
  function formatPrice(num) {
    return '$' + Number(num).toLocaleString('en-US');
  }

  /** Return a star-rating HTML string for a given 0-5 rating */
  function starRating(rating) {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    let html = '';
    for (let i = 0; i < 5; i++) {
      if (i < full) {
        html += '<i class="fas fa-star"></i>';
      } else if (i === full && half) {
        html += '<i class="fas fa-star-half-alt"></i>';
      } else {
        html += '<i class="far fa-star"></i>';
      }
    }
    return html;
  }

  /** Generate a product card HTML string */
  function productCardHTML(product) {
    const badge = product.badge
      ? `<span class="product-badge badge-${product.badge.toLowerCase().replace(/\s+/g, '-')}">${product.badge}</span>`
      : '';
    const discount =
      product.originalPrice
        ? `<span class="product-discount">-${Math.round((1 - product.price / product.originalPrice) * 100)}%</span>`
        : '';
    const original =
      product.originalPrice
        ? `<span class="product-original-price">${formatPrice(product.originalPrice)}</span>`
        : '';

    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-image">
          <a href="pages/product.html?id=${product.id}">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
          </a>
          ${badge}
          ${discount}
          <button class="product-compare-btn" data-id="${product.id}" title="Add to compare">
            <i class="fas fa-balance-scale"></i>
          </button>
        </div>
        <div class="product-info">
          <span class="product-brand">${product.brand}</span>
          <h3 class="product-name">
            <a href="pages/product.html?id=${product.id}">${product.name}</a>
          </h3>
          <div class="product-rating">
            <span class="stars">${starRating(product.rating)}</span>
            <span class="rating-num">${product.rating}</span>
            <span class="reviews-count">(${product.reviews.toLocaleString()})</span>
          </div>
          <div class="product-price-row">
            <span class="product-price">${formatPrice(product.price)}</span>
            ${original}
          </div>
          <a href="${product.affiliateLink}" class="btn btn-sm btn-primary product-affiliate-btn" target="_blank" rel="noopener sponsored">
            <i class="fas fa-shopping-cart"></i> Buy Now
          </a>
        </div>
      </div>
    `;
  }


  // ============================================================
  // 1. HERO SLIDER
  // ============================================================

  function initHeroSlider() {
    const slider = document.getElementById('heroSlider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.slide');
    const dots = slider.querySelectorAll('.slider-dot');
    if (!slides.length) return;

    let current = 0;
    let interval = null;
    const DELAY = 5000; // 5 seconds

    function goTo(index) {
      slides.forEach((s, i) => s.classList.toggle('active', i === index));
      dots.forEach((d, i) => d.classList.toggle('active', i === index));
      current = index;
    }

    function next() {
      goTo((current + 1) % slides.length);
    }

    function startAuto() {
      stopAuto();
      interval = setInterval(next, DELAY);
    }

    function stopAuto() {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }

    // Dot click handlers
    dots.forEach((dot) => {
      dot.addEventListener('click', function () {
        const idx = parseInt(this.getAttribute('data-slide'), 10);
        if (!isNaN(idx)) {
          goTo(idx);
          startAuto(); // restart timer after manual interaction
        }
      });
    });

    // Pause on hover
    slider.addEventListener('mouseenter', stopAuto);
    slider.addEventListener('mouseleave', startAuto);

    // Touch swipe support
    let touchStartX = 0;
    slider.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
      stopAuto();
    }, { passive: true });

    slider.addEventListener('touchend', function (e) {
      const diff = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(diff) > 50) {
        if (diff < 0) next();
        else goTo((current - 1 + slides.length) % slides.length);
      }
      startAuto();
    }, { passive: true });

    startAuto();
  }


  // ============================================================
  // 2. FEATURED PRODUCTS (with tab filtering)
  // ============================================================

  function initFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;

    const navBtns = document.querySelectorAll('.section-header .nav-btn');
    if (!navBtns.length) return;

    // Map data-tab attribute to category filter
    const tabMap = {
      all: null,
      phones: 'smartphones',
      laptops: 'laptops',
      tablets: 'tablets',
      audio: 'audio',
    };

    function renderProducts(category) {
      let filtered = products;
      if (category && tabMap[category]) {
        filtered = getProductsByCategory(tabMap[category]);
      }

      if (!filtered.length) {
        container.innerHTML = '<p class="no-products">No products found in this category.</p>';
        return;
      }

      // Show max 8 for "all", else show all in category
      const show = category === 'all' || !category ? filtered.slice(0, 8) : filtered.slice(0, 8);
      container.innerHTML = show.map(productCardHTML).join('');
    }

    // Tab button click
    navBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        navBtns.forEach((b) => b.classList.remove('active'));
        this.classList.add('active');
        renderProducts(this.getAttribute('data-tab'));
      });
    });

    // Initial render (all)
    const activeTab = document.querySelector('.section-header .nav-btn.active');
    if (activeTab) {
      renderProducts(activeTab.getAttribute('data-tab'));
    } else {
      renderProducts('all');
    }
  }


  // ============================================================
  // 3. SEARCH BAR (suggestions dropdown)
  // ============================================================

  function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const suggestions = document.getElementById('searchSuggestions');
    if (!searchInput || !suggestions) return;

    let selectedIndex = -1;
    let currentResults = [];

    function filterProducts(query) {
      const q = query.toLowerCase().trim();
      if (!q) return [];
      return products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      ).slice(0, 8); // max 8 suggestions
    }

    function renderSuggestions(results) {
      currentResults = results;
      selectedIndex = -1;

      if (!results.length) {
        suggestions.classList.remove('active');
        suggestions.innerHTML = '';
        return;
      }

      suggestions.innerHTML = results
        .map(
          (p, i) =>
            `<a href="pages/product.html?id=${p.id}" class="suggestion-item" data-index="${i}">
              <img src="${p.image}" alt="${p.name}" loading="lazy">
              <div class="suggestion-info">
                <span class="suggestion-name">${p.name}</span>
                <span class="suggestion-brand">${p.brand}</span>
                <span class="suggestion-price">${formatPrice(p.price)}</span>
              </div>
            </a>`
        )
        .join('');

      suggestions.classList.add('active');
    }

    function doSearch(query) {
      const q = query.trim();
      if (!q) {
        suggestions.classList.remove('active');
        return false;
      }
      // Redirect to category page with search param
      window.location.href = 'pages/deals.html?search=' + encodeURIComponent(q);
      return false;
    }

    // Input event — show suggestions as user types
    searchInput.addEventListener('input', function () {
      const results = filterProducts(this.value);
      renderSuggestions(results);
    });

    // Focus — show if there's already text
    searchInput.addEventListener('focus', function () {
      if (this.value.trim()) {
        const results = filterProducts(this.value);
        renderSuggestions(results);
      }
    });

    // Blur — hide after a short delay (to allow click on suggestion)
    searchInput.addEventListener('blur', function () {
      setTimeout(() => {
        suggestions.classList.remove('active');
      }, 200);
    });

    // Keyboard navigation
    searchInput.addEventListener('keydown', function (e) {
      const items = suggestions.querySelectorAll('.suggestion-item');
      if (!items.length) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
        items.forEach((el, i) => el.classList.toggle('highlighted', i === selectedIndex));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, -1);
        items.forEach((el, i) => el.classList.toggle('highlighted', i === selectedIndex));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < currentResults.length) {
          const p = currentResults[selectedIndex];
          window.location.href = 'pages/product.html?id=' + p.id;
        } else {
          doSearch(this.value);
        }
      } else if (e.key === 'Escape') {
        suggestions.classList.remove('active');
        this.blur();
      }
    });

    // Click suggestion
    suggestions.addEventListener('mousedown', function (e) {
      // mousedown fires before blur, so we can prevent blur's timeout
      // by letting the click propagate naturally
    });
  }

  // Global searchProducts function called by search form onsubmit
  window.searchProducts = function () {
    const input = document.getElementById('searchInput');
    if (!input) return false;
    const q = input.value.trim();
    if (!q) return false;
    window.location.href = 'pages/deals.html?search=' + encodeURIComponent(q);
    return false;
  };


  // ============================================================
  // 4. COUNTDOWN TIMER (Summer Sale)
  // ============================================================

  function initCountdown() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    if (!daysEl) return;

    // Countdown: 14 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);
    targetDate.setHours(23, 59, 59, 0);

    function update() {
      const now = new Date();
      let diff = targetDate - now;

      if (diff <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);
      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * (1000 * 60);
      const seconds = Math.floor(diff / 1000);

      daysEl.textContent = String(days).padStart(2, '0');
      hoursEl.textContent = String(hours).padStart(2, '0');
      minutesEl.textContent = String(minutes).padStart(2, '0');
      secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  }


  // ============================================================
  // 5. CART / COMPARISON SIDEBAR
  // ============================================================

  const cart = {
    items: [], // array of product IDs

    /** Load cart from localStorage */
    load() {
      try {
        const stored = localStorage.getItem('affiliateGlobal_cart');
        this.items = stored ? JSON.parse(stored) : [];
      } catch {
        this.items = [];
      }
    },

    /** Save cart to localStorage */
    save() {
      localStorage.setItem('affiliateGlobal_cart', JSON.stringify(this.items));
    },

    /** Add a product ID to cart (max 5) */
    add(id) {
      id = Number(id);
      if (this.items.includes(id)) return false; // already in cart
      if (this.items.length >= 5) {
        this.showToast('Maximum 5 products can be compared at once.', 'warning');
        return false;
      }
      this.items.push(id);
      this.save();
      this.updateUI();
      this.showToast('Product added to comparison!', 'success');
      return true;
    },

    /** Remove a product ID from cart */
    remove(id) {
      id = Number(id);
      const idx = this.items.indexOf(id);
      if (idx === -1) return false;
      this.items.splice(idx, 1);
      this.save();
      this.updateUI();
      return true;
    },

    /** Toggle a product in/out of cart */
    toggle(id) {
      id = Number(id);
      if (this.items.includes(id)) {
        this.remove(id);
      } else {
        this.add(id);
      }
    },

    /** Update the badge count + sidebar contents */
    updateUI() {
      const badge = document.getElementById('cartCount');
      if (badge) {
        badge.textContent = this.items.length;
        badge.style.display = this.items.length > 0 ? 'flex' : 'none';
      }
      this.renderSidebar();
      this.updateCompareButtons();
    },

    /** Render items in the sidebar */
    renderSidebar() {
      const container = document.getElementById('cartItems');
      if (!container) return;

      if (!this.items.length) {
        container.innerHTML =
          '<p class="cart-empty">Your comparison list is empty. Browse products and click "Compare" to add them.</p>';
        return;
      }

      container.innerHTML = this.items
        .map((id) => {
          const p = getProductById(id);
          if (!p) return '';
          return `
            <div class="cart-item" data-id="${p.id}">
              <img src="${p.image}" alt="${p.name}" loading="lazy">
              <div class="cart-item-info">
                <h4>${p.name}</h4>
                <span class="cart-item-price">${formatPrice(p.price)}</span>
              </div>
              <button class="cart-item-remove" data-id="${p.id}" title="Remove">
                <i class="fas fa-times"></i>
              </button>
            </div>
          `;
        })
        .join('');

      // Remove buttons
      container.querySelectorAll('.cart-item-remove').forEach((btn) => {
        btn.addEventListener('click', () => {
          this.remove(parseInt(btn.getAttribute('data-id'), 10));
        });
      });
    },

    /** Sync compare button states across all product cards */
    updateCompareButtons() {
      document.querySelectorAll('.product-compare-btn').forEach((btn) => {
        const id = parseInt(btn.getAttribute('data-id'), 10);
        if (this.items.includes(id)) {
          btn.classList.add('in-cart');
          btn.title = 'Remove from compare';
          btn.innerHTML = '<i class="fas fa-check"></i>';
        } else {
          btn.classList.remove('in-cart');
          btn.title = 'Add to compare';
          btn.innerHTML = '<i class="fas fa-balance-scale"></i>';
        }
      });
    },

    /** Show a toast notification */
    showToast(message, type) {
      const existing = document.querySelector('.toast-notification');
      if (existing) existing.remove();

      const toast = document.createElement('div');
      toast.className = 'toast-notification toast-' + (type || 'info');
      toast.innerHTML = `
        <span>${message}</span>
        <button class="toast-close"><i class="fas fa-times"></i></button>
      `;
      document.body.appendChild(toast);

      // Show
      requestAnimationFrame(() => toast.classList.add('active'));

      // Auto-hide after 3s
      const timer = setTimeout(() => {
        toast.classList.remove('active');
        setTimeout(() => toast.remove(), 300);
      }, 3000);

      toast.querySelector('.toast-close').addEventListener('click', function () {
        clearTimeout(timer);
        toast.classList.remove('active');
        setTimeout(() => toast.remove(), 300);
      });
    },
  };

  function initCart() {
    cart.load();

    // Cart button — toggle sidebar
    const cartBtn = document.getElementById('cartBtn');
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    const closeBtn = document.getElementById('closeCart');

    if (cartBtn && sidebar && overlay) {
      function openCart() {
        sidebar.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }

      function closeCart() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }

      cartBtn.addEventListener('click', function (e) {
        e.preventDefault();
        openCart();
      });

      if (closeBtn) closeBtn.addEventListener('click', closeCart);
      overlay.addEventListener('click', closeCart);

      // ESC key
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && sidebar.classList.contains('open')) {
          closeCart();
        }
      });
    }

    // Delegate click on compare buttons (they can be dynamically added)
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('.product-compare-btn');
      if (btn) {
        e.preventDefault();
        const id = parseInt(btn.getAttribute('data-id'), 10);
        if (!isNaN(id)) {
          cart.toggle(id);
        }
      }
    });

    cart.updateUI();
  }


  // ============================================================
  // 6. HEADER SCROLL BEHAVIOR
  // ============================================================

  function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(function () {
          header.classList.toggle('scrolled', window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial check
    onScroll();
  }


  // ============================================================
  // 7. BACK TO TOP BUTTON
  // ============================================================

  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(function () {
          btn.classList.toggle('visible', window.scrollY > 500);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  // ============================================================
  // 8. DISCLAIMER BANNER DISMISS (localStorage)
  // ============================================================

  function initDisclaimer() {
    const banner = document.getElementById('disclaimerBanner');
    if (!banner) return;

    if (localStorage.getItem('affiliateGlobal_disclaimerDismissed') === 'true') {
      banner.style.display = 'none';
      return;
    }

    const closeBtn = banner.querySelector('.close-disclaimer');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        banner.style.display = 'none';
        localStorage.setItem('affiliateGlobal_disclaimerDismissed', 'true');
      });
    }
  }


  // ============================================================
  // 9. MOBILE MENU TOGGLE (create hamburger button if not present)
  // ============================================================

  function initMobileMenu() {
    const headerMain = document.querySelector('.header-main .container') ||
                       document.querySelector('.header-main');
    const nav = document.querySelector('.header-nav');
    const navMenu = document.querySelector('.nav-menu');

    if (!nav || !navMenu) return;

    // Create hamburger button if it doesn't exist
    let hamburger = document.querySelector('.hamburger-btn');
    if (!hamburger && headerMain) {
      hamburger = document.createElement('button');
      hamburger.className = 'hamburger-btn';
      hamburger.setAttribute('aria-label', 'Toggle navigation menu');
      hamburger.innerHTML = '<span></span><span></span><span></span>';
      headerMain.appendChild(hamburger);
    }

    if (hamburger) {
      hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        nav.classList.toggle('mobile-open');
        document.body.classList.toggle('menu-open');
      });
    }

    // Close menu when a nav link is clicked
    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', function () {
        hamburger && hamburger.classList.remove('active');
        nav.classList.remove('mobile-open');
        document.body.classList.remove('menu-open');
      });
    });

    // Close menu on overlay click (if we create one)
    const navOverlay = document.querySelector('.nav-overlay');
    if (navOverlay) {
      navOverlay.addEventListener('click', function () {
        hamburger && hamburger.classList.remove('active');
        nav.classList.remove('mobile-open');
        document.body.classList.remove('menu-open');
      });
    }

    // ESC key closes mobile menu
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('mobile-open')) {
        hamburger && hamburger.classList.remove('active');
        nav.classList.remove('mobile-open');
        document.body.classList.remove('menu-open');
      }
    });
  }


  // ============================================================
  // 10. NAV DROPDOWNS (touch-friendly)
  // ============================================================

  function initNavDropdowns() {
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');

    dropdownItems.forEach((item) => {
      const link = item.querySelector('a');

      // On touch devices, toggle with click
      link.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const wasOpen = item.classList.contains('dropdown-open');
          // Close all other dropdowns
          dropdownItems.forEach((d) => d.classList.remove('dropdown-open'));
          if (!wasOpen) {
            item.classList.add('dropdown-open');
          }
        }
      });

      // On desktop, dropdown opens on hover via CSS
      // No extra JS needed for :hover behavior
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav-item.dropdown')) {
        dropdownItems.forEach((d) => d.classList.remove('dropdown-open'));
      }
    });
  }


  // ============================================================
  // 11. PRODUCT PAGE SPECIFIC (if on product.html)
  // ============================================================

  function initProductPage() {
    // This runs only on pages that have #productDetail container
    const detailContainer = document.getElementById('productDetail');
    if (!detailContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
      detailContainer.innerHTML = '<p class="not-found">Product ID not specified.</p>';
      return;
    }

    const product = getProductById(Number(productId)) ||
                    products.find(p => String(p.id) === productId);

    if (!product) {
      detailContainer.innerHTML = '<p class="not-found">Product not found.</p>';
      return;
    }

    // Update page title
    document.title = product.name + ' - Affiliate Global';

    // Build features list
    const featuresHtml = product.features
      .map((f) => `<li><i class="fas fa-check-circle"></i> ${f}</li>`)
      .join('');

    const discount = product.originalPrice
      ? `<span class="product-discount">-${Math.round((1 - product.price / product.originalPrice) * 100)}%</span>`
      : '';
    const originalPriceHtml = product.originalPrice
      ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>`
      : '';
    const badgeHtml = product.badge
      ? `<span class="product-badge badge-${product.badge.toLowerCase().replace(/\s+/g, '-')}">${product.badge}</span>`
      : '';

    detailContainer.innerHTML = `
      <div class="product-detail">
        <div class="product-detail-image">
          ${badgeHtml}
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-detail-info">
          <span class="product-brand">${product.brand}</span>
          <h1>${product.name}</h1>
          <div class="product-rating">
            <span class="stars">${starRating(product.rating)}</span>
            <span class="rating-num">${product.rating}</span>
            <span class="reviews-count">(${product.reviews.toLocaleString()} reviews)</span>
          </div>
          <p class="product-description">${product.description}</p>
          <div class="product-price-row">
            <span class="product-price">${formatPrice(product.price)}</span>
            ${originalPriceHtml}
            ${discount}
          </div>
          <div class="product-actions">
            <a href="${product.affiliateLink}" class="btn btn-lg btn-primary" target="_blank" rel="noopener sponsored">
              <i class="fas fa-shopping-cart"></i> Buy Now — Best Price
            </a>
            <button class="btn btn-lg btn-outline product-compare-btn" data-id="${product.id}">
              <i class="fas fa-balance-scale"></i> Compare
            </button>
          </div>
          <div class="product-features">
            <h3>Key Features</h3>
            <ul>${featuresHtml}</ul>
          </div>
        </div>
      </div>
    `;
  }


  // ============================================================
  // 12. CATEGORY PAGE SPECIFIC (if on category.html)
  // ============================================================

  function initCategoryPage() {
    const container = document.getElementById('categoryProducts');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    let cat = urlParams.get('cat');
    let brand = urlParams.get('brand');

    // Map some query params to actual categories
    const catMap = {
      iphone: 'smartphones',
      samsung: 'smartphones',
      xiaomi: 'smartphones',
      google: 'smartphones',
      oneplus: 'smartphones',
      oppo: 'smartphones',
      'android-tablet': 'tablets',
      ipad: 'tablets',
      'gaming-laptop': 'laptops',
      macbook: 'laptops',
      dell: 'laptops',
      lenovo: 'laptops',
      hp: 'laptops',
      asus: 'laptops',
      apple: null,
      sony: null,
      bose: null,
    };

    // If cat is a known mapping, resolve it
    if (cat && catMap[cat] !== undefined) {
      if (catMap[cat] === null) {
        // It's a brand filter
        brand = cat.charAt(0).toUpperCase() + cat.slice(1);
        cat = null;
      } else {
        cat = catMap[cat];
      }
    }

    let filtered = products;

    if (cat) {
      filtered = getProductsByCategory(cat);
    }

    if (brand) {
      const brandLower = brand.toLowerCase();
      filtered = filtered.filter(
        (p) => p.brand.toLowerCase() === brandLower
      );
    }

    // Update page heading
    const heading = document.querySelector('.category-title');
    if (heading) {
      const displayName = brand || (cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : 'All Products');
      heading.textContent = displayName;
    }

    const countEl = document.querySelector('.category-count');
    if (countEl) {
      countEl.textContent = filtered.length + ' products';
    }

    if (!filtered.length) {
      container.innerHTML =
        '<p class="no-products">No products found. Try a different category or browse our <a href="deals.html">deals page</a>.</p>';
      return;
    }

    container.innerHTML = filtered.map(productCardHTML).join('');
  }


  // ============================================================
  // 13. DEALS PAGE SPECIFIC (if on deals.html)
  // ============================================================

  function initDealsPage() {
    const container = document.getElementById('dealsProducts');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('search');

    let filtered = products;

    if (search) {
      const q = search.toLowerCase().trim();
      filtered = products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.description && p.description.toLowerCase().includes(q))
      );

      // Update heading
      const heading = document.querySelector('.deals-title');
      if (heading) {
        heading.textContent = 'Search Results for "' + search + '"';
      }
    }

    const countEl = document.querySelector('.deals-count');
    if (countEl) {
      countEl.textContent = filtered.length + ' results';
    }

    if (!filtered.length) {
      container.innerHTML =
        '<p class="no-products">No products found matching your search. <a href="deals.html">Browse all deals</a>.</p>';
      return;
    }

    container.innerHTML = filtered.map(productCardHTML).join('');
  }


  // ============================================================
  // 14. TOAST NOTIFICATION STYLES (injected once)
  // ============================================================

  function injectToastStyles() {
    if (document.getElementById('ag-toast-styles')) return;

    const style = document.createElement('style');
    style.id = 'ag-toast-styles';
    style.textContent = `
      .toast-notification {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 600;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 14px 20px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        background: #1f2937;
        box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        transform: translateY(20px);
        opacity: 0;
        transition: all 0.3s ease;
        max-width: 380px;
      }
      .toast-notification.active {
        transform: translateY(0);
        opacity: 1;
      }
      .toast-notification.toast-success { background: #10b981; }
      .toast-notification.toast-warning { background: #f59e0b; }
      .toast-notification.toast-info { background: #3b82f6; }
      .toast-notification.toast-error { background: #ef4444; }
      .toast-close {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        font-size: 14px;
        padding: 2px 6px;
        opacity: 0.7;
      }
      .toast-close:hover { opacity: 1; }

      @media (max-width: 640px) {
        .toast-notification {
          left: 16px;
          right: 16px;
          bottom: 16px;
          max-width: none;
        }
      }
    `;
    document.head.appendChild(style);
  }


  // ============================================================
  // 15. PRODUCT COMPARE BUTTON STYLES (injected once)
  // ============================================================

  function injectCompareStyles() {
    if (document.getElementById('ag-compare-styles')) return;

    const style = document.createElement('style');
    style.id = 'ag-compare-styles';
    style.textContent = `
      .product-compare-btn {
        position: absolute;
        top: 8px;
        right: 8px;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background: rgba(255,255,255,0.9);
        border: 1px solid #e5e7eb;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s;
        z-index: 2;
        color: #6b7280;
        font-size: 14px;
      }
      .product-compare-btn:hover {
        background: #fff;
        color: #2563eb;
        border-color: #2563eb;
        box-shadow: 0 2px 8px rgba(37,99,235,0.15);
      }
      .product-compare-btn.in-cart {
        background: #2563eb;
        color: #fff;
        border-color: #2563eb;
      }
      .product-compare-btn.in-cart:hover {
        background: #1d4ed8;
      }
    `;
    document.head.appendChild(style);
  }


  // ============================================================
  // 16. MOBILE MENU STYLES (injected once)
  // ============================================================

  function injectMobileStyles() {
    if (document.getElementById('ag-mobile-styles')) return;

    const style = document.createElement('style');
    style.id = 'ag-mobile-styles';
    style.textContent = `
      .hamburger-btn {
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
        background: none;
        border: none;
        cursor: pointer;
        gap: 5px;
        padding: 6px;
        z-index: 210;
      }
      .hamburger-btn span {
        display: block;
        width: 22px;
        height: 2.5px;
        background: #1f2937;
        border-radius: 2px;
        transition: all 0.3s ease;
      }
      .hamburger-btn.active span:nth-child(1) {
        transform: translateY(7.5px) rotate(45deg);
      }
      .hamburger-btn.active span:nth-child(2) {
        opacity: 0;
      }
      .hamburger-btn.active span:nth-child(3) {
        transform: translateY(-7.5px) rotate(-45deg);
      }

      @media (max-width: 768px) {
        .hamburger-btn {
          display: flex;
        }
        .header-nav {
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          bottom: 0;
          background: #fff;
          z-index: 200;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          overflow-y: auto;
        }
        .header-nav.mobile-open {
          transform: translateX(0);
        }
        .header-nav .nav-menu {
          flex-direction: column;
          padding: 16px;
        }
        .header-nav .nav-item {
          width: 100%;
        }
        .header-nav .nav-item > a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-bottom: 1px solid #f3f4f6;
        }
        .dropdown-menu {
          position: static !important;
          box-shadow: none !important;
          border: none !important;
          padding-left: 16px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        .nav-item.dropdown.dropdown-open .dropdown-menu {
          max-height: 600px;
        }
        .dropdown-grid {
          grid-template-columns: 1fr !important;
        }
        body.menu-open {
          overflow: hidden;
        }
      }
    `;
    document.head.appendChild(style);
  }


  // ============================================================
  // INITIALIZE EVERYTHING
  // ============================================================

  function init() {
    // Inject dynamic styles first
    injectToastStyles();
    injectCompareStyles();
    injectMobileStyles();

    // Run all feature initializers
    initHeaderScroll();
    initHeroSlider();
    initFeaturedProducts();
    initSearch();
    initCountdown();
    initCart();
    initBackToTop();
    initDisclaimer();
    initMobileMenu();
    initNavDropdowns();

    // Page-specific initializers (only run if relevant elements are present)
    initProductPage();
    initCategoryPage();
    initDealsPage();
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
