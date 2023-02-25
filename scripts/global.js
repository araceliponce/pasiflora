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


/* for the decrease and increase of input number on plant card */

decreaseNumberBtns = document.querySelectorAll('.decrease-number-btn');
increaseNumberBtns = document.querySelectorAll('.increase-number-btn');

increaseNumberBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('+')
    let numberValue = btn.parentElement.querySelector('.number').value;

    /* si tiene letras o signos no numericos, pasa a valer 0 */
    numberValue = isNaN(numberValue) ? 0 : numberValue;

    numberValue++;

    btn.parentElement.querySelector('.number').value = numberValue;

  })
});

decreaseNumberBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('-')
    let numberValue = btn.parentElement.querySelector('.number').value;

    /* si tiene letras o signos no numericos, pasa a valer 0 */
    numberValue = isNaN(numberValue) ? 0 : numberValue;
    numberValue < 1 ? numberValue = 1 : '';


    numberValue--;

    btn.parentElement.querySelector('.number').value = numberValue;

  })
});
