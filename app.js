let btn = document.getElementById('btn');

btn.addEventListener('click', function (e) {
    let getValueInput = document.getElementById('input').value;
    //console.log(getValueInput);

    let liste = '<ul>';
    liste += ` <li> ${getValueInput} </li>`
    liste += '</ul>';

    document.querySelector('.tache').innerHTML += liste;
})