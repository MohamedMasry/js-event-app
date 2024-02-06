/// <reference types="../@types/jquery" />

let time = 1000;
// console.log(aa)
$(function () {
    // -------------------- header animations

    $("header").animate({ width: "100%" }, time, function () {
        $("header").animate({ height: "50vh" }, time)
    })
    setTimeout(function () {
        $(".ramadan-lanterns").animate({ top: "0" }, time, function () {
            $("main").fadeIn(time)
            $("#navToggle").fadeIn(time)
            $(".lantern").animate({ top: "65%", opacity: "1" }, 700)
        })

    }, 1600);

    // -------------------- Navbar  

    function openNav() {
        $("body").animate({ marginLeft: "150px" }, 500);
        $(".nav-contain").animate({ width: "150px" }, 500);
        $(".navItem").slideDown(500);
        $("#closeNav").fadeIn(500);
        $("#navToggle span").text("أغلق");
        $("#navToggle i").addClass("fa-times");
    }
    function closeNav() {
        $("body").animate({ marginLeft: "0" }, 500);
        $(".nav-contain").animate({ width: "0" }, 500);
        $(".navItem").hide(500);
        $("#closeNav").fadeOut(500);
        $("#navToggle span").text("افتح");
        $("#navToggle i").removeClass("fa-times");
    }

    $("#navToggle").on("click", function () {
        let navContainWidth = $(".nav-contain").outerWidth();
        if (navContainWidth == 0) {
            openNav()
        }
        else {
            closeNav()
        }
    })
    $("#closeNav").on("click", function () {
        closeNav()
    })

    // -------------------- Scroll behavior 

    $("a[href^='#']").on('click', function () {
        $('body,html').animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    })

    // -------------------- Accordion

    $(".accordion-item .accr-text").css("display", "none");

    $(".accordion-item .accr-header").on("click", function () {

        $(this).next().slideToggle(500);
        $(".accordion-item .accr-text").not($(this).next()).slideUp(500);
        $(".accordion-item .accr-header i").not($(this).find("i")).removeClass("rotated");
        $(this).find("i").toggleClass("rotated");

    });

    // -------------------- Days countdown
    let countDown = setInterval(function () {

        let targetDate = new Date("Mar 11, 2024 00:00:00").getTime() / 1000;
        let now = new Date().getTime() / 1000;

        let difference = targetDate - now;


        let days = Math.floor(difference / (60 * 60 * 24));
        let hours = Math.floor((difference - (days * (60 * 60 * 24))) / (60 * 60));
        let minutes = Math.floor((difference - (days * (60 * 60 * 24)) - (hours * (60 * 60))) / 60);
        let seconds = Math.floor((difference - (days * (60 * 60 * 24)) - (hours * (60 * 60)) - (minutes * 60)));

        if ((days != 0 && hours != 0 && minutes != 0 && seconds != 0) || days > 0) {
            $("#secondsText").text(seconds)
            $("#minutesText").text(minutes)
            $("#hoursText").text(hours)
            $("#daysText").text(days)
        }
        else {
            $("#secondsText").text("0")
            $("#minutesText").text("0")
            $("#hoursText").text("0")
            $("#daysText").text("0")

            clearInterval(countDown);
            $(".section-counter h2").removeClass("d-none")
        }
    }, 1000);

    // -------------------- message chars counter 
    $("#message-count").text($("#message").attr("maxlength"))
    $("#message").on("keyup", function () {
        $("#message-count").text($("#message").attr("maxlength") - $("#message").val().length)
    });




});







