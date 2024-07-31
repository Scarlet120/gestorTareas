let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//Función para agregar tareasa
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false, 
    }
}