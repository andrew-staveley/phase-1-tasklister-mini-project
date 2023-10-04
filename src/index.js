document.addEventListener("DOMContentLoaded", (e) => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.new_task_description.value)
    form.reset()
  })
})

function buildToDo(todo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDeleteToDo)
  p.textContent = `${todo} `
  btn.textContent = 'x'
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
}

function handleDeleteToDo (e) {
  e.target.parentNode.remove()
}