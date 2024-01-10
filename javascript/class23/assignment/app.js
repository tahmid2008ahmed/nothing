// selecors
const form = document.querySelector(".new-task-form");
const taskInput = document.getElementById("new-task-input");
const taskLists = document.getElementById("tasks");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    if (taskInput.value) {
        const task = taskInput.value;

    // creating task div
    const taskEl =document.createElement("div");
    taskEl.classList.add("task");

    // creating content div
    const taskElContent = document.createElement("div");
    taskElContent.classList.add("content")

    // inserting content div to task
    taskEl.appendChild(taskElContent);

    const taskElInput = document.createElement("input");
    taskElInput.classList.add("text");
    taskElInput.value = task;
    taskElInput.setAttribute("readonly", "readonly");

    // inserting input to content div
    taskElContent.appendChild(taskElInput)

    // creating action div
    const taskElAction =document.createElement("div");
    taskElContent.classList.add("actions");

    // inserting action div to content div
    taskElContent.appendChild(taskElAction);

    // creating edit btn
    const taskEditBtn =document.createElement("button");
    taskEditBtn.classList.add("edit");
    taskEditBtn.innerText = "EDIT";

    // creating delete btn
    const taskDeleteBtn =document.createElement("button");
    taskDeleteBtn.classList.add("delete");
    taskDeleteBtn.innerText = "DELETE";

    // creating complete btn
    const taskCompleteBtn =document.createElement("button");
    taskCompleteBtn.classList.add("complete");
    taskCompleteBtn.innerText = "DONE";    

    // inserting buttons to action div
    taskElAction.appendChild(taskEditBtn);
    taskElAction.appendChild(taskDeleteBtn);
    taskElAction.appendChild(taskCompleteBtn);

    // inserting taskEl div to tasks div
    taskLists.appendChild(taskEl);

    // clear the input field after writing
    taskInput.value = " ";

    taskEditBtn.addEventListener("click", function() {
        if (taskEditBtn.innerText= "EDIT") {
            taskEditBtn.innerText = "SAVE";
            taskElInput.removeAttribute("readonly");
            taskElInput.focus();
        } else {
            taskEditBtn.innerText = "EDIT";
            taskElInput.setAttribute("readonly", "readonly")
        }

    });

    taskDeleteBtn.addEventListener("click", function() { 
        taskEl.style.display = "none";
    });

    taskCompleteBtn.addEventListener("click", function() { 
        taskEl.style.display = "none";
    });

    
    } else {
        alert("please, enter your work")
    }

});
