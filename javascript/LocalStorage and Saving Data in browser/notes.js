 const input = document.getElementById("noteInput");
  const addBtn = document.getElementById("addBtn");
  const noteList = document.getElementById("noteList");

  //load saved notes

  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  renderNotes();
  
  addBtn.addEventListener("click",()=>{
    if(input.value.trim() === "") return;

    notes.push(input.value);
    localStorage.setItem("notes",JSON.stringify(notes));
    input.value= "";
    renderNotes();
  })
  function renderNotes(){
    noteList.innerHTML="";
    notes.forEach((note,index)=>{
        let li= document.createElement("li");
        li.textContent =note;

        let delBtn =document.createElement("button");
        delBtn.textContent= "Delete";
        delBtn.onclick=()=>{
            notes.splice(index,1);
            localStorage.setItem("notes",JSON.stringify(notes));
            renderNotes();

        };
        li.appendChild(delBtn);
        noteList.appendChild(li);
    })

  }