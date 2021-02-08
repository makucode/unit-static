//HIDE OVERFLOW & TOP SCROLL

window.onunload = function() { 
    window.scrollTo(0, 0); 
}

window.onload = function() { 
    window.scrollTo(0, 0); 
}

if (document.querySelector('.starting-screen')) {
    document.body.classList.add('hide-scroll');
}

const showOverflow = function() {
    document.body.classList.remove('hide-scroll');
}

setTimeout(showOverflow, 2300);

//IMAGE OPTIMIZATION

const logoAir = document.getElementById('ref-1-a');
const screenAir = document.getElementById('ref-1-b');
const logoSib = document.getElementById('ref-2-a');
const screenSib = document.getElementById('ref-2-b');
const logoDif = document.getElementById('ref-3-a');
const screenDif = document.getElementById('ref-3-b');
const logoBus = document.getElementById('ref-4-a');
const screenBus = document.getElementById('ref-4-b');
const portJen = document.getElementById('portrait-jennifer');
const portRaf = document.getElementById('portrait-raffaela');
const portMaxi = document.getElementById('portrait-maximilian');
const portYuan = document.getElementById('portrait-yuan');

if (isSafari) {
    logoAir.src = "assets/imgs/referenzen/airteccon_logo.jpg";
    screenAir.src = "assets/imgs/referenzen/airteccon_screen.jpg";
    logoSib.src = "assets/imgs/referenzen/siberian_love_logo.jpg";
    screenSib.src = "assets/imgs/referenzen/siberian_love_screen.jpg";
    logoDif.src = "assets/imgs/referenzen/difonzo_logo.jpg";
    screenDif.src = "assets/imgs/referenzen/difonzo_screen.jpg";
    logoBus.src = "assets/imgs/referenzen/busradar24_logo.jpg";
    screenBus.src = "assets/imgs/referenzen/busradar24_screen.jpg";
    portJen.src = "assets/imgs/team/portrait-jennifer.jpg";
    portRaf.src = "assets/imgs/team/portrait-raffaela.jpg";
    portMaxi.src = "assets/imgs/team/portrait-maximilian.jpg";
    portYuan.src = "assets/imgs/team/portrait-yuan.jpg";
} else {
    logoAir.src = "assets/imgs/referenzen/airteccon_logo.webp";
    screenAir.src = "assets/imgs/referenzen/airteccon_screen.webp";
    logoSib.src = "assets/imgs/referenzen/siberian_love_logo.webp";
    screenSib.src = "assets/imgs/referenzen/siberian_love_screen.webp";
    logoDif.src = "assets/imgs/referenzen/difonzo_logo.webp";
    screenDif.src = "assets/imgs/referenzen/difonzo_screen.webp";
    logoBus.src = "assets/imgs/referenzen/busradar24_logo.webp";
    screenBus.src = "assets/imgs/referenzen/busradar24_screen.webp";
    portJen.src = "assets/imgs/team/portrait-jennifer.webp";
    portRaf.src = "assets/imgs/team/portrait-raffaela.webp";
    portMaxi.src = "assets/imgs/team/portrait-maximilian.webp";
    portYuan.src = "assets/imgs/team/portrait-yuan.webp";
}

//BURGER

const burgerBtn = document.querySelector('.container-burger');
const menuContainer = document.querySelector('.mobile-nav-container');
const menuLinkItems = document.querySelector('.mobile-nav-links');
let menuOpen = false;


if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
        if (!menuOpen) {
            burgerBtn.classList.add('open');
            menuContainer.classList.add('mobile-nav-open');
            menuLinkItems.classList.add('mobile-nav-links-open');

            $('#mob-link-1').addClass('mob1');
            $('#mob-link-2').addClass('mob2');
            $('#mob-link-3').addClass('mob3');
            $('#mob-link-4').addClass('mob4');

            menuOpen = true;
        }
        else {
            burgerBtn.classList.remove('open');
            menuContainer.classList.remove('mobile-nav-open');
            menuLinkItems.classList.remove('mobile-nav-links-open');

            $('#mob-link-1').removeClass('mob1');
            $('#mob-link-2').removeClass('mob2');
            $('#mob-link-3').removeClass('mob3');
            $('#mob-link-4').removeClass('mob4');

            menuOpen = false;
        }
    });
}

