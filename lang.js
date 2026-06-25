/* Calle Sol — kielivalinta. Oletus: englanti (en). Vaihtoehto: suomi (fi). */
(function () {
  var root = document.documentElement;
  var lang = 'en';
  try { lang = localStorage.getItem('callesol-lang') || 'en'; } catch (e) {}
  apply(lang); // aseta heti (estää välähdyksen)

  function apply(l) {
    root.setAttribute('data-lang', l);
    root.setAttribute('lang', l);
    try { localStorage.setItem('callesol-lang', l); } catch (e) {}
    var btns = document.querySelectorAll('[data-setlang]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', btns[i].getAttribute('data-setlang') === l ? 'true' : 'false');
    }
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-setlang]');
    if (b) { e.preventDefault(); apply(b.getAttribute('data-setlang')); }
  });
  document.addEventListener('DOMContentLoaded', function () {
    apply(root.getAttribute('data-lang') || 'en');
    // Sticky-yläpalkki: näkyviin kun skrollataan alas
    var top = document.getElementById('scrolltop');
    if (top) {
      var onScroll = function () { top.classList.toggle('is-visible', window.scrollY > 80); };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    // Book a table -modaali: avaa kun painetaan #varaa-linkkia
    var modal = document.getElementById('bookmodal');
    if (modal) {
      var closeBook = function () { modal.hidden = true; document.body.style.overflow = ''; };
      document.addEventListener('click', function (e) {
        var a = e.target.closest && e.target.closest('a[href$="#varaa"]');
        if (a && !a.closest('.bookmodal')) {
          e.preventDefault();
          modal.hidden = false;
          document.body.style.overflow = 'hidden';
        }
      });
      modal.addEventListener('click', function (e) {
        if (e.target.closest('[data-book-close]')) closeBook();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.hidden) closeBook();
      });
    }
  });
})();
