let btn = document.getElementById('btn');

btn.addEventListener('click', function (e) {
    let getValueInput = document.getElementById('input').value;
    console.log(getValueInput);
    let taskValue = []
    taskValue.unshift(getValueInput)
    let liste = '<ul>';
    for (const getTaskItem of taskValue) {
        liste += ` <li> ${getTaskItem} </li>`
    }
    liste += '</ul>'

    document.querySelector('.tache').innerHTML += liste
})