//BURGER LINKS CLICK

const mobileLinks = document.querySelectorAll(".mobile-nav-links a");

mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('body').classList.remove('hide-scroll');
        burgerBtn.classList.remove('open');
        menuContainer.classList.remove('mobile-nav-open');
        menuLinkItems.classList.remove('mobile-nav-links-open');
        menuOpen = false;
    })
})

//HERO CAPTION

const line1 = document.querySelector('#hero-line-1');
const line2 = document.querySelector('#hero-line-2');
const line3 = document.querySelector('#hero-line-3');

line1.classList.add('line-1');
line2.classList.add('line-2');
line3.classList.add('line-3');

$(window).scroll(function () {
    if (document.documentElement.scrollTop >= window.innerHeight) {
        line1.classList.remove('line-1');
        line2.classList.remove('line-2');
        line3.classList.remove('line-3'); 
        line1.classList.remove('line-1-scroll');
        line2.classList.remove('line-2-scroll');
        line3.classList.remove('line-3-scroll');   
    } else if (document.documentElement.scrollTop < window.innerHeight * 0.9) {
        line1.classList.add('line-1-scroll');
        line2.classList.add('line-2-scroll');
        line3.classList.add('line-3-scroll');
    }
})

//SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//SECTION NUMBER ANIMATION

const numAdd1 = function() {
    num1.classList.add('num-active');
}

const numAdd2 = function() {
    num2.classList.add('num-active');
}

const numAdd3 = function() {
    num3.classList.add('num-active');
}

const numAdd4 = function() {
    num4.classList.add('num-active');
}

const numActivate1 = function() {
    numAdd1();
    const prevNumbers = document.querySelectorAll('.num-active');
    checkPrev(num1, prevNumbers);
}

const numActivate2 = function() {
    numAdd2();
    const prevNumbers = document.querySelectorAll('.num-active');
    checkPrev(num2, prevNumbers);    
}

const numActivate3 = function() {
    numAdd3();
    const prevNumbers = document.querySelectorAll('.num-active');
    checkPrev(num3, prevNumbers);    
}

const numActivate4 = function() {
    numAdd4();
    const prevNumbers = document.querySelectorAll('.num-active');
    checkPrev(num4, prevNumbers);    
}

const checkPrev = function(currentNo, prevNumbers) {
    for (var i = 0; i < prevNumbers.length; i++) {
        if (prevNumbers[i] != currentNo) {
            prevNumbers[i].classList.remove('num-active');   
        }
    }
}

const num1 = document.querySelector('.number-1');
const num2 = document.querySelector('.number-2');
const num3 = document.querySelector('.number-3');
const num4 = document.querySelector('.number-4');

const numberAnimation = function() {
    const prevNumbers = document.querySelectorAll('.num-active');
        if (document.documentElement.scrollTop > (window.innerHeight * 0.8) && document.documentElement.scrollTop < (window.innerHeight + (window.innerHeight * 0.8))) {
            numActivate1();  
        } else if (document.documentElement.scrollTop > (window.innerHeight + (window.innerHeight * 0.8)) && document.documentElement.scrollTop < ((2 * window.innerHeight) + (window.innerHeight * 0.8))) {
            numActivate2();  
        } else if (document.documentElement.scrollTop > (2 * window.innerHeight + (window.innerHeight * 0.8)) && document.documentElement.scrollTop < ((3 * window.innerHeight) + (window.innerHeight * 0.8))) {
            numActivate3();  
        } else if (document.documentElement.scrollTop > (3 * window.innerHeight + (window.innerHeight * 0.8)) && document.documentElement.scrollTop < ((4 * window.innerHeight) + (window.innerHeight * 0.8))) {
            numActivate4();
        } else {
            if (prevNumbers) {
                checkPrev(0, prevNumbers);
            }
        }
}

//SCROLL ACTIVE NAV AND HIDE NAV

$(document).ready(function () {
    $(document).on("scroll", onScroll2);
    $(document).on("scroll", numberAnimation);
    $(document).on("scroll", movePointer);
    $(document).on("scroll", mobileLogoOut);
});

