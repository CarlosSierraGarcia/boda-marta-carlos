(function(){

  var target = new Date("2027-05-15T18:00:00+02:00").getTime();

  function tick(){

    var now = new Date().getTime();
    var diff = target - now;

    if (diff < 0) diff = 0;

    var days = Math.floor(diff / (1000*60*60*24));
    var hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    var mins = Math.floor((diff % (1000*60*60)) / (1000*60));
    var secs = Math.floor((diff % (1000*60)) / 1000);

    var d = document.getElementById('cd-days');
    var h = document.getElementById('cd-hours');
    var m = document.getElementById('cd-min');
    var s = document.getElementById('cd-sec');

    if(d) d.textContent = days;
    if(h) h.textContent = String(hours).padStart(2,'0');
    if(m) m.textContent = String(mins).padStart(2,'0');
    if(s) s.textContent = String(secs).padStart(2,'0');

  }

  tick();
  setInterval(tick, 1000);


  /* =========================
     MENÚ MÓVIL
  ========================= */

  var nav = document.getElementById('main-nav');
  var navToggle = document.getElementById('nav-toggle');
  var mobileLinks = document.querySelectorAll('.mobile-menu a');

  if (nav && navToggle) {

    navToggle.addEventListener('click', function() {

      var isOpen = nav.classList.toggle('open');

      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.setAttribute(
        'aria-label',
        isOpen ? 'Cerrar menú' : 'Abrir menú'
      );

    });


    mobileLinks.forEach(function(link) {

      link.addEventListener('click', function() {

        nav.classList.remove('open');

        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menú');

      });

    });


    document.addEventListener('keydown', function(event) {

      if (event.key === 'Escape') {

        nav.classList.remove('open');

        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menú');

      }

    });

  }

})();