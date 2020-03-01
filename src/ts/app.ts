import * as api from 'rickmortyapi';
import { RickMortyApp } from './models/app.model';
import { CharacterCard, CharacterDetail, CharacterList } from './models/character.model';

document.addEventListener(
  'DOMContentLoaded',
  function() {
    init();
  },
  false,
);

const rickMortyApp: RickMortyApp = {
  urlParams: null,
};
const main: HTMLElement = document.querySelector('main');
const characters: HTMLElement = document.querySelector('.characters');
const character: HTMLElement = document.querySelector('.character');

function init() {
  rickMortyApp.urlParams = new URLSearchParams(window.location.search);

  if (characters) {
    renderCharacters();
  } else if (character && rickMortyApp.urlParams.has('id')) {
    renderCharacter();
  }
}

async function renderCharacter(): Promise<any> {
  const characterId: string = rickMortyApp.urlParams.get('id');
  const selectedCharacter: CharacterDetail = await api.getCharacter(+characterId);
  const status: 'dead' | 'alive' =
    selectedCharacter.status === 'Dead' || selectedCharacter.status === 'unknown'
      ? 'dead'
      : 'alive';

  console.log('selectedCharacter:::', selectedCharacter);

  const characterHeading: HTMLElement = document.querySelector('.character-heading');
  characterHeading.append('This character is ' + status + '!');

  const card: CharacterCard = createCard();
  card.figure.classList.add('grid-12');
  card.image.setAttribute('src', selectedCharacter.image);
  card.placeholderImage.classList.add('col-12', 'col-sm-6');
  card.image.classList.add('col-12', 'col-sm-6');
  if (status === 'dead') {
    character.classList.add('dead');
    card.figure.classList.add('flipInX');
  } else {
    card.figure.classList.add('flipInY');
  }
  card.caption.innerHTML = `
    <h3>${selectedCharacter.name}</h3>
    <p><em>Species</em>: ${selectedCharacter.species}</p>
    <p><em>Origin</em>: ${selectedCharacter.origin.name}</p>
    <p><em>Location</em>: ${selectedCharacter.location.name}</p>
    <a href="/">Back to the list</a>
  `;
  card.caption.classList.add('col-12', 'col-sm-6');
  generateFigure(character, card.figure, card.placeholderImage, card.image, card.caption);
  main.style.removeProperty('display');
}

async function renderCharacters(): Promise<any> {
  const twentyFirstCharacters: CharacterList = await api.getCharacter();
  shuffle(twentyFirstCharacters.results);

  console.log('twentyFirstCharacters:::', twentyFirstCharacters);

  for (const singleCharacter of twentyFirstCharacters.results) {
    const card: CharacterCard = createCard();
    card.image.setAttribute('src', singleCharacter.image);
    card.caption.innerHTML = `<h4>${singleCharacter.name}</h4>`;
    card.figure.addEventListener('click', function() {
      (window as Window).location.href = `/character?id=${singleCharacter.id}`;
    });
    card.figure.addEventListener('mouseover', function() {
      card.figure.classList.add('pulse');
    });
    card.figure.addEventListener('mouseout', function() {
      card.figure.classList.remove('pulse');
    });
    generateFigure(characters, card.figure, card.placeholderImage, card.image, card.caption);
  }
  main.style.removeProperty('display');
}

function createCard(): CharacterCard {
  const figure = document.createElement('figure');
  const placeholderImage = document.createElement('img');
  const image = document.createElement('img');
  const caption = document.createElement('figcaption');
  figure.classList.add('character-card', 'animated');
  placeholderImage.setAttribute('src', 'assets/img/placeholders/avatar-placeholder.jpeg');
  image.setAttribute('alt', 'Rick And Morty character');
  image.style.display = 'none';

  return { caption, figure, image, placeholderImage };
}

function generateFigure(
  parent: HTMLElement,
  figure: HTMLElement,
  placeholderImage: HTMLElement,
  image: HTMLElement,
  caption: HTMLElement,
): void {
  figure.appendChild(placeholderImage);
  figure.appendChild(image);
  figure.appendChild(caption);
  parent.appendChild(figure);
  image.addEventListener('load', function() {
    figure.removeChild(placeholderImage);
    image.style.removeProperty('display');
  });
}

function shuffle(characters: CharacterDetail[]): CharacterDetail[] {
  let currentIndex: number = characters.length,
    temporaryValue: CharacterDetail,
    randomIndex: number;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = characters[currentIndex];
    characters[currentIndex] = characters[randomIndex];
    characters[randomIndex] = temporaryValue;
  }

  return characters;
}
