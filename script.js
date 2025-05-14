let send = document.getElementById('send')
let list = document.getElementById('list')
let zapis = document.getElementById('zapis')

let dayNight = document.getElementById('day-night')


dayNight.addEventListener('click', ()=>{
    if(document.body.classList.toggle('dark-mode')){
        dayNight.textContent = '🔆'
    }else{
        dayNight.textContent = '🌙'
    }

})

send.addEventListener('click', ()=>{
    let newElemnt = document.createElement('li');
    newElemnt.className = 'list-item'

    let span = document.createElement('span')
    span.textContent = zapis.value;
    newElemnt.appendChild(span)

    let div = document.createElement('div')
    div.className = 'edit-delete'
    newElemnt.appendChild(div)    
    
    let editBtn = document.createElement('button')
    editBtn.textContent = '🖊';
    div.appendChild(editBtn)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = '🗑️';
    div.appendChild(deleteBtn)


    editBtn.addEventListener('click', ()=>{
        span.textContent = prompt(`Изменить '${span.textContent}' на следующий текст`);
    })

    deleteBtn.addEventListener('click', ()=>{
        newElemnt.remove()
    })

    if (zapis.value == ''){
        alert('Вы ничего не ввели!!!!')
    }else{
        list.appendChild(newElemnt)
        zapis.value = ''
    } 
})












  

