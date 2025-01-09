const taskform=document.getElementById("task-form")
const tasklist=document.getElementById("task-list")
  

taskform.addEventListener("submit",function(event)
{
    event.preventDefault();
    const taskInput=document.getElementById("task-input");
    const taskText=taskInput.value.trim();
    // console.log(taskText)
    taskText.innerhtml=document.getElementById("task-list")
}
)