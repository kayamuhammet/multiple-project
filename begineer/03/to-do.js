const btnToDo = document.getElementById('addToDo');
const inputToDo = document.getElementById('toDoInput');
const tbody = document.getElementById('toDoBody');

let counter = 1;

btnToDo.addEventListener('click', () => {
    const task = inputToDo.value.trim();
    if (!task) return;

    // Satır oluştur
    const row = document.createElement('tr');


    // Index Kolon satırı
    const tdIndex = document.createElement('td');
    tdIndex.textContent = counter++;


    // Görev Kolon satırı
    const tdTask = document.createElement('td');
    tdTask.textContent = task;


    // Durum Kolon satırı
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'In Progress';
    toggleButton.style.backgroundColor = 'yellow';
    toggleButton.style.color = 'black';

    toggleButton.addEventListener('click', () => {
        const isCompleted = toggleButton.textContent === 'In Progress';
        toggleButton.textContent = isCompleted ? 'Completed' : 'In Progress';
        toggleButton.style.backgroundColor = isCompleted ? 'green' : 'yellow';
        toggleButton.style.color = isCompleted ? 'white' : 'black';
    });
    const tdButton = document.createElement('td');
    tdButton.appendChild(toggleButton);

    
    

    // Actions Kolon satırı
    const tdActions = document.createElement('td');

    // Delete Butonu
    const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
        row.remove();
    });


    // Delete butonunu Butonları ekle
    tdActions.appendChild(deleteBtn);
    


    // Satırları tabloya ekle
    row.appendChild(tdIndex);
    row.appendChild(tdTask);
    row.appendChild(tdButton);
    row.appendChild(tdActions);


    // Genel satırı tabloya ekle
    tbody.appendChild(row);

    inputToDo.value = "";
});
