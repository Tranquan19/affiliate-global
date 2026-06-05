/**
 * Affiliate Global — Main JavaScript
 * Depends on products.js (window.products, getProductById, getProductsByCategory)
 */
(function () {
  'use strict';

  // ---- Utilities ----
  function fmt(n) { return '$' + Number(n).toLocaleString('en-US'); }
  function stars(r) {
    let h = '';
    for (let i = 1; i <= 5; i++) h += i <= r ? '<i class="fas fa-star"></i>' : i - 0.5 <= r ? '<i class="fas fa-star-half-alt"></i>' : '<i class="far fa-star"></i>';
    return h;
  }

  function productCard(p) {
    const badge = p.badge ? `<span class="product-badge ${p.badge === 'Sale' ? 'sale' : p.badge === 'New' ? 'new' : ''}">${p.badge}</span>` : '';
    const disc = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
    return `<div class="product-card" data-id="${p.id}">
      ${badge}
      <a href="pages/product.html?id=${p.id}" class="product-img"><img src="${p.image}" alt="${p.name}" loading="lazy"></a>
      <div class="product-info">
        <a href="pages/product.html?id=${p.id}" class="product-name">${p.name}</a>
        <div class="product-price">
          <span class="price-current">${fmt(p.price)}</span>
          ${p.originalPrice ? `<span class="price-old">${fmt(p.originalPrice)}</span>` : ''}
          ${p.originalPrice ? `<span class="price-discount">-${disc}%</span>` : ''}
        </div>
        <div class="product-rating">${stars(p.rating)} <span>(${p.reviews})</span></div>
        <div class="product-actions">
          <a href="${p.affiliateLink}" target="_blank" rel="nofollow" class="btn btn-primary btn-sm">Buy Now</a>
          <button class="btn-compare" data-id="${p.id}"><i class="fas fa-plus-circle"></i> Compare</button>
        </div>
      </div>
    </div>`;
  }

  // ---- 1. Hero Slider ----
  function initSlider() {
    const slider = document.getElementById('heroSlider');
    if (!slider) return;
    const slides = slider.querySelectorAll('.slide');
    const dots = slider.querySelectorAll('.slider-dot');
    let idx = 0, timer;

    function go(i) {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      idx = (i + slides.length) % slides.length;
      slides[idx].classList.add('active');
      dots[idx].classList.add('active');
    }

    dots.forEach(d => d.addEventListener('click', () => go(parseInt(d.dataset.slide))));
    timer = setInterval(() => go(idx + 1), 5000);
    slider.addEventListener('mouseenter', () => clearInterval(timer));
    slider.addEventListener('mouseleave', () => { timer = setInterval(() => go(idx + 1), 5000); });
  }

  // ---- 2. Featured Products ----
  function initFeatured() {
    const grid = document.getElementById('featuredProducts');
    const tabs = document.querySelectorAll('.section-nav button');
    if (!grid) return;

    function render(cat) {
      let items = window.products || [];
      if (cat && cat !== 'all') items = items.filter(p => p.category === cat);
      grid.innerHTML = items.slice(0, 8).map(productCard).join('');
    }

    tabs.forEach(t => {
      t.addEventListener('click', () => {
        tabs.forEach(x => x.classList.remove('active'));
        t.classList.add('active');
        render(t.dataset.tab);
      });
    });
    render('all');
  }

  // ---- 3. Search ----
  function initSearch() {
    const input = document.getElementById('searchInput');
    const sugg = document.getElementById('searchSuggestions');
    if (!input) return;

    input.addEventListener('input', function () {
      const q = this.value.trim().toLowerCase();
      if (q.length < 1) { sugg.classList.remove('active'); return; }
      const results = (window.products || []).filter(p =>
        p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
      ).slice(0, 6);
      if (results.length) {
        sugg.innerHTML = results.map(p => `<div class="search-suggestion-item" data-id="${p.id}">
          <img src="${p.image}" alt="${p.name}">
          <div class="info"><div class="name">${p.name}</div><div class="price">${fmt(p.price)}</div></div>
        </div>`).join('');
        sugg.classList.add('active');
        sugg.querySelectorAll('.search-suggestion-item').forEach(el => {
          el.addEventListener('click', () => {
            window.location.href = 'pages/product.html?id=' + el.dataset.id;
          });
        });
      } else { sugg.classList.remove('active'); }
    });

    document.addEventListener('click', e => {
      if (!input.contains(e.target) && !sugg.contains(e.target)) sugg.classList.remove('active');
    });

    document.getElementById('searchForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const q = input.value.trim();
      if (q) window.location.href = 'pages/deals.html?search=' + encodeURIComponent(q);
    });
  }

  // ---- 4. Countdown ----
  function initCountdown() {
    const d = document.getElementById('days'), h = document.getElementById('hours'),
      m = document.getElementById('minutes'), s = document.getElementById('seconds');
    if (!d) return;
    const end = new Date();
    end.setDate(end.getDate() + 14);
    function tick() {
      const t = Math.max(0, end - new Date());
      d.textContent = String(Math.floor(t / 86400000)).padStart(2, '0');
      h.textContent = String(Math.floor((t % 86400000) / 3600000)).padStart(2, '0');
      m.textContent = String(Math.floor((t % 3600000) / 60000)).padStart(2, '0');
      s.textContent = String(Math.floor((t % 60000) / 1000)).padStart(2, '0');
    }
    tick(); setInterval(tick, 1000);
  }

  // ---- 5. Compare Cart ----
  const cart = {
    items: JSON.parse(localStorage.getItem('ag_cart') || '[]'),
    save() { localStorage.setItem('ag_cart', JSON.stringify(this.items)); this.updateUI(); },
    add(id) {
      if (this.items.includes(id)) return;
      if (this.items.length >= 5) { alert('Max 5 products to compare'); return; }
      this.items.push(id); this.save(); showToast('Added to comparison');
    },
    remove(id) { this.items = this.items.filter(i => i !== id); this.save(); },
    updateUI() {
      const c = document.getElementById('cartCount');
      if (c) c.textContent = this.items.length;
      const container = document.getElementById('cartItems');
      if (!container) return;
      if (!this.items.length) { container.innerHTML = '<p class="cart-empty">Your comparison list is empty.</p>'; return; }
      let html = '';
      this.items.forEach(id => {
        const p = getProductById(id);
        if (p) html += `<div style="display:flex;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);align-items:center;">
          <img src="${p.image}" style="width:50px;height:50px;object-fit:contain;">
          <div style="flex:1;font-size:13px;"><div>${p.name}</div><div style="color:var(--red);font-weight:600;">${fmt(p.price)}</div></div>
          <button class="close-cart" onclick="(function(){document.querySelector('script').__cart.remove('${id}')})()" style="background:none;border:none;cursor:pointer;color:var(--text-light);font-size:16px;">&times;</button>
        </div>`;
      });
      container.innerHTML = html;
    }
  };

  // Make cart accessible to inline buttons
  const scriptTag = document.querySelector('script[src*="main.js"]');
  if (scriptTag) scriptTag.__cart = cart;

  function initCart() {
    const btn = document.getElementById('cartBtn');
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    const closeBtn = document.getElementById('closeCart');
    if (!btn || !sidebar) return;
    cart.updateUI();

    btn.addEventListener('click', e => { e.preventDefault(); sidebar.classList.add('open'); overlay.classList.add('active'); });
    if (closeBtn) closeBtn.addEventListener('click', () => { sidebar.classList.remove('open'); overlay.classList.remove('active'); });
    if (overlay) overlay.addEventListener('click', () => { sidebar.classList.remove('open'); overlay.classList.remove('active'); });

    document.addEventListener('click', e => {
      const cmp = e.target.closest('.btn-compare');
      if (cmp) { e.preventDefault(); cart.add(cmp.dataset.id); }
    });
  }

  // ---- Toast ----
  function showToast(msg) {
    const t = document.createElement('div');
    t.style.cssText = 'position:fixed;bottom:70px;left:50%;transform:translateX(-50%);background:#333;color:#fff;padding:10px 24px;border-radius:4px;font-size:14px;z-index:999;animation:fadeInUp 0.3s ease;';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.3s'; setTimeout(() => t.remove(), 300); }, 2000);
  }

  // ---- 6. Header Scroll ----
  function initScroll() {
    const h = document.querySelector('.header');
    if (!h) return;
    window.addEventListener('scroll', () => h.classList.toggle('scrolled', window.scrollY > 60));
  }

  // ---- 7. Back to Top ----
  function initBackTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 500));
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ---- 8. Mobile Menu ----
  function initMobile() {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mobileNav');
    const overlay = document.getElementById('mobileOverlay');
    const close = document.getElementById('closeMenu');
    if (!toggle || !nav) return;

    function open() { nav.classList.add('open'); if (overlay) overlay.classList.add('active'); }
    function closeM() { nav.classList.remove('open'); if (overlay) overlay.classList.remove('active'); }

    toggle.addEventListener('click', open);
    if (close) close.addEventListener('click', closeM);
    if (overlay) overlay.addEventListener('click', closeM);
  }

  // ---- 9. Disclaimer ----
  function initDisclaimer() {
    const b = document.getElementById('disclaimerBanner');
    if (!b) return;
    if (localStorage.getItem('ag_disclaimer')) b.style.display = 'none';
    b.querySelector('.close-disclaimer')?.addEventListener('click', () => {
      b.style.display = 'none';
      localStorage.setItem('ag_disclaimer', '1');
    });
  }

  // ---- Page-specific: Category ----
  function initCategory() {
    const grid = document.getElementById('categoryProducts');
    const title = document.getElementById('categoryHeading');
    const catTitle = document.getElementById('catTitle');
    if (!grid) return;

    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    if (cat && catTitle) catTitle.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    if (cat && title) title.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);

    const cats = { iphone: 'smartphones', samsung: 'smartphones', xiaomi: 'smartphones', google: 'smartphones', oneplus: 'smartphones', oppo: 'smartphones',
      macbook: 'laptops', dell: 'laptops', lenovo: 'laptops', hp: 'laptops', asus: 'laptops', gaming: 'laptops',
      ipad: 'tablets', 'android-tablet': 'tablets',
      apple: 'smartphones', sony: 'audio', bose: 'audio' };
    const mapped = cats[cat] || cat;
    const items = mapped ? getProductsByCategory(mapped) : window.products || [];
    grid.innerHTML = items.map(productCard).join('');
  }

  // ---- Page-specific: Deals ----
  function initDeals() {
    const grid = document.getElementById('allProducts');
    if (!grid) return;

    const params = new URLSearchParams(window.location.search);
    const q = params.get('search');
    let items = window.products || [];
    if (q) {
      items = items.filter(p => p.name.toLowerCase().includes(q.toLowerCase()) || p.brand.toLowerCase().includes(q));
      const title = document.querySelector('h1');
      if (title) title.textContent = 'Search results for "' + q + '"';
    }
    grid.innerHTML = items.map(productCard).join('');
  }

  // ---- Page-specific: Product Detail ----
  function initProduct() {
    const detail = document.getElementById('productDetail');
    const pName = document.getElementById('productName');
    const bCat = document.getElementById('breadcrumbCat');
    if (!detail) return;

    const params = new URLSearchParams(window.location.search);
    const p = getProductById(params.get('id'));
    if (!p) { detail.innerHTML = '<p>Product not found.</p>'; return; }

    if (pName) pName.textContent = p.name;
    document.title = p.name + ' - Affiliate Global';
    if (bCat) bCat.textContent = p.category.charAt(0).toUpperCase() + p.category.slice(1);

    const disc = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
    const images = p.images && p.images.length ? p.images : [p.image];

    // --- Image gallery with thumbnails ---
    const thumbnails = images.map((img, i) =>
      `<img class="product-thumb${i === 0 ? ' active' : ''}" src="${img}" alt="" data-index="${i}">`
    ).join('');

    const galleryHtml = `<div class="product-detail-images">
      <div class="product-detail-img">
        <img id="mainProductImage" src="${images[0]}" alt="${p.name}">
      </div>
      <div class="gallery-thumbs">${thumbnails}</div>
    </div>`;

    // --- Info panel ---
    const infoHtml = `<div class="product-detail-info">
      <h1>${p.name}</h1>
      <div class="rating-big">${stars(p.rating)} <span>${p.rating} (${p.reviews} reviews)</span></div>
      <div class="product-detail-price">
        <span class="current">${fmt(p.price)}</span>
        ${p.originalPrice ? `<span class="old">${fmt(p.originalPrice)}</span>` : ''}
        ${p.originalPrice ? `<span class="price-discount">-${disc}%</span>` : ''}
      </div>
      <p style="color:var(--text-light);margin-bottom:16px;line-height:1.6;">${p.description}</p>
      <div class="product-detail-features">
        <h3>Key Features</h3>
        <ul>${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
      </div>
      <div class="product-detail-actions">
        <a href="${p.affiliateLink}" target="_blank" rel="nofollow" class="btn btn-primary">Buy on Amazon <i class="fas fa-external-link-alt"></i></a>
        <button class="btn-compare" data-id="${p.id}"><i class="fas fa-plus-circle"></i> Compare</button>
      </div>
    </div>`;

    detail.innerHTML = `<div class="product-detail">${galleryHtml}${infoHtml}</div>`;

    // --- Thumbnail click handler ---
    detail.querySelectorAll('.product-thumb').forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        detail.querySelectorAll('.product-thumb').forEach(function (t) { t.classList.remove('active'); });
        this.classList.add('active');
        document.getElementById('mainProductImage').src = this.src;
      });
    });

    // --- YouTube video ---
    const videoContainer = document.getElementById('productVideo');
    if (videoContainer && p.videoId) {
      videoContainer.innerHTML = '<div class="product-video-section">' +
        '<h2 class="section-title">Video Review</h2>' +
        '<div class="video-wrapper">' +
        '<iframe src="https://www.youtube.com/embed/' + p.videoId + '" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>' +
        '</div></div>';
    } else if (videoContainer) {
      videoContainer.innerHTML = '';
    }

    // --- Specs table ---
    const specsContainer = document.getElementById('productSpecs');
    if (specsContainer && p.specs && p.specs.length) {
      var specsRows = '';
      for (var i = 0; i < p.specs.length; i++) {
        specsRows += '<tr><td class="spec-label">' + p.specs[i].label + '</td><td class="spec-value">' + p.specs[i].value + '</td></tr>';
      }
      specsContainer.innerHTML = '<div class="product-specs-section">' +
        '<h2 class="section-title">Specifications</h2>' +
        '<table class="specs-table"><tbody>' + specsRows + '</tbody></table>' +
        '</div>';
    } else if (specsContainer) {
      specsContainer.innerHTML = '';
    }

    // --- Related products ---
    var relatedContainer = document.getElementById('relatedProducts');
    if (relatedContainer) {
      var related = getProductsByCategory(p.category).filter(function (x) { return x.id !== p.id; }).slice(0, 4);
      if (related.length) {
        var cards = '';
        for (var i = 0; i < related.length; i++) {
          cards += productCard(related[i]);
        }
        relatedContainer.innerHTML = '<div class="related-products-section">' +
          '<h2 class="section-title">Related Products</h2>' +
          '<div class="product-grid">' + cards + '</div></div>';
      } else {
        relatedContainer.innerHTML = '';
      }
    }
  }

  // ---- Init ----
  document.addEventListener('DOMContentLoaded', function () {
    initSlider();
    initFeatured();
    initSearch();
    initCountdown();
    initCart();
    initScroll();
    initBackTop();
    initMobile();
    initDisclaimer();
    initCategory();
    initDeals();
    initProduct();
  });
})();
