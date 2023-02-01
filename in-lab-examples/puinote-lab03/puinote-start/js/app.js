console.log('Started Application.');

function updateElement() {
  const noteImageElement = document.querySelector('.notecard-thumbnail');
  console.log(noteImageElement);

  noteImageElement.src = notecard.noteImageURL;
}

const notecard =
{
  noteTitle: 'This is the Title of the Note!',
  notebody: 'And here is the body of the note.',
  noteImageURL: 'assets/warhol-ram.png',
};