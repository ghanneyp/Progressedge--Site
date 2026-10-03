document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var hamburger = document.getElementById('navHamburger');
  var navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
      });
    });
  }

  // "Start a conversation" modal
  var overlay = document.getElementById('conversationModal');
  var openers = document.querySelectorAll('[data-open-modal]');
  var closers = document.querySelectorAll('[data-close-modal]');

  openers.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      if (overlay) overlay.classList.add('is-open');
    });
  });

  closers.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (overlay) overlay.classList.remove('is-open');
    });
  });

  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) overlay.classList.remove('is-open');
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay) overlay.classList.remove('is-open');
  });

  // Insights filter tabs
  var tabs = document.querySelectorAll('.insights-tab');
  var items = document.querySelectorAll('[data-insight-category]');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('is-active'); });
      tab.classList.add('is-active');
      var filter = tab.getAttribute('data-filter');
      items.forEach(function (item) {
        if (filter === 'all' || item.getAttribute('data-insight-category') === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  

  // Enquiry form (no backend — just confirm submission client-side)
  var form = document.getElementById('enquiryForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.innerHTML = '<p style="font-family: var(--font-heading); font-size: 20px;">Thanks — we\'ll be in touch within 1–2 working days.</p>';
    });
  }
  
});
// Client Login (no backend yet — just let people know it's coming)
var clientLogin = document.getElementById('clientLoginLink');
if (clientLogin) {
  clientLogin.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Client login is coming soon.');
  });
}


