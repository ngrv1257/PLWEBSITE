const classSelect = document.getElementById("classSelect");
const subjectSelect = document.getElementById("subjectSelect");
const chapterSelect = document.getElementById("chapterSelect");

classSelect.addEventListener("change", function () {
  subjectSelect.disabled = !this.value;
  chapterSelect.disabled = true;
});

subjectSelect.addEventListener("change", function () {
  chapterSelect.disabled = !this.value;
});

function goToContent() {
  if (!classSelect.value || !subjectSelect.value || !chapterSelect.value) {
    alert("Please select Class, Subject and Chapter");
    return;
  }

  const url =
    "content/" +
    classSelect.value +
    "/" +
    subjectSelect.value +
    "/" +
    chapterSelect.value +
    ".html";

  window.location.href = url;
}

/* ===== FIREBASE LOGIN WILL BE HOOKED HERE LATER ===== */