const $ = document
const taskList = $.querySelector('#taskList')
const taskInput = $.querySelector('input')
const btn = $.querySelector('#btn')
const totalTask = $.querySelector('#totalTask')
const completedTasks = $.querySelector('#completedTasks')
let numberId = 1

const tasks = [
    {
        id: numberId++,
        name: 'Hacer mercado',
        completed: false
    },
    {
        id: numberId++,
        name: 'Estudiar para la prueba',
        completed: false
    },
    {
        id: numberId++,
        name: 'Sacar a pasear a Toby',
        completed: false
    }
]

function renderList (){
    let html = ''
    for(let task of tasks){
        html += `<tbody>
        <td>${task.id}</td>
        <td>${task.name}</td>
        <td><input type='checkbox' id='checkbox' onclick='checkboxInput(${task.id})' ${task.completed ? 'checked': ''}></td>
        <td><button onclick='deleteTask(${task.id})'>❌</button></td>
        </tbody>
        `
    }
    taskList.innerHTML = html
    totalTask.innerHTML = tasks.length
    completedTasks.innerHTML = tasks.filter(task => task.completed === true).length
}
renderList ()

btn.addEventListener('click', () =>{
    const nameTask = taskInput.value
    if(nameTask){
        tasks.push({id: numberId++, name: nameTask, completed: false})
    }
    taskInput.value = ''
    renderList ()
})

function checkboxInput(id){
    const index = tasks.findIndex((task)=> task.id === id)
    if(tasks[index].completed === false){
        tasks[index].completed = true
    }else{
        tasks[index].completed = false
    }
    renderList()
}

function deleteTask (id){
    const index = tasks.findIndex((element) => element.id === id)
    tasks.splice(index, 1)
    renderList ()
}

