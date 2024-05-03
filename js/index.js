// ^ variables
let age = document.getElementById('age');
let sex = document.getElementById('sex');
let chistPainType = document.getElementById('chistPainType');
let restingBp = document.getElementById('restingBp');
let Cholesterol = document.getElementById('Cholesterol');
let fastingBloodSuger = document.getElementById('fastingBloodSuger');
let restingEcg = document.getElementById('restingEcg');
let maxHeartRate = document.getElementById('maxHeartRate');
let exerciseAngina = document.getElementById('exerciseAngina');
let stSlope = document.getElementById('stSlope');
let oldPeak = document.getElementById('oldPeak');
let checkBtn = document.getElementById('checkBtn');
let selects = document.querySelectorAll('select');
let inputs = document.querySelectorAll('input');
let ageAlert = document.getElementById('ageAlert');

// * function of inputsValidation
function inputsValidation() {
    inputs.forEach((input) => {
        if (input.value === "") {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
            input.nextElementSibling.classList.replace("d-none", "d-block");
            return false;
        } else {
            input.classList.add("is-valid");
            input.nextElementSibling.classList.replace("d-block", "d-none");
            return true;
        }
    })
}
// *function of selectValidation
function validateAllSelects() {
    selects.forEach((select) => {
    if (select.value === "") {
        select.classList.add("is-invalid");
        select.classList.remove("is-valid");
        select.nextElementSibling.classList.replace("d-none", "d-block");
        return false;
    } else {
        select.classList.remove("is-invalid");
        select.classList.add("is-valid");
        select.nextElementSibling.classList.replace("d-block", "d-none");
        return true;
    }
});
}
//* function call api
async function postData() {
    let res = await fetch('https://karimhesham23.pythonanywhere.com/predict',
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
        body:[
    {
        "age": 45,
        "sex": "female",
        "chest pain type": "atypical angina",
        "resting bp s": 130,
        "cholesterol": 237,
        "fasting blood sugar": "No",
        "resting ecg": "normal",
        "max heart rate":170,
        "exercise angina": "No",
        "oldpeak":0,
        "ST slope": "upsloping"
    }
        ],
    })
    let data = await res.json();
    console.log(data);
}


checkBtn.addEventListener("click", function (e) {
    e.preventDefault();
})
postData();
