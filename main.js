$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  function getExperienceFromDate(startDate) {
    const currentDate = new Date();
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const startDay = startDate.getDate();

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    let yearsOfExperience = currentYear - startYear;

    const decimalYearsOfExperience =
      yearsOfExperience + (currentMonth - startMonth) / 12;
    return decimalYearsOfExperience.toFixed(1);
  }

  // Usage example:
  const startDate = new Date("2021-07-01");
  const experience = getExperienceFromDate(startDate);
  $("#exp-yrs").html(experience);
  console.log(experience);

  // typing text animation script
  // var typed = new Typed(".typing", {
  //   strings: ["Data Analysis | Web Development | Machine Learning"],
  //   typeSpeed: 50,
  //   backSpeed: 1,
  //   loop: true,
  // });

  // var typed = new Typed(".typing-2", {
  //   strings: [
  //     "Data Science",
  //     "Machine Learning",
  //     "Data Analysis",
  //     "Deep Learning",
  //     "A.I.",
  //     "Reinforcement Learning",
  //   ],
  //   typeSpeed: 100,
  //   backSpeed: 100,
  //   loop: true,
  // });

  // // owl carousel script
  // $('.carousel').owlCarousel({
  //     margin: 20,
  //     loop: true,
  //     autoplayTimeOut: 2000,
  //     autoplayHoverPause: true,
  //     responsive: {
  //         0:{
  //             items: 1,
  //             nav: false
  //         },
  //         600:{
  //             items: 2,
  //             nav: false
  //         },
  //         1000:{
  //             items: 3,
  //             nav: false
  //         }
  //     }
  // });
});
