
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const sideCome = document.getElementById("side-come");
  const body = document.body;

  function toggleSidebar() {
    if (sideCome.style.right === "0px") {
      sideCome.style.right = "-250px"; // Hide the box
      body.classList.remove("no-scroll");
    } else {
      sideCome.style.right = "0px"; // Show the box
      body.classList.add("no-scroll"); 
    }
  }

  function hideSidebar() {
    sideCome.style.right = "-250px"; // Hide the box
     body.classList.remove("no-scroll");
  }

  hamburgerMenu.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleSidebar();
  });

  document.addEventListener("click", function (event) {
    if (
      sideCome.style.right === "0px" &&
      !sideCome.contains(event.target) &&
      !hamburgerMenu.contains(event.target)
    ) {
      hideSidebar();
    }
  });

  // Prevent clicks inside the sidebar from triggering the hideSidebar function
  sideCome.addEventListener("click", function (event) {
    event.stopPropagation();
  });
