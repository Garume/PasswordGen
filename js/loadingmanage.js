function loaded(){
    document.getElementById("wrapper").classList.remove("active");
    document.getElementById("main").classList.remove("active");
}

window.addEventListener("load",function(){
    this.setTimeout(loaded,3200)
})