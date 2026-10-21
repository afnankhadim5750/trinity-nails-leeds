// Trinity Nails & Beauty — mobile navigation toggle.
// The open dropdown (.nav-links.open) is z-index:2000 in styles.css,
// positioned fixed above the header and all page content.
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  function setOpen(open) {
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    toggle.querySelector('i').className = open ? 'bi bi-x' : 'bi bi-list';
  }

  toggle.addEventListener('click', function () {
    setOpen(!links.classList.contains('open'));
  });

  // Visible close (X) button inside the mobile panel, since the panel
  // (z-index 2000) covers the header hamburger while open.
  var closeItem = document.createElement('li');
  closeItem.className = 'nav-close';
  var closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.setAttribute('aria-label', 'Close menu');
  closeBtn.innerHTML = '<i class="bi bi-x" aria-hidden="true"></i>';
  closeBtn.addEventListener('click', function () { setOpen(false); });
  closeItem.appendChild(closeBtn);
  links.insertBefore(closeItem, links.firstChild);

  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
});

// FAQ accordion
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    var body = item.querySelector('.faq-a');
    if (!btn || !body) return;
    btn.addEventListener('click', function () {
      var open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      body.style.maxHeight = open ? body.scrollHeight + 'px' : '0';
    });
  });
});
