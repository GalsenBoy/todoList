function addTask() {

    let getInputValue = document.querySelector('input').value;
    let task = [];
    let liste = document.createElement('li');
    task.push(getInputValue);
    liste.innerHTML = task;
    document.querySelector('ul').appendChild(liste);
}
const btn = document.getElementById('btn');
btn.addEventListener('click', addTask);


