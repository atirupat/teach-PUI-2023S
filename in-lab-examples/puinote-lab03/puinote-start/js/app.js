console.log('Started Application.');

function updateElement() {
  console.log('Running the updateElement function!');
  const noteImageElement = document.querySelector('.notecard-thumbnail');
  const noteTitleElement = document.querySelector('.note-title');
  const noteBodyElement = document.querySelector('.note-body');
  console.log(noteImageElement);

  noteImageElement.src = notecard.noteImageURL;
  noteTitleElement.innerText = notecard.noteTitle;
  noteBodyElement.innerText = notecard.notebody;
  console.log(noteImageElement);
}

const notecard =
{
  noteTitle: 'This is the Title of the Note!',
  notebody: 'And here is the body of the note.',
  noteImageURL: 'assets/warhol-ram.png',
};