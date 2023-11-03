const todos = [
    {text: "Do leetcode questions", completed: false}, 
    {text: "Do web development", completed: false}
]

const addButton = document.getElementById('addTaskButton')
const deleteButton = document.getElementById('deleteTaskButton')
const taskUl = document.getElementById('taskUl')

function initTaskList() {
    taskUl.innerHTML = '';
    for(let i = 0; i < todos.length; i++){
        const todo = todos[i]
        if (!todo.completed) {
            const listItem = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.addEventListener('change', function() {
                toggleCompletion(i);
            });

            const textSpan = document.createElement('span');
            textSpan.textContent = todo.text;

            listItem.appendChild(checkbox);
            listItem.appendChild(textSpan);

            taskUl.appendChild(listItem);
        }
    }
}

function toggleCompletion(index) {
    todos[index].completed = true;
    initTaskList();
}

window.addEventListener('load', initTaskList)

addButton.addEventListener('click', function(){
    const task = prompt("Add a task")
    if(task !== ""){
        todos.push({ text: task, completed: false });
        initTaskList()
    }
})

deleteButton.addEventListener('click', function(){
    todos.pop()
    initTaskList()
})
