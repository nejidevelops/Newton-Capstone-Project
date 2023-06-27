document.addEventListener('DOMContentLoaded', function() {
  const navbarMenus = document.querySelector('.navbar-menus');
  const navbarMobileOpen = document.querySelector('.navbar-mobile-open');
  const navbarMobileClose = document.querySelector('.navbar-mobile-close');

  function toggleNavbarMenus() {
    navbarMenus.classList.toggle('show');
    navbarMobileOpen.classList.toggle('hidden');
    navbarMobileClose.classList.toggle('hidden');
  }

  navbarMobileOpen.addEventListener('click', function() {
    toggleNavbarMenus();
  });

  navbarMobileClose.addEventListener('click', function() {
    toggleNavbarMenus();
  });
});