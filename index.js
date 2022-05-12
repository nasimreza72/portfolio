const nightMode = document.querySelector(".fa-moon");

const dayMode = document.querySelector(".fa-sun");


nightMode.addEventListener("click", (e) => {

    document.body.style.cssText = `background: #20203C;
         color: white;
         transition: 1s ease-in-out;
        `;
    document.querySelector(".contact").style.background = "#be8c35";
    document.querySelectorAll("nav div li a").forEach((element) => {
        element.style.color = "#be8c35";
    });

    let contactOnHover = document.querySelector(".contact");

    contactOnHover.onmousemove = function () {
        document.querySelector(".contact").style.background = "#ee624ae8";
    };


});



dayMode.addEventListener("click", (e) => {

    document.body.style.cssText = `background-image: linear-gradient(to right, #e2e3ec, #e2e3ec1e),url(./photos/bgLogo.png), color: #20203C;;
        transition: 1s ease-in-out;
      `;
    document.querySelectorAll("nav div li a").forEach((element) => {
        element.style.color = "#20203C";
    });
    document.querySelectorAll("nav div li a").forEach((element) => {
        element.style.transition = "1s ease-in-out";
    });

    document.querySelector(".contact").style.background = "#20203ce8 ";

})


const photo = document.querySelector(".myPhoto");

photo.onmousemove = function (e) {
    var x = e.offsetX/2;
    photo.style.cssText = ` left: ${x}px;     
  `;
};


// photo.addEventListener("mouseover", e => {
//     console.log(e.target);
//     var x = e.offsetX/2;
//         photo.style.cssText = ` left: ${x}px;     
//       `;
// })