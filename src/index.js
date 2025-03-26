import './style.css';
import { drawHomePage } from './pages/home';
import { drawDrinksPage } from './pages/drinks';
import { drawAboutPage } from './pages/about';

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => tab.addEventListener('click', function() {
  clearTabsHighlight();
  switchToTab(this);
  highlightTab(this);
}));

const highlightTab = (tab) => {
  tab.classList.add('current-page');
};

const clearTabsHighlight = () => {
  tabs.forEach(tab => tab.className = '');
}

const switchToTab = (tab) => {
  const contentDiv = document.querySelector('#content');
  const footer = document.querySelector('footer');
  contentDiv.innerHTML = '';
  contentDiv.className = '';
  footer.className = '';

  console.log(tab.innerHTML);
  switch(tab.innerHTML) {
    case 'Home':
      drawHomePage();
      break;
    
    case 'Drinks':
      drawDrinksPage();
      break;

    case 'About':
      drawAboutPage();
      break;
  }
}

const homePageRef = document.querySelector('.home');
drawHomePage();
highlightTab(homePageRef);