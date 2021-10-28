// LOADING GIF
$(function() {
    $(window).on("load", function() {
        setTimeout(function() {
            $(".loading").fadeOut()
            $("html").css("overflow-y", "visible")
        }, 5000)

    })


})


$(document).ready(function() {

    // MENU

    $(".icon-menu").click(function() {

        $(".menuList").fadeIn();
    });
    $(".closeMenu").click(function() {
        $(".menuList").fadeOut();
    });
    $(".menuList").mouseleave(function() {
        $(".menuList").fadeOut();

    });
})
$(document).ready(function() {


    $(".closeMenu").click(function() {
        $(".menuList").fadeOut();
    });
    $(".menuList").mouseleave(function() {
        $(".menuList").fadeOut();
    });
})

// SEARCH  


$(".nav>.sell>ul>li:nth-child(1)").click(function() {
    $(".searchInputWrapper").toggleClass("searchInputWrapperClass");
});

$(".menuSearch").click(function() {
    $(".searchInputWrapperMenu").toggleClass("searchInputWrapperClassMenu");
});



var proList = ""
fetch("https://jsonplaceholder.typicode.com/posts").then(function(response) {
    response.json().then(function(data) {


        // console.log(data)
        let productList = data.map(a => a.title);
        for (i = 0; i < productList.length; i++) {
            let listItem = productList[i]
                // console.log(listItem)
            proList += `<li>${productList[i]
                }</li>`
            document.querySelector(".productList").innerHTML = proList
            const filterInput = document.querySelector(".searchWrapper input");

            filterInput.addEventListener("keyup", function() {
                document.querySelector(".productList").style.display = "block"
                if (listItem.trim().toLowerCase().startsWith(filterInput.value.trim().toLowerCase())) {
                    document.querySelector(".productList").innerHTML = `<li style ="display: block">${listItem}</li>`
                    document.querySelector(".productList").style.display = "none"


                }

            })

        }
    })

})

// SLIDER CAROUSEL

$(document).ready(function() {
    $('.owl-one').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,

        dots: false,
        animateOut: 'fadeOut',
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
    })
});


// NAVMOVE

var currentScroll = 0;

$(window).scroll(function() {
    if ($(this).scrollTop() > currentScroll) {
        $(".nav").slideUp();
    } else {
        $(".nav").slideDown();
    }
    currentScroll = $(this).scrollTop();
});


// TOP GALLERY


$(window).scroll(function() {

    if ($(window).scrollTop() > $(".topGalleryWrapper").offset().top / 10 && $(window).width() >= 426) {
        $(".topGalleryWrapper").delay(500).animate({
            "margin-top": "70px",
            "opacity": "1"
        }, 600)


    }


    if ($(window).scrollTop() > $(".trendPro").offset().top / 3) {
        $(".trendPro").delay(500).animate({
            "margin-top": "70px",
            "opacity": "1"
        }, 800)

    }

    // GALLERY BANNER

    if ($(window).scrollTop() > $(".BottomBannerWrapper").offset().top / 1.6) {

        $(".BottomBannerWrapper").delay(500).animate({
            "margin-top": "30px",
            "opacity": "1"
        }, 800)

    }
    // FOUNDERS

    if ($(window).scrollTop() > $(".fixedBgBanner").offset().top - 1000) {

        $(".fixedBgBanner").delay(500).animate({
            "margin-top": "70px",
            "opacity": "1"
        }, 1000)

    }

    // SERVICES

    if ($(window).scrollTop() > $(".services").offset().top - 600) {

        $(".services").animate({
            "margin-top": "70px",
            "opacity": "1"
        }, 1000)

    }
    if ($(window).scrollTop() > $(".serviceWrapper").offset().top - 800) {
        $(".serviceWrapper").animate({
            "margin-top": "0px",
            "opacity": "1"
        }, 1000)

    }
    if ($(window).scrollTop() > $(".serviceWrapper").offset().top - 800) {
        $(".serviceWrapper").animate({
            "margin-top": "0px",
            "opacity": "1"
        }, 1000)

    }

    // T0P BANNER

    if ($(window).scrollTop() > $(".botBanner").offset().top - 800) {
        $(".botBanner").animate({
            "margin-top": "0px",
            "opacity": "1"
        }, 1000)

    }

    // LATEST NEWS

    if ($(window).scrollTop() > $(".latestNews").offset().top - 700) {
        $(".latestNews").animate({
            "margin-top": "70px",
            "opacity": "1"
        }, 1000)

    }
    // CLIENTS
    if ($(window).scrollTop() > $(".clientCarousel").offset().top - 700) {
        $(".clientCarousel").animate({
            "margin-top": "70px",
            "opacity": "1"
        }, 1000)

    }

    //    SUBSCRIBER TITTLE

    if ($(window).scrollTop() > $(".subscribeWrapper").offset().top - 700) {
        $(".subscribeWrapper .title").animate({
            "left": "0",
            "opacity": "1"
        }, 1000)

    }
    if ($(window).scrollTop() > $(".subscribeWrapper").offset().top - 700) {
        $(".subscribeWrapper .input").animate({
            "left": "0",
            "opacity": "1"
        }, 2000)

    }



    // ELEVATOR



    if ($(window).scrollTop() > 700) {
        $(".elevator").css("opacity", "1")

    } else if ($(window).scrollTop() < 700) {
        $(".elevator").css("opacity", "0")

    }


    $(".elevator").on("click", function() {
        $(window).scrollTop(0)
    })
})





