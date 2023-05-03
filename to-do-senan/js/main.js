const sort = document.querySelector('.bs');
const list = document.querySelector('ul');
let sorted = false;


const a = document.querySelector(".f1");

a.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(e.target);
    const todo = d.get('it');
    addListItem(todo);
});

function addListItem(todo) {
    const li = document.createElement('li');
    li.classList.add('js-add');
    const span = document.createElement('span');
    span.innerText = todo;

    const del = document.createElement('button');
    del.type = 'button';
    del.classList.add('it-btn');
    del.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    });

    li.append(span, del);
    list.append(li);
}

sort.addEventListener('click', (event) => {
    const arr = new Array ();
    const siyahi = document.querySelectorAll('li');
    siyahi.forEach(li => {
        arr.push(li.firstElementChild.innerText);

    });
    if(!sorted) {
        arr.sort((a,b) => {
            if(a > b) return 1;
            if(a < b) return -1;
        });
        sorted = true;
        event.target.classList.remove('bs');
        event.target.classList.add('bs-2');
    } else {
        arr.sort((a,b) => {
            if(a < b) return 1;
            if(a > b) return -1;
            return 0;
        });
        sorted = false;
        event.target.classList.remove('bs-2');
        event.target.classList.add('bs');
    }
    list.innerHTML = '';
    arr.forEach(item =>{
        addListItem(item);
    });
});


