const movePointer = function() {

        if (document.documentElement.scrollTop > (window.innerHeight * 0.75) && document.documentElement.scrollTop <= (window.innerHeight + (window.innerHeight * 0.75))) {
            pointer.style.transform = "translateY(0)";
        } else if (document.documentElement.scrollTop > (window.innerHeight + (window.innerHeight * 0.75)) && document.documentElement.scrollTop <= ((2 * window.innerHeight) + (window.innerHeight * 0.75))) {
            pointer.style.transform = "translateY(45px)";
        } else if (document.documentElement.scrollTop > (2 * window.innerHeight + (window.innerHeight * 0.75)) && document.documentElement.scrollTop <= ((3 * window.innerHeight) + (window.innerHeight * 0.75))) {
            pointer.style.transform = "translateY(90px)";
        } else if (document.documentElement.scrollTop > (3 * window.innerHeight + (window.innerHeight * 0.75)) && document.documentElement.scrollTop <= ((4 * window.innerHeight) + (window.innerHeight * 0.75))) { 
            pointer.style.transform = "translateY(135px)";
        }
}

function onScroll2(event){
    var scrollPos = $(document).scrollTop();
    $('.section-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");

            const activeSection = currLink.attr("href");
            const pointer = document.querySelector('.pointer');
            const sectionMenu = document.querySelector('.section-menu');
            const pageNo = document.querySelector('.number');

        }
        else{
            currLink.removeClass("active");
        }

        if (window.pageYOffset > (window.innerHeight * 0.8)) {
            document.querySelector('navbar').classList.remove('navbar-in')
            document.querySelector('.section-menu').style.opacity = 1;
            document.querySelector('#link-1').classList.add('section-items-in1');
            document.querySelector('#link-2').classList.add('section-items-in2');
            document.querySelector('#link-3').classList.add('section-items-in3');
            document.querySelector('#link-4').classList.add('section-items-in4');
            document.querySelector('.pointer').classList.add('pointer-in');
            document.querySelector('.number-0').classList.add('num-0-active');
        } else if (window.pageYOffset < (window.innerHeight * 1)){
            document.querySelector('navbar').classList.add('navbar-in')
            document.querySelector('#link-1').classList.remove('section-items-in1');
            document.querySelector('#link-2').classList.remove('section-items-in2');
            document.querySelector('#link-3').classList.remove('section-items-in3');
            document.querySelector('#link-4').classList.remove('section-items-in4');
            document.querySelector('.pointer').classList.remove('pointer-in');
            document.querySelector('.number-0').classList.remove('num-0-active');
            setTimeout(document.querySelector('.section-menu').style.opacity = 0, 1000); 
        }
    });
}

//SCROLL SNAP

var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               navigator.userAgent &&
               navigator.userAgent.indexOf('CriOS') == -1 &&
               navigator.userAgent.indexOf('FxiOS') == -1;

if (window.innerWidth > 1279 && window.innerHeight > 650 && document.querySelector('.starting-screen') && !isSafari) {
    $.scrollify({
        section : "section",
        sectionName : "section-name",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 800,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
    });
}

$(window).resize(function () {
    if (window.innerWidth > 1279 && window.innerHeight > 650 && document.querySelector('.starting-screen') && !isSafari) {
        $.scrollify({
            section : "section",
            sectionName : "section-name",
            interstitialSection : "",
            easing: "easeOutExpo",
            scrollSpeed: 800,
            offset : 0,
            scrollbars: true,
            standardScrollElements: "",
            setHeights: true,
            overflowScroll: true,
            updateHash: true,
            touchScroll:true,
            before:function() {},
            after:function() {},
            afterResize:function() {},
            afterRender:function() {}
        });
    }
});

//ANIMATE ON SCROLL

AOS.init({
    duration: 1000,
    anchorPlacement: 'top-bottom',
    offset: -200
});

const sectionContent = document.querySelectorAll('section h2');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('section-animation');
    } else {
        if (window.innerWidth > 1279) {
            entry.target.classList.remove('section-animation');
        }
    }
  });
});

