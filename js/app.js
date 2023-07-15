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

// Add class 'active' to section and navigation element when in viewport
function setActiveSection() {
  const viewportHeight = window.innerHeight;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top;

    if (sectionTop >= 0 && sectionTop <= viewportHeight) {
      section.classList.add('your-active-class');
    } else {
      section.classList.remove('your-active-class');
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
