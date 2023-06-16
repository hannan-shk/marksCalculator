const calculateFormEl = document.getElementById("calculateForm");
const result = document.getElementById("result");

const calculateMarks = (event) => {
  const maxMarks = 400;
  event.preventDefault();

  const formData = new FormData(calculateFormEl);

  const data = {};

  formData.forEach((value, key) => {
    data[key] = +value;
  });

  const totalMarks = data.maths + data.science + data.english + data.urdu;
  const percentage = (totalMarks / maxMarks) * 100;
  result.innerText = `You have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}`;
  calculateFormEl.after(result);
};
