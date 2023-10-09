//For editing notes
let notesArr = document.querySelectorAll(".note-box")
let editable = false;

for(let i = 0; i < notesArr.length; i++){
    notesArr[i].addEventListener("click", (event) => {

        if(event.target.getAttribute("class") == "edit-note" || event.target.getAttribute("id") == "pencil-icon"){
            console.log("Edit this")
            let editable = notesArr[i].querySelector(".note").contentEditable;

            for(let j = 0; j < notesArr.length; j++){
                notesArr[j].querySelector(".note").contentEditable = false;
                notesArr[j].classList.remove("active");
            }

            if(editable == "inherit" || editable == "false"){
                notesArr[i].classList.add("active");
                notesArr[i].querySelector(".note").contentEditable = true;
            }else if(editable == "true"){
                notesArr[i].classList.remove("active");
                notesArr[i].querySelector(".note").contentEditable = false;
            }
        }
    })
}

//Colors for each note
let clrArr = ["#F3C368", "#F4956F", "#6150FB", "#00CAF2", "#DAE586"]
let colorArr = document.querySelectorAll(".circle");
let noteGrid = document.querySelector(".note-grid");
let plusBtn = document.querySelector(".add-note");

//let current color selected be first circle
let currentColor = clrArr[0];
colorArr[0].classList.add("active");

for(let i = 0; i < colorArr.length; i++){

    colorArr[i].addEventListener("click", function(){
        currentColor = clrArr[i];

        for(let j = 0; j < colorArr.length; j++){
            colorArr[j].classList.remove("active");
        }

        colorArr[i].classList.add("active");

    })

}

//Creating a new note
plusBtn.addEventListener("click", function(){
    let noteBox = document.createElement("div");
    noteBox.className = "note-box";
    noteBox.style.backgroundColor = currentColor;

    let note = document.createElement("div");
    note.className = "note";

    //For date
    let now = new Date();
    let date = document.createElement("div");
    date.className = "date";
    date.innerText = dateBuilder(now);

    let editNote = document.createElement("div");
    editNote.className = "edit-note";

    let pencilIcon = document.createElement("i");
    pencilIcon.setAttribute("id", "pencil-icon");
    pencilIcon.className = "fa-solid fa-pencil";

    editNote.appendChild(pencilIcon);

    //Adding everything to noteBox
    noteBox.appendChild(note)
    noteBox.appendChild(date)
    noteBox.appendChild(editNote)

    noteGrid.appendChild(noteBox);

    noteBox.addEventListener("click", function (event) {
        if (
          event.target.getAttribute("class") == "edit-note" ||
          event.target.getAttribute("id") == "pencil-icon"
        ) {
          console.log("Edit this");
          let editable = noteBox.querySelector(".note").contentEditable;
    
          for (let j = 0; j < notesArr.length; j++) {
            notesArr[j].querySelector(".note").contentEditable = false;
            notesArr[j].classList.remove("active");
          }
    
          if (editable == "inherit" || editable == "false") {
            noteBox.classList.add("active");
            noteBox.querySelector(".note").contentEditable = true;
          } else if (editable == "true") {
            noteBox.classList.remove("active");
            noteBox.querySelector(".note").contentEditable = false;
          }
        }
      });

    updateNotesArr();
})

function updateNotesArr(){
    notesArr = document.querySelectorAll(".note-box")
    console.log(notesArr);
}

function dateBuilder(d){
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${month} ${date}, ${year}`;
}



