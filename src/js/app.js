'use strict'

$(document).ready(() => {
    Particles.init({
        selector         : '.particles',
        connectParticles : false,
        color            : '#0489B1',
        speed            : 0.3,
        maxParticles     : 80,
        minDistance      : 300,
    });

    $(window).scroll(() => {
        if ($(window).scrollTop() < 160) {
            $('#navbar-principal').css('background-color', 'transparent');
        }else{
            $('#navbar-principal').css('background-color', 'rgba(0, 0, 0, 0.5)');
        }
    });

    $(() => {
        $("body").niceScroll({
            cursorborder : '0px',
            cursorcolor  : 'rgba(0, 0, 0, 0.5)',
        });
    });

    $('#about').waypoint(() => {
        $('#animate-about').addClass('text-info');
        $('#animate-about').addClass('animated fadeInLeft');
    }, {offset: '80%'});

    $('#about').waypoint(() => {
        $('#animate-profile').removeClass('hidden-right');
        $('#animate-profile').addClass('animated fadeInRight');
    }, {offset: '30%'});

    $('#animate-diff').waypoint(() => {
        $('#animate-diff').addClass('text-info');
        $('#animate-diff').addClass('animated fadeInLeft');
    }, {offset: '80%'});

    $('#animate-exp').waypoint(() => {
        $('#animate-exp').addClass('text-info');
        $('#animate-exp').addClass('animated fadeInLeft');
    }, {offset: '80%'});

    $('#animate-method').waypoint(() => {
        $('#animate-method').addClass('text-info');
        $('#animate-method').addClass('animated fadeInLeft');
    }, {offset: '80%'});

    $('#animate-contact-title').waypoint(() => {
        $('#animate-contact-title').addClass('text-info');
        $('#animate-contact-title').addClass('animated fadeInLeft');
    }, {offset: '90%'});

    document.getElementById('animate-contact-sub-title').waypoint(() => {

    })

    $('#animate-contact-sub-title').waypoint(() => {
        $('#animate-contact-sub-title').addClass('text-info');
        $('#animate-contact-sub-title').addClass('animated fadeInLeft');
    }, {offset: '80%'});

    let date = new Date().getFullYear()
    console.info(".__________________________________.");
    console.info("|"+date + " profmarcoshenrique.com v2.0.0|");
    console.info("|    Developed by Victor Barreto   |");
    console.info("| victor.eduardo.barreto@gmail.com |");
    console.info(".__________________________________.");
});
