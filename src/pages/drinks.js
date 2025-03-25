import flatWhiteImage from '../img/flat-white.jpg';

export const drawDrinksPage = () => {
  const contentDiv = document.querySelector('#content');

  const createItem = (name, image, price) => {

    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-wrapper');

    const itemImage = document.createElement('img');
    itemImage.classList.add('item-image');
    itemImage.src = image;
    
    const itemName = document.createElement('p');
    itemName.classList.add('item-description')
    itemName.innerText = name;

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('item-price');
    itemPrice.innerText = `$${price}`

    itemContainer.appendChild(itemImage);
    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemPrice);

    contentDiv.appendChild(itemContainer);
  }
  createItem('flat white', flatWhiteImage, 20);
}