sectionContent.forEach(element => {
  observer.observe(element);
});

//AOS RESPONSIVE

const offset = document.createAttribute('data-aos-offset');

const leistungenItems = document.querySelectorAll('.leistungen-item');
const refItems = document.querySelectorAll('.ref-container');
const teamItems = document.querySelectorAll('.team-person, .team-text')

if (window.innerWidth <= 1024 && window.innerWidth > 500) {
    leistungenItems.forEach(e => {
        e.setAttribute('data-aos-offset', '-600');
    });

    refItems.forEach(e => {
        e.setAttribute('data-aos-offset', '-600');
    });

    teamItems.forEach(e => {
        e.setAttribute('data-aos-offset', '-600');
    });
} else if (window.innerWidth <= 500) {
    leistungenItems.forEach(e => {
        e.setAttribute('data-aos-offset', '-800');
    });
    
    refItems.forEach(e => {
        e.setAttribute('data-aos-offset', '-800');
    });

    teamItems.forEach(e => {
        e.setAttribute('data-aos-offset', '-500');
    });
}

//ANIMATE ICONS ON SCROLL

const webdesignIcon = document.getElementById('webdesign-icon');
const designIcon = document.getElementById('design-icon');
const appIcon = document.getElementById('app-icon');
const marketingIcon = document.getElementById('marketing-icon');
const seoIcon = document.getElementById('seo-icon');
const beratungIcon = document.getElementById('beratung-icon');

if (window.innerWidth > 1279 && window.innerHeight > 650 && !isSafari) {
    $(window).scroll(function() {
        if (document.documentElement.scrollTop >= window.innerHeight * 0.9 && document.documentElement.scrollTop < (2 * window.innerHeight) || window.innerWidth < 952) {
            webdesignIcon.play();
            designIcon.play();
            appIcon.play();
            marketingIcon.play();
            seoIcon.play()
            beratungIcon.play()
        } else {
            webdesignIcon.load();
            designIcon.load();
            appIcon.load();
            marketingIcon.load();
            seoIcon.load()
            beratungIcon.load()
        }
    });
} else {
    webdesignIcon.play();
    designIcon.play();
    appIcon.play();
    marketingIcon.play();
    seoIcon.play()
    beratungIcon.play()  
} 

//ARROW ANIMATION

const arrowAnimIn = function() {
    document.getElementById('arrow').classList.add('arrow-hover');
    document.getElementById('circle').classList.add('circle-hover');
}

const arrowAnimOut = function() {
    document.getElementById('arrow').classList.remove('arrow-hover');
    document.getElementById('circle').classList.remove('circle-hover');
}

const heroArrow = document.querySelector('.hero-arrow');

if (heroArrow) {
    heroArrow.addEventListener('mouseover', arrowAnimIn);
    heroArrow.addEventListener('mouseleave', arrowAnimOut);
}

//ARROW CLICK

const arrow = $('.hero-arrow');

arrow.click(function() {
    $('html, body').animate({
        scrollTop: $("#Leistungen").offset().top
    }, 400);
})

//REFERENZEN HOVER

const logo1 = document.getElementById("ref-1-a");
const logo2 = document.getElementById("ref-2-a");
const logo3 = document.getElementById("ref-3-a");
const logo4 = document.getElementById("ref-4-a");

const screen1 = document.getElementById("ref-1-b");
const screen2 = document.getElementById("ref-2-b");
const screen3 = document.getElementById("ref-3-b");
const screen4 = document.getElementById("ref-4-b");

const switchScreen1 = function() {
    logo1.style.opacity = '0';
    screen1.style.opacity = '1';
};

const switchLogo1 = function() {
    logo1.style.opacity = '1';
    screen1.style.opacity = '0';

    console.log("MAKU");
};

const switchScreen2 = function() {
    logo2.style.opacity = '0';
    screen2.style.opacity = '1';
};

const switchLogo2 = function() {
    logo2.style.opacity = '1';
    screen2.style.opacity = '0';
};

const switchScreen3 = function() {
    logo3.style.opacity = '0';
    screen3.style.opacity = '1';
};

const switchLogo3 = function() {
    logo3.style.opacity = '1';
    screen3.style.opacity = '0';
};

