const designs = {
  adia: {
    desktop: [
      "./assets/images/adia/home.png",
      "./assets/images/adia/desktop/blog.png",
      "./assets/images/adia/desktop/home.png",
      "./assets/images/adia/desktop/write.png",
    ],
    phone: [
      "./assets/images/adia/phone/blog.png",
      "./assets/images/adia/phone/home.png",
      "./assets/images/adia/phone/write.png",
    ],
  },
  graphix: {
    desktop: [
      "./assets/images/graphix/desktop/Bin.png",
      "./assets/images/graphix/desktop/About.png",
      "./assets/images/graphix/desktop/Development Resources.png",
      "./assets/images/graphix/desktop/Favourites.png",
      "./assets/images/graphix/desktop/from files.png",
      "./assets/images/graphix/desktop/from folder.png",
      "./assets/images/graphix/desktop/help.png",
      "./assets/images/graphix/desktop/Home.png",
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
  $("#image-viewer").show();
});

$("#image-viewer .close").click(function () {
  $("#image-viewer").hide();
});
