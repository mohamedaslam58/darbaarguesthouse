$(document).ready(function() {
    "use strict";
    /*masonry*/
    $('#container').each(function() {
        $('#container').masonry();
    });

    /*lightbox*/
    $('.lightbox').each(function() {
        $('.lightbox').littleLightBox();
    });
    /*menu-dropdow*/
    $('.navbar a.dropdown-toggle').on('click', function(e) {
        var $el = $(this);
        var $parent = $(this).offsetParent(".dropdown-menu");
        $(this).parent("li").toggleClass('open');

        if (!$parent.parent().hasClass('nav')) {
            $el.next().css({
                "top": $el[0].offsetTop,
                "left": $parent.outerWidth() - 4
            });
        }

        $('.nav li.open').not($(this).parents("li")).removeClass("open");

        return false;
    });
    /*end/menu-dropdow*/
    /*owlCarousel-header*/
    $('#index12').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 9000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('#index122').owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 9000,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $('#index121').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 9000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    /*end-owlCarousel-header*/

    /* Modal-video*/
    $(".btn-play").on("click", function(event) {
        var target = $(this).attr('href'),
            url = $(target).data('video');

        var has_query_string = url.split('?', url);
        if (typeof has_query_string[1] == 'string') {
            url += '&' + $(target).data('query-string');
        } else {
            url += '?' + $(target).data('query-string');
        }
        $(target).find('iframe').attr('src', url);

        $(target).addClass('opened');
        $(target).on("click", function() {
            $(this).removeClass('opened').attr('src', '');
        });

        event.preventDefault();
    });
    /*end/modal video*/

    /*  Show/hidden-password*/

    $(".toggle-password").on("click", function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("data-toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    /* end/ Show/hidden-password*/

    /*check-uot*/
    $('.dropdown-menu li').on("click", function() {
        $('#selected').text($(this).text());
        $('li ').removeClass("active");
        $(this).addClass("active");
    });
    $('.dropdown-menu li').on("click", function() {
        $('#selected1').text($(this).text());
        $('li ').removeClass("active");
        $(this).addClass("active");
    });

    /*end/check-uot*/

    /*countdown*/
    function makeTimer() {

        var endTime = new Date("23 Oct 2018 9:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }

        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");

    }
    setInterval(function() {
        makeTimer();
    }, 1000);
    /*end/countdown*/

    /*select*/
    aweSelect();

    function aweSelect() {
        $('.awe-select').each(function(index, el) {
            $(this).selectpicker();
        });

    }

    /*end/select*/

    /*scroll-header*/
    var stickyNav = $('header').offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop() > stickyNav) {
            $('header').addClass('header-top-sky');
        } else {
            $('header').removeClass('header-top-sky');
        }
    });
    /*end/scroll-header*/

    /*datepicker*/
    $(function() {
        $('#datepicker').each(function() {
            $(this).datepicker({
                autoclose: true,
                todayHighlight: true
            }).datepicker('update', new Date());
        });
        $('#datepickeri').each(function() {
            $(this).datepicker({
                autoclose: true,
                todayHighlight: true
            }).datepicker('update', new Date());
        });

        $('#datepicker1').each(function() {
            $("#datepicker1").datepicker({
                dateFormat: 'mm/dd/yy',
                changeMonth: true,
                changeYear: true,
                yearRange: '-100y:c+nn',
                maxDate: '-1d'
            });
        });

        $('#datepicker2').each(function() {
            $("#datepicker2").datepicker({
                dateFormat: 'mm/dd/yy',
                changeMonth: true,
                changeYear: true,
                yearRange: '-100y:c+nn',
                maxDate: '-1d'
            });
        });

    });

    /*end/datepicker*/

    /*STATISTICS Count Number*/
    StatisticsCount();

    function StatisticsCount() {
        if ($('.item .count').length) {

            $('.item').appear(function() {

                var count_element = $('.count', this).html();
                $(".count", this).countTo({
                    from: 0,
                    to: count_element,
                    speed: 2000,
                    refreshInterval: 50,
                });
            });
        }
    }

    /*click-hamburger*/

    $(".navbar-toggle").on("click", function() {
            $(this).toggleClass("hamburger-icon");
        })
        /*end/hamburger*/

    var day, month, year;

    /*owlCarousel-events*/
    $('#events').owlCarousel({
        loop: true,
        nav: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 9000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    $('#events-v2').owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 9000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('#events-v3').owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 9000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
    /*end-owlCarousel-events*/

    /*owlCarousel-testimonials*/
    $('#testimonials').owlCarousel({
        loop: true,
        nav: true,
        margin: 30, // autoplay:true,
        // autoplayTimeout:9000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    /*end-owlCarousel-testimonials*/
    /*owlCarousel-rooms*/
    $('#rooms').owlCarousel({
        loop: true,
        nav: true,
        margin: 0,
        /* autoplay: true,
        autoplayTimeout: 12000,*/
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    /*end-owlCarousel-rooms*/
    $('ul li a').on("click", function() {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
    /*scroll-top*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').on("click", function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    (function($) {
        /* Gallery Isotope */
        function GalleryIsotope() {
            if ($('.gallery').length) {
                $('.gallery').each(function(index, el) {
                    var $this = $(this),
                        $isotope = $this.find('.gallery-isotope'),
                        $filter = $this.find('.gallery-cat');

                    if ($isotope.length) {
                        var isotope_run = function(filter) {
                            $isotope.isotope({
                                itemSelector: '.item-isotope',
                                filter: filter,
                                percentPosition: true,
                                masonry: {
                                    columnWidth: '.item-size'
                                },
                                transitionDuration: '0.6s',
                                hiddenStyle: {
                                    opacity: 0
                                },
                                visibleStyle: {
                                    opacity: 1
                                }
                            });
                        }

                        $filter.on('click', 'a', function(event) {
                            event.preventDefault();
                            $(this).parents('ul').find('.active').removeClass('active');
                            $(this).parent('li').addClass('active');
                            isotope_run($(this).attr('data-filter'));
                        });

                        isotope_run('*');
                    }
                });
            }
        }

        $(window).load(function() {
            $('#preloader').delay(1000).fadeOut('400', function() {
                $(this).fadeOut()
            });
            $('body').append('<div class="awe-popup-overlay" id="awe-popup-overlay"></div><div class="awe-popup-wrap" id="awe-popup-wrap"><div class="awe-popup-content"></div><span class="awe-popup-close" id="awe-popup-close"></div>');
            GalleryIsotope();
        });

    })(jQuery);

    /*MAP*/
    function init() {
        var mapOptions = {
            zoom: 14,
            center: new google.maps.LatLng(40.6933804, -74.0196236),
            styles: [{
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 65
                }, {
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 51
                }, {
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                    "saturation": -100
                }, {
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 30
                }, {
                    "visibility": "on"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 40
                }, {
                    "visibility": "on"
                }]
            }, {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                    "saturation": -100
                }, {
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "transit",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "hue": "#ffff00"
                }, {
                    "lightness": -25
                }, {
                    "saturation": -97
                }]
            }, {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "lightness": -25
                }, {
                    "saturation": -100
                }]
            }]
        };
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6933804, -74.0196236),
            map: map,
            title: 'Snazzy!'
        });
    }
    if ($('#map').length > 0) {
        google.maps.event.addDomListener(window, 'load', init);

    }
    /*END/MAP*/

    /*datepicker*/
    $(".carousel-search li a").on("click", function() {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText);
    });
    /*end/datepicker*/
    /*rooms-detail*/
    $('.gallery3').each(function() {
        $(this).vitGallery({
            debag: true,
            thumbnailMargin: 37,
            fullscreen: true
        });
    });
    $('.gallery1').each(function() {
        $(this).vitGallery({
            controls: 'points',
            transition: 'crossfade',
            autoplay: false,
            fullscreen: true
        });
    });
    $('.gallery2').each(function() {
        $(this).vitGallery({
            controls: 'points',
            transition: 'slide-blur',
            autoplay: false,
            fullscreen: true,
            thumnailAnimationSpeed: 500,
            animateSpeed: 500,
        });
    });

});

