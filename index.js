const nightMode = document.querySelector(".fa-moon");

const dayMode = document.querySelector(".fa-sun");

nightMode.addEventListener("click", (e) => {
  document.body.style.cssText = `background: #424248;
                                color: #ffffffd5`;
  document.querySelector(".drawLine").style.background = "#ffffffd5";
});



dayMode.addEventListener("click", (e) => {
  document.body.style.cssText = `background-image: linear-gradient(to right, #e2e3ec, #e2e3ec1e),url(./photos/bgLogo.png), color: #20203C;;
        transition: 1s ease-in-out;
      `;
  document.querySelector(".drawLine").style.background = "#3a3a3ad2";

});

const photo = document.querySelector(".myPhoto");

photo.onmousemove = function (e) {
  var x = e.offsetX / 2;
  photo.style.cssText = ` left: ${x}px;     
  `;
};
