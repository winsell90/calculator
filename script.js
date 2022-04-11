let container = document.querySelector('.container');
let display = document.querySelector('#display');
let buttons = document.querySelectorAll('button');

display.textContent = '0';
let zero = document.getElementById('zero')
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let add = document.getElementById('add');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let decimal = document.getElementById('decimal');
let equal = document.getElementById('equal');
let clear = document.getElementById('clearbtn');
let back = document.getElementById('backbtn');

function equals() {
  a = display.textContent;
}

back.addEventListener('click', () => {
  if (display.textContent.length <= 1) {
    display.textContent = '0';
  } else {
 display.textContent = display.textContent.slice(0, -1);
  }
});
equal.addEventListener('click', () => {
  if (display.textContent === '0') {
    display.textContent = 'ERROR';
  } else {
     equals()
  }
})
clear.addEventListener('click', () => {
  display.textContent = 0;
})
add.addEventListener('click', () => {
  if (display.textContent === '0') {
    display.textContent = 'ERROR';
  } else {
     display.textContent += ' + ';
  }
})
minus.addEventListener('click', () => {
  if (display.textContent === '0') {
    display.textContent = 'ERROR';
  } else {
     display.textContent += ' - ';
  }
})
multiply.addEventListener('click', () => {
  if (display.textContent === '0') {
    display.textContent = 'ERROR';
  } else {
     display.textContent += ' * ';
  }
})
divide.addEventListener('click', () => {
  if (display.textContent === '0') {
    display.textContent = 'ERROR';
  } else {
     display.textContent += ' / ';
  }
})
decimal.addEventListener('click', () => {
  if (display.textContent === '0') {
    display.textContent = '.';
  } else { display.textContent += '.';
  }
})
zero.addEventListener('click', () => {
  if (display.textContent === '0') {
    display.textContent = '0';
  } else { display.textContent += '0';
  }
})
one.addEventListener('click', () => {
  if (display.textContent === '0') {
    display.textContent = '1';
  } else { display.textContent += '1';
  }
})
two.addEventListener('click', () => {
  if (display.textContent === '0') {
    display.textContent = '2';
  } else { display.textContent += '2';
  }
})
three.addEventListener('click', () => {
  if (display.textContent === '0') {
    display.textContent = '3';
  } else { display.textContent += '3';
  }
})
four.addEventListener('click', () => {
  if (display.textContent === '0') {
    display.textContent = '4';
  } else { display.textContent += '4';
  }
})
five.addEventListener('click', () => {
  if (display.textContent === '0') {
    display.textContent = '5';
  } else { display.textContent += '5';
  }
})
six.addEventListener('click', () => {
  if (display.textContent === '0') {
    display.textContent = '6';
  } else { display.textContent += '6';
  }
})
seven.addEventListener('click', () => {
  if (display.textContent === '0') {
    display.textContent = '7';
  } else { display.textContent += '7';
  }
})
eight.addEventListener('click', () => {
  if (display.textContent === '0') {
    display.textContent = '8';
  } else { display.textContent += '8';
  }
})
nine.addEventListener('click', () => {
  if (display.textContent === '0') {
    display.textContent = '9';
  } else { display.textContent += '9';
  }
})


