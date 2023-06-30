const speakers = [
  {
    id: 0,
    name: 'Zamzam Hassan',
    image: './images/Zamzam.png',
    details: 'React and Frontend Developer',
    description: 'I have a keen eye for detail and a passion for creating exceptional user experiences, and I\'m committed to delivering high-quality work.',
  },
  {
    id: 1,
    name: 'Donald Brooks',
    image: './images/Donald.jpeg',
    details: 'Cloud Developer',
    description: 'I\'m just scratching the surface i still have a ways to go to get to where i want to be. Will you help me get there?',
  },
  {
    id: 2,
    name: 'Leroy Ombiji',
    image: './images/Leroy.jpeg',
    details: 'Vue Developer',
    description: 'I want to do more, be more, see more, learn more, and know more. I believe my own imagination is the bottleneck for the great things!',
  },
  {
    id: 3,
    name: 'Kelvin Njoro',
    image: './images/Kevin.png',
    details: 'Backend Developer',
    description: 'Experienced Web Designer with a demonstrated history of working in the internet industry. ',
  },
  {
    id: 4,
    name: 'Alvin Ndung\'u',
    image: './images/Alvin.png',
    details: 'Devops Engineer',
    description: 'My specialities include learning new skills and programming languages, problem solving skills.',
  },
  {
    id: 5,
    name: 'Ezra Njeru',
    image: './images/Ezra.png',
    details: 'Javascript Developer',
    description: 'My specialities include learning new skills and programming languages, problem solving skills.',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const navbarMenus = document.querySelector('.navbar-menus');
  const navbarMobileOpen = document.querySelector('.navbar-mobile-open');
  const navbarMobileClose = document.querySelector('.navbar-mobile-close');

  function toggleNavbarMenus() {
    navbarMenus.classList.toggle('show');
    navbarMobileOpen.classList.toggle('hidden');
    navbarMobileClose.classList.toggle('hidden');
  }

  navbarMobileOpen.addEventListener('click', () => {
    toggleNavbarMenus();
  });

  navbarMobileClose.addEventListener('click', () => {
    toggleNavbarMenus();
  });

  const speakersCard = document.getElementById('speaker-cards');
  const seeMoreButton = document.querySelector('.see-more-cards');
  const seeLessButton = document.querySelector('.see-less-cards');

  function showAllCards() {
    const hiddenCards = document.querySelectorAll('.hidden-cards');
    hiddenCards.forEach((card) => {
      card.style.display = 'block';
    });
    seeMoreButton.style.display = 'none';
    seeLessButton.style.display = 'none';
  }

  function handleButtonVisibility() {
    if (window.innerWidth <= 768) {
      seeMoreButton.style.display = 'block';
      seeLessButton.style.display = 'none';
    } else {
      seeMoreButton.style.display = 'none';
      seeLessButton.style.display = 'none';
      showAllCards();
    }
  }

  handleButtonVisibility();

  window.addEventListener('resize', handleButtonVisibility);

  for (let i = 0; i < speakers.length; i += 1) {
    const speakerCard = document.createElement('div');
    speakerCard.classList.add('speaker-card');

    if (i >= 2) {
      speakerCard.classList.add('hidden-cards');
    }

    speakerCard.innerHTML = `
      <div class="speaker-card">
        <div class="speaker-image">
          <img src="${speakers[i].image}" alt='Speaker Image'>
        </div>
        <div class="speaker-details">
          <h3>${speakers[i].name}</h3>
          <span>${speakers[i].details}</span>
          <p>${speakers[i].description}</p>
        </div>
      </div>
    `;

    speakersCard.appendChild(speakerCard);
  }

  seeMoreButton.addEventListener('click', () => {
    const hiddenCards = document.querySelectorAll('.hidden-cards');
    hiddenCards.forEach((card) => {
      card.style.display = 'block';
    });
    seeMoreButton.style.display = 'none';
    seeLessButton.style.display = 'block';
  });

  seeLessButton.addEventListener('click', () => {
    const hiddenCards = document.querySelectorAll('.hidden-cards');
    hiddenCards.forEach((card) => {
      card.style.display = 'none';
    });
    seeMoreButton.style.display = 'block';
    seeLessButton.style.display = 'none';
  });
});
