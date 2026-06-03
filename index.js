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
