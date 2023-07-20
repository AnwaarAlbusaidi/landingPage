// Define Global Variables
const sections = document.querySelectorAll('section');
const navList = document.querySelector('#navbar__list');

// Build the navigation
function buildNav() {
  const navItems = Array.from(sections).map(section => {
    const sectionId = section.id;
    const sectionName = section.getAttribute('data-nav');

    return `<li><a href="#${sectionId}">${sectionName}</a></li>`;
  });

  navList.innerHTML = navItems.join('');
}

// Add class 'active' to section when near top of viewport
function setActiveSection() {
  const scrollPosition = window.scrollY;

  sections.forEach(section => {
    const sectionOffset = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.id;
    const navItem = document.querySelector(`a[href="#${sectionId}"]`);

    if (scrollPosition >= sectionOffset - sectionHeight * 0.5 && scrollPosition < sectionOffset + sectionHeight * 0.5) {
      section.classList.add('your-active-class');
      navItem.classList.add('active');
    } else {
      section.classList.remove('your-active-class');
      navItem.classList.remove('active');
    }
  });
}

// Scroll to anchor ID using scrollTO event
function scrollToSection(event) {
  event.preventDefault();
  const targetSectionId = event.target.getAttribute('href').slice(1);
  const targetSection = document.getElementById(targetSectionId);

  targetSection.scrollIntoView({ behavior: 'smooth' });
}

// Build menu
document.addEventListener('DOMContentLoaded', buildNav);

// Scroll to section on link click
navList.addEventListener('click', scrollToSection);

// Set sections as active
window.addEventListener('scroll', setActiveSection);
