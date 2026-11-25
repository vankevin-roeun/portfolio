(function () {
  var header = document.querySelector('header.nav');
  var menuBtn = document.getElementById('menu-btn');
  var links = document.getElementById('nav-links');

  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 10); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  menuBtn.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Bouton « Copier » de l'adresse e-mail (page Contact)
  var copyBtn = document.getElementById('copy-mail');
  var mail = document.getElementById('mail');
  if (copyBtn && mail) {
    copyBtn.addEventListener('click', function () {
      var text = mail.textContent.trim();
      function selectFallback() {
        var r = document.createRange(); r.selectNodeContents(mail);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        copyBtn.textContent = 'Sélectionné';
      }
      try {
        navigator.clipboard.writeText(text).then(function () {
          copyBtn.textContent = 'Copié';
          setTimeout(function () { copyBtn.textContent = 'Copier'; }, 1800);
        }, selectFallback);
      } catch (err) { selectFallback(); }
    });
  }
})();
