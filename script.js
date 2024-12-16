const input = document.getElementById('input');
const butonn = document.getElementById('add-btn');
const list = document.getElementById('list');
const deleteBtn = document.getElementById('delete');

butonn.addEventListener('click', () => {
    const listItm = document.createElement('li')
    list.appendChild(listItm)

    listItm.textContent = input.value;
})    
    deleteBtn.addEventListener('click', () => {
    if (list.lastElementChild){ list.lastElementChild.remove() }
     else 
     { alert('список пуст')}}
)