// WINDOW ONLOAD MODAL


//Onload Modal close by x
var span = document.getElementsByClassName("onLoadModalClose")[0];
$(function() {
    $(".onLoadModalClose").click(function() {
        $(".onLoadModal").fadeOut()


    })

})

// NEWS MODAL

// Get modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal

let arr = document.querySelectorAll(".newsEffect")
    // console.log(arr)
var myArray = Array.from(arr)
for (i of myArray) {
    let btn = i.firstElementChild
        // console.log(btn)
    btn.onclick = function() {
            modal.style.display = "block";
        }
        // Modal close by x
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
            modal.style.display = "none";
        }
        // Modal open

    btn.onclick = function() {
        modal.style.display = "block";
    }


    //    Modal close by any click in the window

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}




// PRODUCT ANIMATION

$(".product").hover(function() {
    $(".product .more .info .productInfo:nth-child(2), .product .more .info .productInfo:nth-child(4)").addClass("productInfoAnim1").fadeIn()
    $(".product .more .info .productInfo:nth-child(1), .product .more .info .productInfo:nth-child(3)").addClass("productInfoAnim2").fadeIn()

}, function() {
    $(".product .more .info .productInfo:nth-child(2), .product .more .info .productInfo:nth-child(4)").removeClass("productInfoAnim1").fadeOut()
    $(".product .more .info .productInfo:nth-child(1), .product .more .info .productInfo:nth-child(3)").removeClass("productInfoAnim2").fadeOut()
})


// PRODUCT CAROUSEL

$(document).ready(function() {
    $('.owl-two').owlCarousel({
        loop: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
});

// PRODUCT CLASS TOGGLE

$(document).ready(function() {
    $(".productNewBotton").prop("disabled", true)

    $(".productNewBotton").on("click", function() {
        $(".newProduct").toggleClass("newtDisplayClass");
        $(".trendProduct").toggleClass("trendDisplayClass");
        $(".productNewBotton").css("background-color", "#f65b6074");
        $(".productTrendBotton").css("background-color", "#f65b60");
        $(".productNewBotton").prop("disabled", true)
        $(".productTrendBotton").prop("disabled", false)
    });

    $(".productTrendBotton").on("click", function() {
        $(".trendProduct").toggleClass("trendDisplayClass");
        $(".newProduct").toggleClass("newtDisplayClass");
        $(".productTrendBotton").css("background-color", "#f65b6074");
        $(".productNewBotton").css("background-color", "#f65b60");
        $(".productTrendBotton").prop("disabled", true)
        $(".productNewBotton").prop("disabled", false)
    });

})

// GET PRODUCTS Title BY API





fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json()
        .then(function(data) {

            var proTitle = [...document.getElementsByClassName("proTitle")]
            for (i = 0; i < proTitle.length; i++) {
                proTitle[i].innerHTML = data[i].title
            }


        })

    )

// MASCARA (IN NAVIGATION BAR) AND FOUNDERS CROUSEL


$(document).ready(function() {
    $('.owl-three').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
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
    })
});

// CLIENT CAROUSEL

$(document).ready(function() {
    $('.owl-five').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});

// HERBAL (IN NAVIGATION BAR) AND NEWS CROUSEL

$(document).ready(function() {
    $('.owl-four').owlCarousel({
        loop: true,
        margin: 20,
        // autoplay: true,
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
    })
});

// MENU

$(function() {
    $(".acc .wrapper h5").click(function() {
        $(this).siblings("ul").slideToggle()
        $(this).parent().toggleClass("active")
        $(this).parent().siblings().children("ul").slideUp()
        $(this).parent().siblings().removeClass("active")


    })

})