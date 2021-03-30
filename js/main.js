$(document).ready(function(){
    $(".fa-bars").click(function(){
      $("#mbl_nav").slideToggle();
    });

    /*home typed js*/
    var typed = new Typed('.htype', {
      strings: ['Ordinary boy', 'Student', 'Blogger',],
      typeSpeed: 70,
      loop: true,
    });

    /*Blogg typed js*/
    var typed = new Typed('.type', {
      strings: ['Welcome to Blogg Page', 'Enjoy Reading'],
      typeSpeed: 40,
      loop: true,
    });



  });
