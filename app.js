import './script/components/index.js';
import notesData from './script/data/notes.js';

const noteItem = document.querySelector('note-item');
noteItem.note = notesData;

document.querySelector('note-input').addEventListener('note-added', (event) => {
    notesData.push(event.detail);

    const noteItem = document.querySelector('note-item');
    noteItem.note = notesData;
});