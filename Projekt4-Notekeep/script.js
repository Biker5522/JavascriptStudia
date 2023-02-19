class Note {
  constructor(title, body, color, isPinned, dateOfCreation) {
    this.title = title;
    this.body = body;
    this.color = color;
    this.isPinned = isPinned;
    this.date = new Date().toISOString();
  }
}

let Notes = [];

//FORM
const form = document.querySelector("#form");
const inputTitle = document.querySelector("#title");
const inputBody = document.querySelector("#body");
const inputColor = document.querySelector("#color");
const inputIsPinned = document.querySelector("#isPinned");
const notesContainer = document.querySelector("#notesContainer");

const submitFunc = (event) => {
  let newNote = new Note(
    inputTitle.value,
    inputBody.value,
    inputColor.value,
    inputIsPinned.checked
  );
  Notes.unshift(newNote);
  console.log(Notes);
  localStorage.setItem("Notes", JSON.stringify(Notes));
  let storedNotes = localStorage.getItem("Notes");
  if (storedNotes) {
    Notes = JSON.parse(storedNotes);
  }
  renderNotes();
  console.log(Notes);

  window.addEventListener("storage", function (event) {
    let storedNotes = localStorage.getItem("Notes");
    if (storedNotes) {
      Notes = JSON.parse(storedNotes);
    }
    console.log(storedNotes);
    console.log(
      event.key +
        " has been changed from " +
        event.oldValue +
        " to " +
        event.newValue
    );
    console.log(localStorage.getItem("Notes"));
  });
  event.preventDefault();
};

const checkNotes = () => {
  let storedNotes = localStorage.getItem("Notes");
  if (storedNotes) {
    let currentNotes = JSON.parse(storedNotes);
    if (JSON.stringify(currentNotes) !== JSON.stringify(Notes)) {
      Notes = currentNotes;

      console.log("Notes array has been updated!");
      renderNotes();
    }
  }
};
setInterval(checkNotes, 1000);

const renderNotes = () => {
  notesContainer.innerHTML = "";
  Notes = Notes.sort((a, b) => b.isPinned - a.isPinned);

  for (let i = 0; i < Notes.length; i++) {
    let note = Notes[i];
    let noteElement = document.createElement("div");
    noteElement.className = "note";
    noteElement.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.body}</p>
      <p>Color: ${note.color}</p>
      <p>Pinned: ${note.isPinned}</p>
      <p>Date: ${note.date} } <p>
    `;
    noteElement.style.border = `1px solid ${note.color}`;
    notesContainer.appendChild(noteElement);
  }
};

form.addEventListener("submit", submitFunc);
