// ^ variables
let age = document.getElementById("age");
let sex = document.getElementById("sex");
let chistPainType = document.getElementById("chistPainType");
let restingBp = document.getElementById("restingBp");
let Cholesterol = document.getElementById("Cholesterol");
let fastingBloodSuger = document.getElementById("fastingBloodSuger");
let restingEcg = document.getElementById("restingEcg");
let maxHeartRate = document.getElementById("maxHeartRate");
let exerciseAngina = document.getElementById("exerciseAngina");
let stSlope = document.getElementById("stSlope");
let oldPeak = document.getElementById("oldPeak");
let checkBtn = document.getElementById("checkBtn");
//^ loading function
let loading = setTimeout(function () {
  $(".layer").fadeOut(2000);
}, 3000);
//& functions of Validation
function ageValidation() {
  if (age.value === "") {
    age.nextElementSibling.classList.replace("d-none", "d-block");
    return false;
  } else {
    age.nextElementSibling.classList.replace("d-block", "d-none");
    return true;
  }
}
function restingBpValidation() {
  if (restingBp.value === "") {
    restingBp.nextElementSibling.classList.replace("d-none", "d-block");
    return false;
  } else {
    restingBp.nextElementSibling.classList.replace("d-block", "d-none");
    return true;
  }
}
function CholesterolValidation() {
  if (Cholesterol.value === "") {
    Cholesterol.nextElementSibling.classList.replace("d-none", "d-block");
    return false;
  } else {
    Cholesterol.nextElementSibling.classList.replace("d-block", "d-none");
    return true;
  }
}
function maxHeartRateValidation() {
  if (maxHeartRate.value === "") {
    maxHeartRate.nextElementSibling.classList.replace("d-none", "d-block");
    return false;
  } else {
    maxHeartRate.nextElementSibling.classList.replace("d-block", "d-none");
    return true;
  }
}
function oldPeakValidation() {
  if (oldPeak.value === "") {
    oldPeak.nextElementSibling.classList.replace("d-none", "d-block");
    return false;
  } else {
    oldPeak.nextElementSibling.classList.replace("d-block", "d-none");
    return true;
  }
}
function sexValidation() {
  if (sex.value === "") {
    sex.nextElementSibling.classList.replace("d-none", "d-block");
    return false;
  } else {
    sex.nextElementSibling.classList.replace("d-block", "d-none");
    return true;
  }
}
function chistPainTypeValidation() {
  if (chistPainType.value === "") {
    chistPainType.nextElementSibling.classList.replace("d-none", "d-block");
    return false;
  } else {
    chistPainType.nextElementSibling.classList.replace("d-block", "d-none");
    return true;
  }
}
function fastingBloodSugerValidation() {
  if (fastingBloodSuger.value === "") {
    fastingBloodSuger.nextElementSibling.classList.replace("d-none", "d-block");
    return false;
  } else {
    fastingBloodSuger.nextElementSibling.classList.replace("d-block", "d-none");
    return true;
  }
}
function restingEcgValidation() {
  if (restingEcg.value === "") {
    restingEcg.nextElementSibling.classList.replace("d-none", "d-block");
    return false;
  } else {
    restingEcg.nextElementSibling.classList.replace("d-block", "d-none");
    return true;
  }
}
function exerciseAnginaValidation() {
  if (exerciseAngina.value === "") {
    exerciseAngina.nextElementSibling.classList.replace("d-none", "d-block");
    return false;
  } else {
    exerciseAngina.nextElementSibling.classList.replace("d-block", "d-none");
    return true;
  }
}
function stSlopeValidation() {
  if (stSlope.value === "") {
    stSlope.nextElementSibling.classList.replace("d-none", "d-block");
    return false;
  } else {
    stSlope.nextElementSibling.classList.replace("d-block", "d-none");
    return true;
  }
}

//* function call api

async function postData(arr) {
  let res = await fetch(
    "https://karimhesham.app.modelbit.com/v1/endpoint/predict",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: arr }),
    }
  );
  let data = await res.json();
  let final = data.data[0];
  console.log(final);
  displayResult(final);
}

// & api operation
checkBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    ageValidation() &&
    restingBpValidation() &&
    CholesterolValidation() &&
    maxHeartRateValidation() &&
    oldPeakValidation() &&
    sexValidation() &&
    chistPainTypeValidation() &&
    fastingBloodSugerValidation() &&
    restingEcgValidation() &&
    exerciseAnginaValidation() &&
    stSlopeValidation()
  ) {
    let arr = [
      age.value,
      sex.value,
      chistPainType.value,
      restingBp.value,
      Cholesterol.value,
      fastingBloodSuger.value,
      restingEcg.value,
      maxHeartRate.value,
      exerciseAngina.value,
      oldPeak.value,
      stSlope.value,
    ];
    postData(arr);
  } else {
    ageValidation();
    restingBpValidation();
    CholesterolValidation();
    maxHeartRateValidation();
    oldPeakValidation();
    sexValidation();
    chistPainTypeValidation();
    fastingBloodSugerValidation();
    restingEcgValidation();
    exerciseAnginaValidation();
    stSlopeValidation();
  }
});
// ! close lightBox
document.addEventListener("click", function (e) {
  if (e.target.id === "message") {
    document.getElementById("message").classList.replace("d-flex", "d-none");
  }
});
// & display result
function displayResult(res) {
  if (res == 1) {
    document.getElementById("message").classList.replace("d-none", "d-flex");
    document
      .getElementById("messageRed")
      .classList.replace("d-none", "d-block");
    document
      .getElementById("messageInfo")
      .classList.replace("d-block", "d-none");
  } else {
    document.getElementById("message").classList.replace("d-none", "d-flex");
    document
      .getElementById("messageInfo")
      .classList.replace("d-none", "d-block");
    document
      .getElementById("messageRed")
      .classList.replace("d-block", "d-none");
  }
}
