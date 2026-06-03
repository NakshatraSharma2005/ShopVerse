const slider = document.querySelector(".slider");
const images = [
    "image/slider-image.webp",
    "image/slider-image1.webp",
    "image/slider-image2.webp",
    "image/slider-image3.jpg",
];
currentSlide = 0;

// const track = document.createElement("div");
// track.className = "slider-track";
// slider.append(track);

// for (let i = 0; i < images.length; i++) {
//     const img = document.createElement("img");
//     img.src = images[i];
//     track.append(img);
// }

console.log(images);
function slideShow() {
    slider.style.backgroundImage = `url(${images[currentSlide]})`;
    currentSlide++;
    if (currentSlide >= images.length) {
        currentSlide = 0;
    }
}
setInterval(slideShow, 4000);

slideShow();


//validate email and password
const validateEmail = document.getElementById("email");
const validatePassword = document.getElementById("password");
const form = document.querySelector(".log-in-form");

const users_key = "shopverse_users";
const current_key = "shopverse_currentUser";

form.addEventListener("submit", function(e){
    e.preventDefault();
    if (!validateEmail.value.includes("@") || !validateEmail.value.includes(".")){
    alert("Please enter a valid Email");
    e.stopImmediatePropagation();
    return;
    }
    if (validatePassword.value.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
    }
    const storedUser = JSON.parse(localStorage.getItem(users_key))
    const foundUser = storedUser.find(
        (u) => 
            
            u.email === validateEmail.value &&
            u.password === validatePassword.value
    )

    if (foundUser) {
        localStorage.setItem(current_key, JSON.stringify(foundUser))
        alert("Login Successful!");
        window.location.href = "welcome.html";
    }
    else{
        alert("Invalid email or password!");
    }
})


// password eye code

const passwordIcon = document.querySelector(".password-icon i");
if (passwordIcon && validatePassword){
    passwordIcon.addEventListener("click", () => {
        if (validatePassword.type === "password") {
            validatePassword.type = "text";
            passwordIcon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            validatePassword.type = "password";
            passwordIcon.classList.replace("fa-eye-slash", "fa-eye");
        }
    });

}