const switchScreen4 = function() {
    logo4.style.opacity = '0';
    screen4.style.opacity = '1';
};

const switchLogo4 = function() {
    logo4.style.opacity = '1';
    screen4.style.opacity = '0';
};

if (logo1 ) {
    logo1.addEventListener('mouseover', switchScreen1)
    logo1.addEventListener('mouseleave', switchLogo1)

    logo2.addEventListener('mouseover', switchScreen2)
    logo2.addEventListener('mouseleave', switchLogo2)

    logo3.addEventListener('mouseover', switchScreen3)
    logo3.addEventListener('mouseleave', switchLogo3)

    logo4.addEventListener('mouseover', switchScreen4)
    logo4.addEventListener('mouseleave', switchLogo4)
}

//SECTION MENU HOVER

const pointer = document.querySelector('.pointer');

if (!isSafari) {
    const link1 = document.getElementById('link-1');
    const link2 = document.getElementById('link-2');
    const link3 = document.getElementById('link-3');
    const link4 = document.getElementById('link-4');
    
    const linkHover1 = function() {
        link1.classList.add('link-hover')
    }
    
    const linkHover2 = function() {
        link2.classList.add('link-hover')
    }
    
    const linkHover3 = function() {
        link3.classList.add('link-hover')
    }
    
    const linkHover4 = function() {
        link4.classList.add('link-hover')
    }
    
    const releasePointer = function() {
        link1.classList.remove('link-hover')
        link2.classList.remove('link-hover')
        link3.classList.remove('link-hover')
        link4.classList.remove('link-hover')
    }
    
    if (link1) {
        link1.addEventListener('mouseover', linkHover1)
        link2.addEventListener('mouseover', linkHover2)
        link3.addEventListener('mouseover', linkHover3)
        link4.addEventListener('mouseover', linkHover4)
    
        link1.addEventListener('mouseleave', releasePointer);
        link2.addEventListener('mouseleave', releasePointer);
        link3.addEventListener('mouseleave', releasePointer);
        link4.addEventListener('mouseleave', releasePointer);
    }
}

//STARTING SCREEN

if (document.querySelector('.starting-screen')) {
    const hideScreen = function() {
        document.querySelector('.starting-screen').style.visibility = 'hidden';
        document.querySelector('.cover').style.opacity = "0";
    }

    setTimeout(hideScreen, 2300)

    const navIn = function () {
        document.querySelector('navbar').classList.add('navbar-in')
    }

    setTimeout(navIn, 2300);
}

//  BANNER

const bannerIn = function () {
    document.getElementById('cookie-banner').classList.add('banner-visible');
}

if (!document.cookie) {
    setTimeout(bannerIn, 3100);
} 

const cookieAccepted = function() {
    document.cookie = "cookieAccepted = true; SameSite = Strict; expires = Wed, 01 Jan 2200 00:00:00 GMT";
    document.getElementById('cookie-banner').classList.remove('banner-visible');
    window.location.reload();
}

const closeBanner = function() {
    document.getElementById('cookie-banner').classList.remove('banner-visible'); 
};

document.getElementById('banner-button').addEventListener('click', cookieAccepted);

document.getElementById('banner-close').addEventListener('click', closeBanner);

//NAV LOGO MOBILE

const mobileLogoOut = function() {
    if (window.innerWidth <= 1279 || window.innerHeight <= 650) {
        console.log("LOGO OUT");
        if (document.documentElement.scrollTop <= 0) {
            document.querySelector('.nav-logo').style.opacity = 1;
        } else {
            document.querySelector('.nav-logo').style.opacity = 0;   
        }
    } 
}

//COPY TO CLIPBOARD

const copyBtn = document.getElementById('copy');

function copied () {
    copyBtn.classList.remove('copied');
}

copyBtn.addEventListener('click', function () {

    copyBtn.classList.add('copied');
    setTimeout(copied, 500);

    if (!navigator.clipboard) {
        return
    }
    const text = 'kontakt@unit-webdesign.de';
    try {
        navigator.clipboard.writeText(text)
    } catch (err) {
        console.log(err);
    }
});