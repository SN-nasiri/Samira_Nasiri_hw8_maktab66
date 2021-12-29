function splitBill(amount, numPeople) {
  return "Each person needs to pay ${amount/ numPeople} ";
}
const countdown = (startingNumber, step) => {
  let countFromNum = startingNumber + step;
  return () => {
    countFromNum -= step;
    return countFromNum;
  };
};
const countingDown = countdown(20, 2);
console.log(countingDown());
