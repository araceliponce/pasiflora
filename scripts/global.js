import * as accessibleToggles from './../node_modules/accessible-toggle/dist/accessibleToggle.js';

const toggleContent = document.querySelectorAll('.toggle-content');
console.log(toggleContent)
/* https://github.com/elivz/accessible-toggle/blob/master/examples/index.html */

toggleContent.forEach(item => {

  new accessibleToggle(item, {
    // mediaQuery: '(max-width: 600px)',
    closeOnClickOutside: true,
  });

  item.addEventListener('toggle-show', () => {
    console.log('I am visible now!');
  });
})
