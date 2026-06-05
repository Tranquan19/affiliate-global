/**
 * Affiliate Global — Apple-Inspired UI
 * Depends on products.js (window.products, getProductById, getProductsByCategory)
 */
(function () {
  'use strict';

  /* ---- Utilities ---- */
  function fmt(n) { return '$' + Number(n).toLocaleString('en-US'); }
  function stars(r) {
    var h = '';
    for (var i = 1; i <= 5; i++) {
      h += i <= r ? '<i class="fas fa-star"></i>' :
           i - 0.5 <= r ? '<i class="fas fa-star-half-alt"></i>' :
           '<i class="far fa-star"></i>';
    }
    return h;
  }

  function productCard(p) {
    var badge = p.badge ? '<span class="product-badge' +
      (p.badge === 'Sale' ? ' sale' : p.badge === 'New' ? ' new' : '') +
      '">' + p.badge + '</span>' : '';
    var disc = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
    var priceHtml = '<span class="price-current">' + fmt(p.price) + '</span>';
    if (p.originalPrice) {
      priceHtml += '<span class="price-old">' + fmt(p.originalPrice) + '</span>';
      priceHtml += '<span class="price-discount">-' + disc + '%</span>';
    }
    return '<div class="product-card" data-id="' + p.id + '">' +
      badge +
      '<a href="pages/product.html?id=' + p.id + '" class="product-img-wrap">' +
        '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy">' +
      '</a>' +
      '<div class="product-info">' +
        '<div class="product-brand">' + p.brand + '</div>' +
        '<a href="pages/product.html?id=' + p.id + '" class="product-name">' + p.name + '</a>' +
        '<div class="product-price">' + priceHtml + '</div>' +
        '<div class="product-rating">' + stars(p.rating) + ' <span>(' + (p.reviews || 0).toLocaleString() + ')</span></div>' +
        '<div class="product-card-actions">' +
          '<a href="' + p.affiliateLink + '" target="_blank" rel="nofollow" class="btn btn-primary btn-sm">Buy Now</a>' +
          '<button class="btn btn-outline btn-sm btn-compare" data-id="' + p.id + '"><i class="fas fa-plus"></i></button>' +
        '</div>' +
      '</div></div>';
  }

  /* ---- Toast ---- */
  function toast(msg) {
    var el = document.createElement('div');
    el.className = 'toast-box';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function () {
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.3s';
      setTimeout(function () { el.remove(); }, 300);
    }, 2000);
  }

  /* ============================================================
     COMPARE SIDEBAR (used across all pages)
     ============================================================ */
  var compare = {
    items: JSON.parse(localStorage.getItem('ag_compare') || '[]'),
    save: function () {
      localStorage.setItem('ag_compare', JSON.stringify(this.items));
      this.updateUI();
    },
    add: function (id) {
      if (this.items.indexOf(id) !== -1) { toast('Already in compare'); return; }
      if (this.items.length >= 5) { toast('Max 5 products to compare'); return; }
      this.items.push(id);
      this.save();
      toast('Added to compare');
    },
    remove: function (id) {
      this.items = this.items.filter(function (i) { return i !== id; });
      this.save();
    },
    updateUI: function () {
      var badge = document.getElementById('compareBadge');
      var sidebar = document.getElementById('sidebarItems');
      var empty = document.querySelector('.sidebar-empty');
      if (badge) badge.textContent = this.items.length;
      if (!sidebar) return;
      if (!this.items.length) {
        sidebar.innerHTML = '<p class="sidebar-empty">Your comparison list is empty.</p>';
        return;
      }
      var html = '';
      var _this = this;
      this.items.forEach(function (id) {
        var p = getProductById(Number(id));
        if (!p && window.products) p = window.products.find(function (x) { return String(x.id) === String(id); });
        if (p) {
          html += '<div class="sidebar-item">' +
            '<img src="' + p.image + '" alt="' + p.name + '">' +
            '<div class="sidebar-item-info">' +
              '<div class="name">' + p.name + '</div>' +
              '<div class="price">' + fmt(p.price) + '</div>' +
            '</div>' +
            '<button class="sidebar-item-remove" data-id="' + p.id + '">&times;</button>' +
          '</div>';
        }
      });
      sidebar.innerHTML = html;
      sidebar.querySelectorAll('.sidebar-item-remove').forEach(function (btn) {
        btn.addEventListener('click', function () { _this.remove(this.dataset.id); });
      });
    }
  };

  function initSidebar() {
    var btn = document.getElementById('compareBtn');
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('sidebarOverlay');
    var closeBtn = document.getElementById('sidebarClose');
    if (!btn || !sidebar) return;
    compare.updateUI();

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      sidebar.classList.add('open');
      if (overlay) overlay.classList.add('active');
    });
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
      });
    }
    if (overlay) {
      overlay.addEventListener('click', function () {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
      });
    }

    document.addEventListener('click', function (e) {
      var cmp = e.target.closest('.btn-compare');
      if (cmp) {
        e.preventDefault();
        compare.add(cmp.dataset.id);
      }
    });
  }

  /* ============================================================
     1. HERO SLIDER (auto-rotating)
     ============================================================ */
  function initSlider() {
    var container = document.getElementById('heroSlider');
    if (!container) return;
    var slides = container.querySelectorAll('.hero-slide');
    var dots = container.querySelectorAll('.hero-dot');
    if (!slides.length) return;
    var idx = 0, timer;

    function go(i) {
      slides.forEach(function (s) { s.classList.remove('active'); });
      dots.forEach(function (d) { d.classList.remove('active'); });
      idx = (i + slides.length) % slides.length;
      slides[idx].classList.add('active');
      dots[idx].classList.add('active');
    }

    dots.forEach(function (d) {
      d.addEventListener('click', function () { go(parseInt(d.dataset.slide)); });
    });

    timer = setInterval(function () { go(idx + 1); }, 5000);
    container.addEventListener('mouseenter', function () { clearInterval(timer); });
    container.addEventListener('mouseleave', function () {
      timer = setInterval(function () { go(idx + 1); }, 5000);
    });
  }

  /* ============================================================
     2. FEATURED PRODUCTS with tab filtering
     ============================================================ */
  function initFeatured() {
    var grid = document.getElementById('featuredGrid');
    var tabs = document.querySelectorAll('.tab-filters button');
    if (!grid) return;

    function render(cat) {
      var items = window.products || [];
      if (cat && cat !== 'all') {
        var map = { phones: 'smartphones', laptops: 'laptops', tablets: 'tablets', audio: 'audio' };
        items = items.filter(function (p) { return p.category === (map[cat] || cat); });
      }
      grid.innerHTML = items.slice(0, 8).map(productCard).join('');
    }

    tabs.forEach(function (t) {
      t.addEventListener('click', function () {
        tabs.forEach(function (x) { x.classList.remove('active'); });
        t.classList.add('active');
        render(t.dataset.tab);
      });
    });
    render('all');
  }

  /* ============================================================
     3. SEARCH with live suggestions
     ============================================================ */
  function initSearch() {
    var input = document.getElementById('searchInput');
    if (!input) return;
    var searchBox = document.querySelector('.nav-search');
    var searchToggle = document.getElementById('searchToggle');
    var searchClose = document.getElementById('searchClose');

    if (searchToggle && searchBox) {
      searchToggle.addEventListener('click', function (e) {
        e.preventDefault();
        searchBox.classList.add('open');
        input.focus();
      });
    }
    if (searchClose && searchBox) {
      searchClose.addEventListener('click', function () {
        searchBox.classList.remove('open');
        input.value = '';
      });
    }

    input.addEventListener('input', function () {
      var q = this.value.trim().toLowerCase();
      // Just for the input, we don't show suggestions in Apple style
    });

    // Submit search -> deals page
    document.getElementById('searchForm').addEventListener('submit', function (e) {
      e.preventDefault();
      var q = input.value.trim();
      if (q) {
        window.location.href = 'pages/deals.html?search=' + encodeURIComponent(q);
      }
    });
  }

  /* ============================================================
     4. NAV SCROLL EFFECT
     ============================================================ */
  function initNavScroll() {
    var nav = document.querySelector('.nav-bar');
    if (!nav) return;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        nav.style.borderBottomColor = 'rgba(255,255,255,0.12)';
      } else {
        nav.style.borderBottomColor = 'rgba(255,255,255,0.08)';
      }
    });
  }

  /* ============================================================
     5. BACK TO TOP
     ============================================================ */
  function initBackTop() {
    var btn = document.getElementById('backTop');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      btn.classList.toggle('show', window.scrollY > 500);
    });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ============================================================
     6. MOBILE MENU
     ============================================================ */
  function initMobile() {
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('mobileNav');
    var overlay = document.getElementById('mobileOverlay');
    var close = document.getElementById('mobileClose');
    if (!toggle || !nav) return;

    function open() {
      nav.classList.add('open');
      if (overlay) overlay.classList.add('active');
    }
    function closeM() {
      nav.classList.remove('open');
      if (overlay) overlay.classList.remove('active');
    }

    toggle.addEventListener('click', open);
    if (close) close.addEventListener('click', closeM);
    if (overlay) overlay.addEventListener('click', closeM);
  }

  /* ============================================================
     7. DISCLAIMER DISMISS
     ============================================================ */
  function initDisclaimer() {
    var b = document.getElementById('disclaimerBanner');
    if (!b) return;
    if (localStorage.getItem('ag_disclaimer_done')) { b.style.display = 'none'; return; }
    var closeBtn = b.querySelector('.disclaimer-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        b.style.display = 'none';
        localStorage.setItem('ag_disclaimer_done', '1');
      });
    }
  }

  /* ============================================================
     8. CATEGORY PAGE
     ============================================================ */
  function initCategory() {
    var grid = document.getElementById('categoryGrid');
    var heading = document.getElementById('catHeading');
    var title = document.getElementById('catTitle');
    var count = document.getElementById('catCount');
    if (!grid) return;

    var params = new URLSearchParams(window.location.search);
    var cat = params.get('cat');
    if (cat) {
      var label = cat.charAt(0).toUpperCase() + cat.slice(1);
      if (title) title.textContent = label;
      if (heading) heading.textContent = label;
    }

    var catMap = {
      iphone: 'smartphones', samsung: 'smartphones', xiaomi: 'smartphones',
      google: 'smartphones', oneplus: 'smartphones',
      macbook: 'laptops', dell: 'laptops', lenovo: 'laptops', hp: 'laptops', asus: 'laptops', gaming: 'laptops',
      ipad: 'tablets', 'android-tablet': 'tablets',
      apple: 'smartphones', sony: 'audio', bose: 'audio'
    };
    var mapped = catMap[cat] || cat;
    var items = mapped ? getProductsByCategory(mapped) : (window.products || []);
    grid.innerHTML = items.map(productCard).join('');
    if (count) count.textContent = items.length + ' products';
  }

  /* ============================================================
     9. DEALS PAGE
     ============================================================ */
  function initDeals() {
    var grid = document.getElementById('dealsGrid');
    if (!grid) return;
    var params = new URLSearchParams(window.location.search);
    var q = params.get('search');
    var items = window.products || [];
    var heading = document.querySelector('.pd-info h1') || document.getElementById('dealsHeading');

    if (q) {
      var lower = q.toLowerCase();
      items = items.filter(function (p) {
        return p.name.toLowerCase().indexOf(lower) !== -1 ||
               p.brand.toLowerCase().indexOf(lower) !== -1;
      });
      if (heading) heading.textContent = 'Results for "' + q + '"';
    }
    grid.innerHTML = items.map(productCard).join('');
  }

  /* ============================================================
     10. PRODUCT DETAIL PAGE
     ============================================================ */
  function initProduct() {
    var detail = document.getElementById('pdDetail');
    var pName = document.getElementById('pdName');
    var bCat = document.getElementById('pdBreadcrumbCat');
    if (!detail) return;

    var params = new URLSearchParams(window.location.search);
    var p = getProductById(params.get('id'));
    if (!p) {
      // try numeric id
      if (window.products) {
        p = window.products.find(function (x) { return String(x.id) === params.get('id'); });
      }
    }
    if (!p) {
      detail.innerHTML = '<div style="text-align:center;padding:60px 20px;"><h2>Product not found</h2><p style="color:var(--text-caption);margin-top:8px;">The product you\'re looking for doesn\'t exist.</p></div>';
      return;
    }

    if (pName) pName.textContent = p.name;
    document.title = p.name + ' — Affiliate Global';
    if (bCat) bCat.textContent = p.category.charAt(0).toUpperCase() + p.category.slice(1);

    var disc = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
    var images = p.images && p.images.length ? p.images : [p.image];

    var thumbs = images.map(function (img, i) {
      return '<img class="pd-thumb' + (i === 0 ? ' active' : '') + '" src="' + img + '" alt="" data-index="' + i + '">';
    }).join('');

    var galleryHtml =
      '<div class="pd-gallery">' +
        '<div class="pd-main-img"><img id="pdMainImage" src="' + images[0] + '" alt="' + p.name + '"></div>' +
        '<div class="pd-thumbs">' + thumbs + '</div>' +
      '</div>';

    var infoHtml =
      '<div class="pd-info">' +
        '<div class="product-brand">' + p.brand + '</div>' +
        '<h1>' + p.name + '</h1>' +
        '<div class="pd-rating">' + stars(p.rating) + ' <span>' + p.rating + ' (' + (p.reviews || 0).toLocaleString() + ' reviews)</span></div>' +
        '<div class="pd-price">' +
          '<span class="cur">' + fmt(p.price) + '</span>' +
          (p.originalPrice ? '<span class="old">' + fmt(p.originalPrice) + '</span>' : '') +
          (p.originalPrice ? '<span class="price-discount" style="margin-left:8px;">-' + disc + '%</span>' : '') +
        '</div>' +
        '<p class="pd-desc">' + p.description + '</p>' +
        '<div class="pd-features">' +
          '<h3>Key Features</h3>' +
          '<ul>' + p.features.map(function (f) { return '<li>' + f + '</li>'; }).join('') + '</ul>' +
        '</div>' +
        '<div class="pd-actions">' +
          '<a href="' + p.affiliateLink + '" target="_blank" rel="nofollow" class="btn btn-primary">Buy Now <i class="fas fa-arrow-right"></i></a>' +
          '<button class="btn btn-outline btn-compare" data-id="' + p.id + '"><i class="fas fa-plus"></i> Compare</button>' +
        '</div>' +
      '</div>';

    detail.innerHTML = '<div class="pd-grid">' + galleryHtml + infoHtml + '</div>';

    // Thumbnail clicks
    detail.querySelectorAll('.pd-thumb').forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        detail.querySelectorAll('.pd-thumb').forEach(function (t) { t.classList.remove('active'); });
        this.classList.add('active');
        document.getElementById('pdMainImage').src = this.src;
      });
    });

    // Video
    var videoBox = document.getElementById('pdVideo');
    if (videoBox && p.videoId) {
      videoBox.innerHTML =
        '<div class="pd-video-box">' +
          '<h2 class="section-title" style="margin-bottom:0;">Video Review</h2>' +
          '<div class="video-wrap">' +
            '<iframe src="https://www.youtube.com/embed/' + p.videoId + '" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>' +
          '</div>' +
        '</div>';
    } else if (videoBox) {
      videoBox.innerHTML = '';
    }

    // Specs
    var specsBox = document.getElementById('pdSpecs');
    if (specsBox && p.specs && p.specs.length) {
      var rows = '';
      for (var i = 0; i < p.specs.length; i++) {
        rows += '<tr><td class="specs-label">' + p.specs[i].label + '</td><td class="specs-value">' + p.specs[i].value + '</td></tr>';
      }
      specsBox.innerHTML =
        '<div class="pd-specs-box">' +
          '<h2 class="section-title" style="margin-bottom:16px;">Specifications</h2>' +
          '<table class="specs-table"><tbody>' + rows + '</tbody></table>' +
        '</div>';
    } else if (specsBox) {
      specsBox.innerHTML = '';
    }

    // Related
    var relatedBox = document.getElementById('pdRelated');
    if (relatedBox) {
      var related = getProductsByCategory(p.category).filter(function (x) { return x.id !== p.id; }).slice(0, 4);
      if (related.length) {
        relatedBox.innerHTML =
          '<div class="pd-related" style="margin-top:32px;">' +
            '<h2 class="section-title" style="margin-bottom:20px;">Related Products</h2>' +
            '<div class="product-grid">' + related.map(productCard).join('') + '</div>' +
          '</div>';
      }
    }
  }

  /* ============================================================
     INIT
     ============================================================ */
  document.addEventListener('DOMContentLoaded', function () {
    initSlider();
    initFeatured();
    initSearch();
    initSidebar();
    initNavScroll();
    initBackTop();
    initMobile();
    initDisclaimer();
    initCategory();
    initDeals();
    initProduct();
  });
})();
