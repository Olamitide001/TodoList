const todoInput =document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoContainer = document.querySelector('.todo-container')
const filterOption = document.querySelector('.filter')
const deletebutton = document.querySelector('.delete')
// const completebutton = document.querySelector('.mark')

todoContainer.innerHTML=" "

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
    const btnDiv = document.createElement('div')
    btnDiv.classList.add("buttons")
    newTodo.appendChild(btnDiv)
    const mark = document.createElement('button')
    mark.classList.add('mark')
    btnDiv.appendChild(mark)
    const trash = document.createElement('button')
    trash.classList.add('delete')
    btnDiv.appendChild(trash)
    const check = document.createElement('p')
    check.classList.add('square')
    mark.appendChild(check)
    const remove = document.createElement('p')
    remove.classList.add('circle')
    trash.appendChild(remove)
    remove.textContent = "X"
    todoInput.value = ""

mark.addEventListener('click', function(){
    paragraph.style.textDecoration = "line-through"
    newTodo.style.background ="grey"
    check.textContent = "+"
})
mark.addEventListener('dblclick', function(){
    paragraph.style.textDecoration = "none"
    newTodo.style.background ="white"
    check.textContent = ""
})
trash.addEventListener('click', function(){
    newTodo.style.display = "none"
})
}
