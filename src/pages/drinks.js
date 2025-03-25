import flatWhiteImage from '../img/flat-white.jpg';

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
  heading.innerText = 'Our drinks menu';

  contentDiv.appendChild(heading);
  contentDiv.appendChild(drinksGridDiv);

  createItem('espresso', flatWhiteImage, 20);
  createItem('americano', flatWhiteImage, 20);
  createItem('cappucino', flatWhiteImage, 20);
  createItem('latte', flatWhiteImage, 20);
  createItem('raf coffee', flatWhiteImage, 20);
  createItem('flat white', flatWhiteImage, 20);
  createItem('bumble coffee', flatWhiteImage, 20);
  createItem('ice latte', flatWhiteImage, 20);
  createItem('ice tonic', flatWhiteImage, 20);
}