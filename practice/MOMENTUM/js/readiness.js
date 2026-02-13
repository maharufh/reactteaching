const skillsData = JSON.parse(localStorage.getItem("skills"));

let total = 0;
let count = 0;

for (let skill in skillsData) {
  total += skillsData[skill];
  count++;
}

const readiness = Math.round(total / count);
document.getElementById("readiness").innerText =
  readiness + "% Job Ready";
