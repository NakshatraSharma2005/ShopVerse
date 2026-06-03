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




//extract data to use
const Email = document.getElementById("email");
const Name = document.getElementById("name");
const Password = document.getElementById("password");
const ConfirmPassword = document.getElementById("confirmPassword");
const form = document.querySelector(".sign-up-form");

//validate name, email, password
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!Email.value.includes("@") || !Email.value.includes(".")) {
        alert("Please enter a valid Email");
        e.stopImmediatePropagation();
        return;
    }
    if (Password.value.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
    }
    if (Name.value.trim()==""){
        alert("Please enter your name");
        return;
    }
    if (Password.value != ConfirmPassword.value){
        alert("Passwords do not match. Please re-enter.")
        return;
    }
});





//read and write user information in local storage
const users_key = "shopverse_users";
const current_key = "shopverse_currentUser"

const readUser = () => {
    try {
        return JSON.parse(localStorage.getItem(users_key))}
    catch {return []; }
}
const writeUser = (arr) => {
    localStorage.setItem( users_key, JSON.stringify(arr))
}
const setCurrent = (u) => {
    localStorage.setItem(current_key, JSON.stringify(u))
}

form.addEventListener("submit" ,(e) => {
    e.preventDefault();
    const uName = Name.value.trim()
    const uEmail = (Email.value).trim().toLowerCase()
    const uPassword = Password.value
    const uConfirmPassword = ConfirmPassword.value
    const users = readUser();
    if (users.find((u) => u.email === uEmail)) {
        return alert("Email already registered — try logging in");
    }
    users.push({ "name": uName, "email": uEmail, "password": uPassword });
    writeUser(users)
    setCurrent({ name: uName, email: uEmail, password: uPassword });
    alert("Account created!");
    window.location.href = "welcome.html";

})


// password eye code



const passwordFields = document.querySelectorAll(".password-field");

passwordFields.forEach(field => {
  const input = field.querySelector("input");          
  const icon = field.querySelector(".password-icon i"); 

  if (!input || !icon) return;

  icon.addEventListener("click", () => {
    
    if (input.type === "password") {
      input.type = "text";
      icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      input.type = "password";
      icon.classList.replace("fa-eye-slash", "fa-eye");
    }
  });
});


