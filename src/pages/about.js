export const drawAboutPage = () => {
  const contentDiv = document.querySelector('#content');
  contentDiv.classList.add('about');

  const footer = document.querySelector('footer');
  footer.classList.add('about');

  const welcomeH2 = document.createElement('h2');
  welcomeH2.classList.add('hero-text', 'about');
  welcomeH2.innerText = "Welcome to Leaf & Bean Coffee Shop";

  const welcomeText = document.createElement('p');
  welcomeText.classList.add('text', 'about');
  welcomeText.innerText = 'At Leaf & Bean, coffee is more than just a drink—it`s an experience. As an artisan coffee shop and roastery, we are dedicated to sourcing the finest beans, roasting them with precision, and serving them with passion. Our team of highly trained baristas, certified by the Specialty Coffee Association (SCA), ensures every cup meets the highest standards of quality and craftsmanship.'


  const philosophyH2 = document.createElement('h2');
  philosophyH2.classList.add('hero-text', 'about');
  philosophyH2.innerText = 'Our Coffee Philosophy';

  const philosophyText  = document.createElement('p');
  philosophyText.classList.add('text', 'about');
  philosophyText.innerText = 'We believe that exceptional coffee starts at the source. That’s why we work directly with farmers and ethical suppliers to procure the best beans from around the world. Our in-house roasting process brings out the unique flavors and aromas of each batch, ensuring a fresh and vibrant cup every time.'


  const experienceH2 = document.createElement('h2');
  experienceH2.classList.add('hero-text', 'about');
  experienceH2.innerText = 'The Leaf & Bean Experience';

  const experienceText  = document.createElement('p');
  experienceText.classList.add('text', 'about');
  experienceText.innerText = "From the moment you step into our shop, you'll be immersed in the rich aromas of freshly ground coffee and the inviting atmosphere of a true coffee lover’s haven. Whether you’re here for a perfectly brewed espresso, a meticulously crafted pour-over, or a creamy, frothy cappuccino, our baristas are dedicated to delivering excellence in every sip.";


  const baristasH2 = document.createElement('h2');
  baristasH2.classList.add('hero-text', 'about');
  baristasH2.innerText = 'SCA-Certified Baristas';

  const baristasText  = document.createElement('p');
  baristasText.classList.add('text', 'about');
  baristasText.innerText = "Our baristas undergo rigorous training and certification through the Specialty Coffee Association, equipping them with the skills to master every brewing method, from espresso extraction to latte art. Their expertise ensures that each drink is prepared to perfection, elevating your coffee experience.";


  const moreThanH2 = document.createElement('h2');
  moreThanH2.classList.add('hero-text', 'about');
  moreThanH2.innerText = 'More Than Just Coffee';

  const moreThanText  = document.createElement('p');
  moreThanText.classList.add('text', 'about');
  moreThanText.innerText = "Beyond our passion for coffee, we strive to create a welcoming community space where people can connect, work, and relax. Our menu also features a selection of fine teas, artisanal pastries, and carefully curated light bites to complement your coffee experience.";


  const visitUsH2 = document.createElement('h2');
  visitUsH2.classList.add('hero-text', 'about');
  visitUsH2.innerText = 'Visit Us';

  const visitUsText  = document.createElement('p');
  visitUsText.classList.add('text', 'about');
  visitUsText.innerText = "Come and discover what makes Leaf & Bean Coffee Shop a destination for coffee lovers. Whether you're a seasoned connoisseur or just beginning your journey into specialty coffee, we invite you to share a cup with us and experience the artistry behind every brew.";



  contentDiv.appendChild(welcomeH2);
  contentDiv.appendChild(welcomeText);
  contentDiv.appendChild(philosophyH2);
  contentDiv.appendChild(philosophyText);
  contentDiv.appendChild(experienceH2);
  contentDiv.appendChild(experienceText);
  contentDiv.appendChild(baristasH2);
  contentDiv.appendChild(baristasText);
  contentDiv.appendChild(moreThanH2);
  contentDiv.appendChild(moreThanText);
  contentDiv.appendChild(visitUsH2);
  contentDiv.appendChild(visitUsText);
}