import Task from "./Task.js";
import TaskService from "./TaskService.js";

import CompleteTask from "./CompleteTask.js";
import CompleteService from "./CompleteService.js";

let taskSV = new TaskService();
let taskComplete = new CompleteService();



let showTaskList = (taskArray) => {
    let content = "";
    taskArray.map((task) => {
        let { id, inforTask } = task;
        content += `
            <li>
                <div class="information">${inforTask}</div>
                <div>
                    <button class="btn btn-danger" onclick ="deleteTask(${id})" ><i class="fa-solid fa-trash"></i></button>
                    <button data-toggle="modal" data-target="#exampleModal" class="btn btn-info" onclick="detailTask(${id}), deleteTask(${id})" ><i class="fa-regular fa-circle-check"></i></button>
                </div>
            </li>
        `
    });

    document.querySelector(" #todo").innerHTML = content;
}

let getList = () => {

    taskSV.getTaskList().then((result) => {
        showTaskList(result.data);
        
    }).catch((error) => {

    })
}
getList();

let addTask = () => {
    let inforTask = document.querySelector("#newTask").value;
    var task = new Task(inforTask)

    taskSV.addTaskList(task)
        .then((result) => {
            document.querySelector("#newTask").value = "";
            getList();

        })
        .catch((error) => {

        })
}

window.addTask = addTask;

let deleteTask = (id) => {
    taskSV.deleteTaskList(id)
        .then((result) => {

            getList();

        }).catch((error) => {

        })
};

window.deleteTask = deleteTask;



let detailTask = (id) => {
    taskSV.detailTaskList(id)
        .then((result) => {
            taskComplete.addCompleteTaskList(result.data)
        })
        .catch((error) => {
        });
}
window.detailTask = detailTask;




let showCompleteTask = (taskArray) => {
    let content = "";
    taskArray.map((task) => {
        let { id, inforTask } = task;
        content += `
            <li>
                <div class="information">${inforTask}</div>
                <div>
                    <button class="btn btn-danger" onclick ="deleteCompleteTask(${id})" ><i class="fa-solid fa-trash"></i></button>
                    <button data-toggle="modal" data-target="#exampleModal" class="btn btn-info" onclick="" style="    background-color: yellowgreen;" ><i class="fa-regular fa-circle-check"></i></button>
                </div>
            </li>
        `
        document.querySelector("#completed").innerHTML = content;
    })
}


let getCompleteList = () => {
    taskComplete.getCompleteTaskList()
    .then((result) => {
        showCompleteTask(result.data);
    }).catch((error) => {

    })
}
getCompleteList();


let deleteCompleteTask = (id) =>{
    taskComplete.deleteCompleteTaskList(id)
    .then((result)=>{
        console.log(result.data)
        getCompleteList()
    })
    .catch((error)=>{

    })
}
window.deleteCompleteTask=deleteCompleteTask;

let clickSXAZ = () =>{
    let completeArray = [];

    taskSV.getTaskList().then((result) => {
        showTaskList(result.data);
        result.data.map((item)=>{
            completeArray.push(item)
        })
        console.log(completeArray)
        showTaskList( completeArray.sort((a, b) => {
            const nameA = a.inforTask.toUpperCase(); // ignore upper and lowercase
            const nameB = b.inforTask.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          })
         )
        
    }).catch((error) => {

    })
}

window.clickSXAZ=clickSXAZ;

let clickSXZA = () =>{
    let completeArray = [];

    taskSV.getTaskList().then((result) => {
        showTaskList(result.data);
        result.data.map((item)=>{
            completeArray.push(item)
        })
        console.log(completeArray)
        showTaskList( completeArray.sort((a, b) => {
            const nameA = a.inforTask.toUpperCase(); // ignore upper and lowercase
            const nameB = b.inforTask.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }
          
            // names must be equal
            return 0;
          })
         )
        
    }).catch((error) => {

    })
}

window.clickSXZA=clickSXZA;





