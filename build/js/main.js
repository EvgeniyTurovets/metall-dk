$(function() {
    $('#catalog-btn').on('click', function() {
        $(this).toggleClass('active')
        if ($(window).width() >= 1025) {
            $('.header__catalog-des').toggleClass('active')
        } else {
            $('.header__catalog-mob').toggleClass('active')
        }

    })

    function searchRender() {
        if ($(window).width() > 1024) {
            let input = $('#header-search-input')
            if (input.val().length > 0) {
                input.closest('.header__search').addClass('active')
                $('.header__search__list--click').hide()
                $('.header__search__list--change').show()
            } else {
                input.closest('.header__search').removeClass('active')
                $('.header__search__list--change').hide()
                $('.header__search__list--click').show()
            }
        }

    }
    $('#header-search-input').on('blur', function() {
        $(this).closest('.header__search').removeClass('active')
        $('.header__search__list--click').hide()
        $('.header__search__list--change').hide()
    })

    $('#header-search-input').on('change keyup focus', function() {
        searchRender();
    })



    $('.header-delete').on('click', function() {
        $('#header-search-input').val('')
        searchRender();
        $('#header-search-input').focus()
    })

    $('.catalog-slick').slick({
        slideToShow: 1,
        vertical: true,
        lazyLoad: 'ondemand',
        arrows: false,
        dots: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 3000,
    })

    $('.header__catalog-mob .catalog-section span').on('click', function() {
        $(this).next('ul').slideToggle(200)
        $(this).toggleClass('active')
    })
})