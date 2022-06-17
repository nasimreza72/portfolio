const nightMode = document.querySelector(".fa-moon");

const dayMode = document.querySelector(".fa-sun");

nightMode.addEventListener("click", (e) => {
  document.body.style.cssText = `background: radial-gradient(circle at 10% 20%, rgb(90, 92, 106) 0%, rgb(32, 45, 58) 81.3%);`;
});

dayMode.addEventListener("click", (e) => {
  document.body.style.cssText = `background-image: linear-gradient(to right, #e2e3ec, #e2e3ec1e),url(./photos/bgLogo.png), color: #20203C;;
        transition: 1s ease-in-out;
      `;
});

const toggelNav = document.querySelector(".toggelNav");

let toggelHandeler = true;

document.getElementById("menu-toggle").addEventListener("click", function () {
  document.body.classList.toggle("nav-open");

  if (toggelHandeler) {
    toggelNav.style.display = "block";
    toggelHandeler = false;
  } else {
    toggelNav.style.display = "none";
    toggelHandeler = true;
  }
});
