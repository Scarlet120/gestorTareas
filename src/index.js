import { renderTasks } from "./ui";
import { addTask, deleteTask, updateTask } from "./task";
import confetti from "canvas-confetti";

document.addEventListener("DOMContentLoaded", () => {
    //Hacemos visible la lista de tareas//
    renderTasks();

    //Agregar el evento para la función agregar tareas
    document.getElementById("task-form").addEventListener("click", (e) => {
        console.log("clic")
        console.log(e)
        if(e.target.innerText === "AGREGAR"){
            const taskInput = document.getElementById("task-input");
            if(taskInput.value !== "") {
                //Agregamos la tarea 
                addTask(taskInput.value);
    
                //Volvemos a cargar la lista de tareas
                renderTasks();
    
                //Limpiar el input
                document.getElementById("task-input").value = "";
            }
        }
        
    });

    //Agregar el evento para los botenes 
    document.getElementById("task-list").addEventListener("click",(e) => {
        if(e.target.classList.contains("delete")) {
            const taskId = e.target.parentElement.getAttribute("data-id");
            deleteTask(taskId);
            renderTasks();
        }

        if(e.target.classList.contains("toggle")){
            const taskId = e.target.parentElement.getAttribute("data-id");
            updateTask(taskId);
            renderTasks();
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            })   
        }
        
        if(e.target.classList.contains("undo")){
            const taskId = e.target.parentElement.getAttribute("data-id");
            updateTask(taskId);
            renderTasks();
        }
    }); 
});