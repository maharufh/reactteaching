const today = new Date().toDateString();
let week =
  JSON.parse(localStorage.getItem("week")) || {
    days: [],
    tasks: 0
  };

if (!week.days.includes(today)) {
  week.days.push(today);
  week.tasks +=
    (JSON.parse(localStorage.getItem("tasks")) || []).length;
}

localStorage.setItem("week", JSON.stringify(week));
