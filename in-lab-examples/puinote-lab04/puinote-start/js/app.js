class Notecard {

  constructor(imageURL, title, body, elementID) {
    console.log('Create a new notecard!');
    this.noteImageURL = imageURL;
    this.noteTitle = title;
    this.noteBody = body;

    this.element = document.querySelector(elementID);

    this.updateElement();
  }

  updateElement() {
    console.log('Updating HTML!')

    // // first, find the notecard that we want to update
    // const element = document.querySelector('#notecard-one');
    
    // then, search within the notecard to find the title element
    const noteTitleElement = this.element.querySelector('.note-title');
    const noteImageElement = this.element.querySelector('.notecard-thumbnail');
    const noteBodyElement = this.element.querySelector('.note-body');

    noteImageElement.src = this.noteImageURL;
    noteTitleElement.innerText = this.noteTitle;
    noteBodyElement.innerText = this.noteBody;
  }

  deleteNote() {
    console.log('Deleting Note!');
    this.element.remove();
  }
}

const notecardOne = new Notecard(
  'assets/warhol-frog.png',
  'This is the First Note',
  'Here is some body text for the first note.',
  '#notecard-one'
);

const notecardTwo = new Notecard(
  'assets/warhol-orangutan.png',
  'This is the Second Note',
  'And here is some body text for the second note! What could be next?',
  '#notecard-two'
);

const notecardThree = new Notecard(
  'assets/warhol-eagle.png',
  'This is the Third Note',
  'Yep, you guessed it, here is some body text for the third note.',
  '#notecard-three'
);