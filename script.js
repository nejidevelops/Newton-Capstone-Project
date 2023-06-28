const speakers = [
  {
    id: 0,
    name: 'Zamzam Hassan',
    image: '',
    details: 'React and Frontend Developer',
    description: 'I have a keen eye for detail and a passion for creating exceptional user experiences, and I\'m committed to delivering high-quality work that exceeds expectations.',
  },
  {
    id: 1,
    name: 'Donald Brooks',
    image: '',
    details: 'Cloud Developer',
    description: 'I\'m just scratching the surface i still have a ways to go to get to where i want to be. Will you help me get there?',
  },
  {
    id: 2,
    name: 'Leroy Ombiji',
    image: '',
    details: 'Vue Developer',
    description: 'My focus is on delivering robust, scalable applications that provide an exceptional user experience. More than anything I want to do more, be more, see more, learn more, and know more. I believe my own imagination is the bottleneck for the great things I can achieve!',
  },
  {
    id: 3,
    name: 'Kelvin Njoro',
    image: '',
    details: 'Backend Developer',
    description: 'Experienced Web Designer with a demonstrated history of working in the internet industry. ',
  },
  {
    id: 4,
    name: 'Alvin Ndung\'u',
    image: '',
    details: 'Devops Engineer',
    description: 'My specialities include learning new skills and programming languages, problem solving skills.',
  },
  // {
  //   id: 5,
  //   name: 'Ezra Njeru',
  //   image: '',
  //   details: 'Javascript Developer',
  //   description: 'Ever determined ever focused',
  // },
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

  for (let i = 0; i < speakers.length; i += 1) {
    const speakerCard = document.createElement('div');
    speakerCard.classList.add('speaker-card');

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
});
