document.getElementById("accountSelect").addEventListener("change", function(){
    const selectedPage = this.value
    if (selectedPage !== "#") {
        window.location.href = selectedPage;
    }
})