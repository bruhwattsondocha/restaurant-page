export const drawHomePage = () => {
  const contentPlace = document.querySelector('#content');

  const heroText = document.createElement('h1');
  heroText.innerText = "Specialty coffee with a nature's touch";
  heroText.classList.add('hero-text');

  const heroSubText = document.createElement('p');
  heroSubText.innerText = "With own roast company and baristas certificated by SCA";
  heroSubText.classList.add('hero-subtext');

  const locationInfo = document.createElement('p');
  locationInfo.innerText = "We're located at 152 Greenway Ave, Willowbrook, OR 97211, USA";
  locationInfo.classList.add('location');

  contentPlace.appendChild(heroText);
  contentPlace.appendChild(heroSubText);
  contentPlace.appendChild(locationInfo);
};