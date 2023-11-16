const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () =>{
    sidebar.classList.toggle("side-min");
    toggle.classList.toggle("active");
    console.log("Berhasil di Klik");
})