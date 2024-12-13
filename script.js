const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const formEl = document.querySelector("form");
const formBtn = document.getElementById("submitBtn");
const dismissBtn = document.getElementById("dismissBtn");
const emailInput = document.getElementById("emailInput");
const errorMsg = document.getElementById("errorMsg");
const confirmEmail = document.getElementById("confirmEmail");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateEmail(emailInput.value)) {
        errorMsg.style.display = "block";
        emailInput.style.backgroundColor = "hsl(4, 100%, 90%)";
        emailInput.style.borderColor = "hsl(4, 100%, 67%)";
        emailInput.style.color = "hsl(4, 100%, 67%)";
    }
    else {
        errorMsg.style.display = "none";
        emailInput.style.backgroundColor = "";
        emailInput.style.borderColor = "";
        emailInput.style.color = "";
        section1.style.display = "none";
        section2.style.display = "flex";
        confirmEmail.textContent = emailInput.value;
    }
});

dismissBtn.addEventListener("click", () => {
    section1.style.display = "";
    emailInput.value = "";
    section2.style.display = "none";
});

/* validate Email function */
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}