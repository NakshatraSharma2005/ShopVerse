const welcome = document.querySelector(".message-greet");
const current_key = "shopverse_currentUser";
const username = JSON.parse(localStorage.getItem(current_key));
if (username && username.name) {
  const firstName = username.name.split(" ")[0]
    welcome.innerHTML = `
  <h3>Hello ${firstName}!</h3>
  <h4>Welcome to ShopVerse</h4>
`;
}
const logout = document.querySelector(".log-out")
logout.addEventListener("click",()=>{
    alert("Logout successfully!")
    window.location.href = "index.html";
    localStorage.removeItem("shopverse_currentUser");
})



// limited time deals timer

const clock = document.querySelector(".timer-num");
let timeLeft = 10 * 60 * 60;
function time(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return (
        String(h).padStart(2, "0") +
        ":" +
        String(m).padStart(2, "0") +
        ":" +
        String(s).padStart(2, "0")
    );
}
const countdown = setInterval(() => {
    clock.innerHTML = "Ends in: " + time(timeLeft);
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(countdown);
        clock.innerHTML = "";
    }
}, 1000);
