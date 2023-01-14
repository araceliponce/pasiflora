// import * as accessibleToggles from './../node_modules/accessible-toggle/dist/accessibleToggle.js';

import * as accessibleToggles from 'https://github.com/elivz/accessible-toggle/blob/master/dist/accessibleToggle.min.js';

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