document.addEventListener("DOMContentLoaded", function () {
    // Get current page filename (e.g. "room.html")
    var currentPath = window.location.pathname.split("/").pop();
    if (currentPath === "") currentPath = "index.html"; // Default to index.html if at root

    // Find all navigation links
    var navLinks = document.querySelectorAll(".navbar-nav li a");

    navLinks.forEach(function (link) {
      var href = link.getAttribute("href");

      // Remove any existing active class from parent <li>
      if (link.parentElement) {
        link.parentElement.classList.remove("active");
      }

      // If href matches current page path, mark its parent <li> as active
      if (href && href === currentPath) {
        link.parentElement.classList.add("active");

        // If link is inside a dropdown, also activate parent dropdown
        var parentDropdown = link.closest(".dropdown");
        if (parentDropdown) {
          parentDropdown.classList.add("active");
        }
      }
    });
  });

        document.addEventListener("DOMContentLoaded", function () {
            const filterBtns = document.querySelectorAll(".filter-btn");
            const serviceItems = document.querySelectorAll(".service-card-item");
            const searchInput = document.getElementById("service-search");

            // Category Filter Logic
            filterBtns.forEach(btn => {
                btn.addEventListener("click", function () {
                    filterBtns.forEach(b => b.classList.remove("active"));
                    this.classList.add("active");

                    const filterValue = this.getAttribute("data-filter");

                    serviceItems.forEach(item => {
                        if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
                            item.style.display = "block";
                        } else {
                            item.style.display = "none";
                        }
                    });
                });
            });

            // Live Search Logic
            searchInput.addEventListener("keyup", function () {
                const query = this.value.toLowerCase();

                serviceItems.forEach(item => {
                    const title = item.querySelector("h3").innerText.toLowerCase();
                    const desc = item.querySelector("p").innerText.toLowerCase();

                    if (title.includes(query) || desc.includes(query)) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                });
            });
        });

    // Quranic Verses Data in 4 Languages
    const quranVerses = {
        en: [
            { surah: "Surah Al-Hajj (22:73)", text: "O people, an example is presented, so listen to it. Indeed, those you invoke besides Allah will never create [as much as] a fly, even if they gathered together for that purpose. And if the fly should steal away from them a [tiny] thing, they could not recover it from him. Weak are the pursuer and pursued." },
            { surah: "Surah Ghafir (40:60)", text: "And your Lord says, 'Call upon Me; I will respond to you.' Indeed, those who disdain My worship will enter Hell [rendered] contemptible." },
            { surah: "Surah Al-Jinn (72:18)", text: "And [He revealed] that the masjids are for Allah, so do not invoke with Allah anyone." }
        ],
        ar: [
            { surah: "Surah Al-Hajj (22:73)", text: "يٰۤـاَيُّهَا النَّاسُ ضُرِبَ مَثَلٌ فَاسْتَمِعُوْا لَهٗ ؕ اِنَّ الَّذِيْنَ تَدْعُوْنَ مِنْ دُوْنِ اللّٰهِ لَنْ يَّخْلُقُوْا ذُبَابًا وَّلَوِ اجْتَمَعُوْا لَهٗ‌ ؕ وَاِنْ يَّسْلُبْهُمُ الذُّبَابُ شَيْــٴًـــا لَّا يَسْتَـنْـقِذُوْهُ مِنْهُ‌ ؕ ضَعُفَ الطَّالِبُ وَالْمَطْلُوْبُ" },
            { surah: "Surah Ghafir (40:60)", text: "وَقَالَ رَبُّكُمُ ادْعُوْنِىْۤ اَسْتَجِبْ لَـكُمْؕ اِنَّ الَّذِيْنَ يَسْتَكْبِرُوْنَ عَنْ عِبَادَتِىْ سَيَدْخُلُوْنَ جَهَنَّمَ دَاخِرِيْنَ" },
            { surah: "Surah Al-Jinn (72:18)", text: "وَأَنَّ الْمَسَاجِدَ لِلَّهِ فَلَا تَدْعُوا مَعَ اللَّهِ أَحَدًا" }
        ],
        ta: [
            { surah: "ஸூரா அல்-ஹஜ் (22:73)", text: "மனிதர்களே! ஓர் உதாரணம் சொல்லப்படுகிறது. எனவே செவிதாழ்த்திக் கேளுங்கள். நிச்சயமாக அல்லாஹ்வையன்றி (வேறு) எவர்களை நீங்கள் பிரார்த்திக்கின்றீர்களோ, அவர்களெல்லாம் ஒன்று சேர்ந்தாலும் ஓர் ஈயைக்கூடப் படைக்க முடியாது; இன்னும், அவர்களிடமிருந்து ஒரு பொருளை எடுத்துக் கொண்டு போனால் அவர்களால் அதனை அந்த ஈயிடத்திலிருந்து திரும்பக் கைப்பற்றவும் முடியாது; தேடுவோனும், தேடப்படுவோனும் பலஹீனர்களே." },
            { surah: "ஸூரா ஃகாஃபிர் (40:60)", text: "உங்கள் இறைவன் கூறுகிறான்: “என்னையே நீங்கள் பிரார்த்தியுங்கள்; நான் உங்(கள் பிரார்த்தனை)களுக்கு பதிலளிக்கிறேன்; எவர்கள் என்னை வணங்குவதை விட்டும் பெருமையடித்துக் கொண்டிருக்கிறார்களோ, அவர்கள் சிறுமையடைந்தவர்களாக நரகத்தில் நுழைவார்கள்.”" },
            { surah: "ஸூரா அல்-ஜின் (72:18)", text: "நிச்சயமாக மஸ்ஜிதுகள் அல்லாஹ்வுக்காகவே இருக்கின்றன, எனவே, (அவற்றில்) அல்லாஹ்வுடன் (சேர்த்து வேறு) எவரையும் நீங்கள் பிரார்த்திக்காதீர்கள்." }
        ],
        ml: [
            { surah: "സൂറ അൽ-ഹജ്ജ് (22:73)", text: "മനുഷ്യരേ, ഒരു ഉദാഹരണം വിവരിക്കപ്പെടുന്നു; അതിനാൽ ശ്രദ്ധിച്ചു കേൾക്കുക. അല്ലാഹുവിന് പുറമെ നിങ്ങൾ വിളിച്ചുപ്രാർത്ഥിക്കുന്ന ആർക്കും—അവർ എല്ലാവരും ഒത്തുചേർന്നാൽ പോലും—ഒരു ഈച്ചയെപ്പോലും സൃഷ്ടിക്കാൻ സാധിക്കുകയില്ല. ഇനി, ആ ഈച്ച അവരിൽ നിന്ന് എന്തെങ്കിലും തട്ടിയെടുക്കുകയാണെങ്കിൽ, അത് തിരിച്ചുപിടിക്കാൻ പോലും അവർക്ക് കഴിയില്ല. തേടുന്നവനും തേടപ്പെടുന്നവനും ഒരുപോലെ ദുർബലർ തന്നെ!" },
            { surah: "സൂറ അൽ ഗാഫിർ (40:60)", text: "നിങ്ങളുടെ രക്ഷിതാവ് പറഞ്ഞിരിക്കുന്നു: 'നിങ്ങൾ എന്നോട് പ്രാർത്ഥിക്കൂ, ഞാൻ നിങ്ങൾക്ക് ഉത്തരം നൽകാം.' എന്നെ ആരാധിക്കാതെ അഹങ്കാരം നടിക്കുന്നവർ നിന്ദ്യരായിക്കൊണ്ട് നരകത്തിൽ പ്രവേശിക്കുക തന്നെ ചെയ്യും." },
            { surah: "സൂറ അൽ ജിന്ന് (72:18)", text: "മസ്ജിദുകൾ അല്ലാഹുവിനുള്ളതാകുന്നു. അതിനാൽ അല്ലാഹുവോടൊപ്പം മറ്റാരെയും നിങ്ങൾ വിളിച്ചു പ്രാർത്ഥിക്കരുത്." }
        ]
    };

    let currentLang = 'en';

    // Render Verses
    function renderVerses(lang) {
        const container = document.getElementById('quranVersesContainer');
        container.innerHTML = '';

        quranVerses[lang].forEach(item => {
            const isRtl = lang === 'ar' ? 'rtl-text' : '';
            const card = document.createElement('div');
            card.className = 'verse-card';
            card.innerHTML = `
                <div class="verse-surah">
                    <span>${item.surah}</span>
                    <button class="copy-verse-btn" onclick="copyVerse('${item.text.replace(/'/g, "\\'")}')" title="Copy Verse">
                        <i class="fa fa-copy"></i>
                    </button>
                </div>
                <p class="verse-text ${isRtl}">${item.text}</p>
            `;
            container.appendChild(card);
        });
    }

    // Switch Language
    function switchQuranLang(lang) {
        currentLang = lang;
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        renderVerses(lang);
    }

    // Copy to Clipboard
    function copyVerse(text) {
        navigator.clipboard.writeText(text);
        alert('Verse copied to clipboard!');
    }

    // Modal Control logic
    document.addEventListener("DOMContentLoaded", function () {
        const modal = document.getElementById('quranModal');
        const openBtn = document.getElementById('openQuranModalBtn');
        const closeBtn = document.getElementById('closeQuranModalBtn');

        openBtn.addEventListener('click', function () {
            modal.classList.add('active');
            renderVerses(currentLang);
        });

        closeBtn.addEventListener('click', function () {
            modal.classList.remove('active');
        });

        window.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    $(document).ready(function(){
        $("#gallery-carousel").owlCarousel({
            loop: true,
            margin: 15,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplayHoverPause: true,
            dots: true,
            nav: true, // Force navigation arrows
            navText: [
                '<span>&#10094;</span>', // Custom Unicode Left Arrow (no external font needed)
                '<span>&#10095;</span>'  // Custom Unicode Right Arrow
            ],
            responsive: {
                0: {
                    items: 1,
                    nav: false // Hides on mobile to keep layout clean
                },
                768: {
                    items: 2,
                    nav: true
                },
                1000: {
                    items: 4,
                    nav: true
                }
            }
        });
    });