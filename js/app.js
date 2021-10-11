




window.addEventListener('load', function(){

    new Glider(document.querySelector('.carousel__lista'),{
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carouser__anterior',
            next: '.carouser__siguiente'
  }
    });

});