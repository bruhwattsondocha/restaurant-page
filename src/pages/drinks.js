import flatWhiteImage from '../img/flat-white.jpg';
import espressoImage from '../img/espresso.jpg';
import americanoImage from '../img/americano.jpg';
import cappucinoImage from '../img/cappucino.jpg';
import latteImage from '../img/latte.jpg';
import rafImage from '../img/raf.jpg';
import bumbleImage  from '../img/bumble-coffee.jpg';
import iceLatteImage from '../img/ice-latte.jpg';
import iceTonicImage  from '../img/ice-tonic.jpg';


export const drawDrinksPage = () => {
  const contentDiv = document.querySelector('#content');
  contentDiv.classList.add('drinks')

  const drinksGridDiv = document.createElement('div');
  drinksGridDiv.classList.add('drinks-grid');


  const createItem = (name, image, price) => {

    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-wrapper');

    const itemImage = document.createElement('img');
    itemImage.classList.add('item-image');
    itemImage.src = image;
    
    const itemName = document.createElement('p');
    itemName.classList.add('item-name')
    itemName.innerText = name;

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('item-price');
    itemPrice.innerText = `$${price}`

    itemContainer.appendChild(itemImage);
    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemPrice);

    drinksGridDiv.appendChild(itemContainer);
  }

  const heading = document.createElement('h1');
  heading.classList.add('drinks-heading')
  heading.innerText = 'drinks menu';

  const footer = document.querySelector('footer');
  footer.classList.add('drinks');

  contentDiv.appendChild(heading);
  contentDiv.appendChild(drinksGridDiv);

  createItem('espresso', espressoImage, 10);
  createItem('americano', americanoImage, 10);
  createItem('cappucino', cappucinoImage, 13);
  createItem('latte', latteImage, 15);
  createItem('flat white', flatWhiteImage, 15);
  createItem('raf coffee', rafImage, 20);
  createItem('bumble coffee', bumbleImage, 20);
  createItem('ice latte', iceLatteImage, 20);
  createItem('ice tonic', iceTonicImage, 20);
}