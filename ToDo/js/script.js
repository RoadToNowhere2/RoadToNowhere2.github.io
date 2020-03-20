
let left_menu     = document.querySelector('.left_menu');
let openAddToDo   = document.querySelector('.openAddToDo');
let addMessage    = document.querySelector('#AddToDoName');
let addBtn        = document.querySelector('#addToDo');
let toDo          = document.querySelector('.todo_list');



let todoList        = [];

if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}

openAddToDo.addEventListener('click', () => {
    openAddToDo.classList.toggle('openAddToDo_active');
    left_menu.classList.toggle('active_menu');
});

addBtn.addEventListener('click', () => {

    let newTodo = {
        todo        : addMessage.value,
        checked     : false,
        important   : false
    }

    todoList.push(newTodo);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList));
});

function displayMessages() {
    let displayMessage  = '';
    if (todoList ==0) toDo.innerHTML ='';
    todoList.forEach((item, i ) =>{
        displayMessage += `
            <li class="${item.important ? 'important' : ''}${item.checked ? 'checked' : ''}">
                <div class="number ${item.checked ? 'checked_p' : ''}">${i + 1}</div>
                <p id="text_${i}">${item.todo}</p>
                <div class="buttons">
                    <div class="star"><i class="fas fa-star"></i></div>
                    <label for="ok_${i}"><div class="ok"><i class="far fa-check-circle"></i></div></label>
                    <input type="checkbox" id="ok_${i}" data-text="text_${i}" ${item.checked ? 'checked' : ''}>
                    <div class="del" data-del="${item.todo}"><i class="fas fa-ban" data-del="${item.todo}"></i></div>
                </div>
            </li>
        `;

        toDo.innerHTML =  displayMessage;
    }); 
}

toDo.addEventListener('change', e => {
    let dataText        = e.target.getAttribute('data-text');
    let forP            = toDo.querySelector("#"+dataText).innerHTML;
    
    todoList.forEach( (item, i) => {
        if(item.todo == forP) {
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
        if (item.checked) {
            displayMessages();
        } else if (!item.checked) {
            displayMessages();
        }
        
    });
        
});

toDo.addEventListener('click', e => {
    let dataDel        = e.target.getAttribute('data-del');
    todoList.forEach((item, i) => {
        if( dataDel == item.todo) {
            
            todoList.splice(i, 1);
            displayMessages();
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    });
});











