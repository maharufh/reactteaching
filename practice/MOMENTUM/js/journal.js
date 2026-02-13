 function saveJournal() {
  const entry = {
    build: document.getElementById("build").value,
    learn: document.getElementById("learn").value,
    date: new Date().toDateString()
  };

  localStorage.setItem("journal", JSON.stringify(entry));
  alert("Saved 👍");
}
