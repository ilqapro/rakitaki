$(function() {
  $('[href="!#"]').on('click', function(e) {
    e.preventDefault()
  })
  $('[data-open_popup]').on('click', function() {
    let popup = '#'+$(this).data('open_popup');
    $(popup).addClass('active')
    $('body').addClass('popup_active')
  })
  $('.popup__close').on('click', function() {
    $(this).closest('.popup').removeClass('active')
    $('body').removeClass('popup_active')
  })

  $('body').on('click', 'a[href^="#"]', function() {
    let elem = $(this.hash).offset().top - 100;
    $('html, body').stop().animate({
      scrollTop: elem
    }, '400')
  })

  $('.main__slider-inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000
  });
  $('.slider-main_inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    infinite: false,
    asNavFor: $('.slider-secondary')
  });
  $('.slider-secondary').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: $('.slider-main_inner'),
    focusOnSelect: true,
    infinite: false,
  });
  $('.reviews__slider-inner').slick({
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    dots: true,
    infinite: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerPadding: 0,
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          centerPadding: '80px',
        }
      },
    ]
  })
  let videos__slider_padding = (($('html').width() - $('.container').outerWidth()) / 2) + 150;
  $('.videos__slider-inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    dots: true,
    infinite: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: videos__slider_padding + 'px'
        }
      },
      {
        breakpoint: 0,
        settings: {
          centerPadding: 0
        }
      },
    ]
  })
  $('.videos__slider .arrow-left').css('left', (videos__slider_padding - 150) + 'px')
  $('.videos__slider .arrow-right').css('right', (videos__slider_padding - 150) + 'px')
  $('.photos__slider-inner').slick({
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    dots: true,
    infinite: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })
  $('.slick-dots button').text('');

  $(window).on('load', function() {
    $('.slick-slider').slick('refresh');
    $('.slick-dots button').text('');
  })

  $('.arrow-left').click(function() {
    $(this).closest('[data-slider_wrapper]').find('.slick-prev').trigger('click')
  })
  $('.arrow-right').click(function() {
    $(this).closest('[data-slider_wrapper]').find('.slick-next').trigger('click')
  })

  $('.faq__content-question').click(function () {
    $(this).closest('.faq__content-item').find('.faq__content-answer p').slideToggle(300)
  })

  if( $('html').width() <= 992 ) {
    $('.header__top-side').prepend($('.header__bottom-phone'))
    $('.header__bottom-side').append($('.header__bottom-logo'))
    $('.header__menu').append($('.header__bottom-buttons'))
    $('.header__menu').append($('.header__top-shipping'))
    $('#sales').prepend($('#sales .title'))
    $('#shipping .container').append($('.shipping__head .btn'))
    $('.footer__menu-side').append($('.footer__bottom-buttons'))

    let window_height = $(window).height(),
      header_height = $('header').outerHeight();
    $('.header__menu').css({
      'height': window_height - header_height,
      'top': header_height + 'px'
    })
  }

  $('.burger').click(function() {
    $(this).toggleClass('active')
    $('.header__menu').toggleClass('active')
    $('body').toggleClass('menu-active')
  })

  $('form').on('submit', function(e) {
    e.preventDefault()
    alert('Сделаем вид, что куда-то отправилось')
    $(this)[0].reset()
  })
})