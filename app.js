const taskform=document.getElementById("task-form")
const taskList=document.getElementById("task-list")
let taskIndex=1;

taskform.addEventListener("submit",function(event)
{
    event.preventDefault();
    const taskInput=document.getElementById("task-input");
    const taskText=taskInput.value.trim();
    // console.log(taskText)
    taskText.innerhtml=document.getElementById("task-list");
     
    if (taskText!==""){
        //create new task item
        const taskItem =document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.textContent=`${taskIndex}- ${taskText}`;
        
        taskItem.addEventListener("click",function(){
        
            this.classList.toggle("completed")//this completed can be use as class from css
           
        }
    )
         // append task item to the task list 
        taskList.appendChild(taskItem)
        //increment the task
        taskIndex++;


        //clearing the task form
        taskInput.value="";
    }
}
)