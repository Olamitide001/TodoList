const todoInput =document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoContainer = document.querySelector('.todo-container')
const filterOption = document.querySelector('.filter')
const deletebutton = document.querySelector('.delete')
// const completebutton = document.querySelector('.mark')

todoContainer.innerHTML=" "
// todoButton.addEventListener('click', addTodo)
todoButton.addEventListener('click' , addTodo)
function addTodo(event){
    event.preventDefault()
    const newTodo = document.createElement('div')
    newTodo.classList.add('item')
    todoContainer.appendChild(newTodo)
    const paragraph= document.createElement('p')
    paragraph.classList.add('item-list')
    paragraph.innerText = todoInput.value
    newTodo.appendChild(paragraph)
    const mark = document.createElement('button')
    mark.classList.add('mark')
    newTodo.appendChild(mark)
    const trash = document.createElement('button')
    trash.classList.add('delete')
    newTodo.appendChild(trash)
    const check = document.createElement('p')
    check.classList.add('square')
    mark.appendChild(check)
    const remove = document.createElement('p')
    remove.classList.add('circle')
    trash.appendChild(remove)
    document.querySelector(".circle").textContent = "X"
    todoInput.value = ""

mark.addEventListener('click', function(){
    newTodo.style.textDecoration = "line-through"
    newTodo.style.background ="grey"
    document.querySelector(".square").textContent = "+"
})
mark.addEventListener('dblclick', function(){
    newTodo.style.textDecoration = "none"
    newTodo.style.background ="white"
    document.querySelector(".square").textContent = ""
})
trash.addEventListener('click', function(){
    newTodo.style.display = "none"
})
}
