const completed = localStorage.getItem("completedToday");
const today = new Date().toDateString();
const lastDate = localStorage.getItem("lastStreakDate");

let streak = Number(localStorage.getItem("streak")) || 0;

if (completed === "true" && lastDate !== today) {
  if (
    lastDate &&
    new Date(today) - new Date(lastDate) === 86400000
  ) {
    streak++;
  } else {
    streak = 1;
  }

  localStorage.setItem("streak", streak);
  localStorage.setItem("lastStreakDate", today);
  localStorage.removeItem("completedToday");
}
