// import * as accessibleToggles from './../node_modules/accessible-toggle/dist/accessibleToggle.js';

const isToggable = document.querySelectorAll('.is-toggable');
console.log(isToggable)
/* https://github.com/elivz/accessible-toggle/blob/master/examples/index.html */

isToggable.forEach(item => {

  new accessibleToggle(item, {
    // mediaQuery: '(max-width: 600px)',
    closeOnClickOutside: true,
  });

  item.addEventListener('toggle-show', () => {
    console.log('I am visible now!');
  });
})
