const noteInput = document.getElementById('note-input');
const addNoteBtn = document.getElementById('add-note-btn');
const noteList = document.getElementById('note-list');

// Retrieve saved notes when the page loads
document.addEventListener('DOMContentLoaded', getNotes);

addNoteBtn.addEventListener('click', addNote);

// Add Note
function addNote() {
    if (noteInput.value === '') {
        alert("Please enter a note.");
        return;
    }

    let notes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : []; // READ

    notes.push(noteInput.value); // CREATE

    localStorage.setItem('notes', JSON.stringify(notes));

    noteInput.value = '';

    displayNotes();
}

// Display Notes
function displayNotes() {
    let notes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : []; 
    noteList.innerHTML = '';

    notes.forEach((note, index) => {
        const li = document.createElement('li');

        // Create a span element to display the note text
        const noteText = document.createElement('span');
        noteText.className = 'note-text';
        noteText.textContent = note;

        // Create a div to hold the buttons together
        const buttonsDiv = document.createElement('div');

        // Create the edit button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        editBtn.onclick = function() {
            // Function to open edit mode
            openEditMode(index, li, noteText, buttonsDiv);
        };

        // Create the delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            deleteNote(index);
        };

        // Add buttons to the div
        buttonsDiv.appendChild(editBtn);
        buttonsDiv.appendChild(deleteBtn);

        // Add the text and buttons to the li element
        li.appendChild(noteText);
        li.appendChild(buttonsDiv);
        
        noteList.appendChild(li);
    });
}

// Delete Note
function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem('notes'));
    notes.splice(index, 1); // DELETE
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
}

// Open Note Edit Mode
function openEditMode(index, li, noteTextElement, buttonsDiv) {
    // Get the current text
    const currentText = noteTextElement.textContent;
    
    // Create an input field for editing
    const editInput = document.createElement('textarea');
    
    editInput.value = currentText;
    editInput.className = 'note-input-edit';
    
    // Replace the old text and buttons with the input field
    li.replaceChild(editInput, noteTextElement);

    // Create the save button
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.className = 'edit-btn'; 
    saveBtn.onclick = function() {
        updateNote(index, editInput.value);
    };

    
    buttonsDiv.innerHTML = ''; 
    buttonsDiv.appendChild(saveBtn);
}

// Update Note
function updateNote(index, newText) {
    if (newText.trim() === '') {
        alert("Note cannot be empty!");
        return;
    }
    let notes = JSON.parse(localStorage.getItem('notes'));
    notes[index] = newText; // UPDATE
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes(); // Refresh the list
}

// Function to display notes when the page first loads
function getNotes() {
    displayNotes();
}