const $ = document;

var preloaderContainerDOM = document.getElementById("preloader");
var main_con = document.getElementById("show");

window.onload = function () {
  setTimeout(function () {
    preloaderContainerDOM.style.display = "none";
    main_con.style.display = "block";
  }, 2000);
};
