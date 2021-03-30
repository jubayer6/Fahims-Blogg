$(document).ready(function(){
    $(".fa-bars").click(function(){
      $("#mbl_nav").slideToggle();
    });

    /*Blogg typed js*/
    var typed = new Typed('.type', {
      strings: ['Welcome to Blogg Page', 'Enjoy Reading'],
      typeSpeed: 55,
      loop: true,
    });



  });
