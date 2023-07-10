var menuicon = document.getElementById("menuicon");
      var navbar = document.getElementById("navbar");
      var menu = document.getElementById("menu");
      navbar.style.right = "-250px";

      menuicon.onclick = function () {
        if (navbar.style.right == "-250px") {
          navbar.style.right = "0";
          menu.src = "images/close.png";
        } else {
          navbar.style.right = "-250px";
          menu.src = "images/menu.png";
        }
      };