const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");
const fs = document.querySelector(".bi-fullscreen");
const fs_ex = document.querySelector(".bi-fullscreen-exit");
const fullscreen = document.getElementById("f-screen-btn");
toggle.addEventListener("click", () =>{
    sidebar.classList.toggle("side-min");
    toggle.classList.toggle("active");
    // console.log("Berhasil di Klik");
})
fs_ex.addEventListener("click", ()=>{
  // console.log("Tombol Exit");
  f_screen();
  fullscreen.classList.toggle("hide-btn");
  fs_ex.classList.toggle("hide-btn");
})

fullscreen.addEventListener("click", ()=>{
    // console.log("Fullscreen");
    f_screen();
    fullscreen.classList.toggle("hide-btn");
    fs_ex.classList.toggle("hide-btn");
})

function f_screen(){
  if (!document.fullscreenElement && !document.mozFullScreenElement &&
      !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) { // Firefox
          document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
          document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
          document.documentElement.msRequestFullscreen();
      }
  } else {
      if (document.exitFullscreen) {
          document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
      }
  }
}