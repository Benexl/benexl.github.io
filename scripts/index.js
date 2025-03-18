const designs = {
  adia: {
    desktop: [
      "./assets/images/adia/desktop/home.png",
      "./assets/images/adia/desktop/blog.png",
      "./assets/images/adia/desktop/write.png",
    ],
    phone: [
      "./assets/images/adia/phone/home.png",
      "./assets/images/adia/phone/blog.png",
      "./assets/images/adia/phone/write.png",
    ],
  },
  graphix: {
    desktop: [
      "./assets/images/graphix/desktop/Home.png",
      "./assets/images/graphix/desktop/Bin.png",
      "./assets/images/graphix/desktop/About.png",
      "./assets/images/graphix/desktop/Development Resources.png",
      "./assets/images/graphix/desktop/Favourites.png",
      "./assets/images/graphix/desktop/from files.png",
      "./assets/images/graphix/desktop/from folder.png",
      "./assets/images/graphix/desktop/help.png",
      "./assets/images/graphix/desktop/Projects.png",
      "./assets/images/graphix/desktop/reportIssue.png",
      "./assets/images/graphix/desktop/Settings.png",
      "./assets/images/graphix/desktop/Splash.png",
    ],
    phone: [],
  },
  portfolio: {
    desktop: ["./assets/images/portfolio/desktop/portfolio.png"],
    phone: [],
  },
  volta: {
    desktop: ["./assets/images/volta/desktop/volta.png"],
    phone: [],
  },
  blissCafe: {
    desktop: ["./assets/images/blissCafe/desktop/home.png"],
    phone: [],
  },
};

$("[data-design]").click(function () {
  $("#full-image").attr("src", $(this).attr("src"));
  const currentDesignEl = this;

  $("#next-image")
    .off("click")
    .on("click", function () {
      let currentImage = $("#full-image").attr("src");
      let currentDesign = $(currentDesignEl).attr("data-design");
      console.log(currentDesign);
      let currentIndex =
        designs[currentDesign]["desktop"].indexOf(currentImage);
      if (currentIndex < designs[currentDesign]["desktop"].length - 1) {
        $("#full-image").attr(
          "src",
          designs[currentDesign]["desktop"][currentIndex + 1]
        );
      }
    });

  $("#previous-image")
    .off("click")
    .on("click", function () {
      let currentImage = $("#full-image").attr("src");
      let currentDesign = $(currentDesignEl).attr("data-design");
      let currentIndex =
        designs[currentDesign]["desktop"].indexOf(currentImage);
      if (currentIndex > 0) {
        $("#full-image").attr(
          "src",
          designs[currentDesign]["desktop"][currentIndex - 1]
        );
      }
    });

  $("#image-viewer").show();
});

$("#image-viewer .close").click(function () {
  $("#image-viewer").hide();
});
$(".hamburger-menu").click(function (e) {
  console.log($(".nav-small ul").css("display"));
  $(".nav-small ul").css("display") == "none"
    ? $(".nav-small ul").show()
    : $(".nav-small ul").hide();
});
