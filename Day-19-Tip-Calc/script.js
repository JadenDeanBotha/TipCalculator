const btn = document.querySelector(".btn"),
  tip = document.querySelector(".tip"),
  total = document.querySelector(".total"),
  error = document.querySelector(".error");

const hideError = () => {
  setTimeout(() => {
    error.style.display = "none";
  }, 3000);
};

const calcTip = () => {
  const bill = document.querySelector(".bill").value;
  const rate = document.querySelector(".rate").value;

  if (bill === "" || rate == "") {
    error.style.display = "block";
    hideError();
  } else if (isNaN(bill)) {
    error.innerHTML = "Please enter a number";
    error.style.display = "block";
    hideError();
  } else {
    let tipAmt = (bill * rate).toFixed(2);
    tip.innerHTML = `Tip: $${tipAmt}`;

    let totalBill = Number(bill) + Number(tipAmt);
    total.innerHTML = `Total Bill: $${totalBill}`;
  }
};

btn.addEventListener("click", calcTip);
