const counterValue = document.querySelector("#counter"); // or we can  write document .getElementbyId('counter)
const increment = () => {
  // get value from UI
  let value = parseInt(counterValue.innerText);
  //update the value
  value = value + 1;
  // set the value onto UI
  counterValue.innerText = value;
};

const decrement = () => {
  // get value from UI
  let value = parseInt(counterValue.innerText);
  //update the value
  value = value - 1;
  // set the value onto UI
  counterValue.innerText = value;
};
