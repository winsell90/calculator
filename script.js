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
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
counter = 0;

function equals() {
switch (c) {
  case '+':
    display.textContent = (+a + +b);
    d = 1;
    break;
  case '-':
    display.textContent = (+a - +b);
    d = 1;
    break;
  case '*':
    display.textContent = (+a * +b);
    d = 1;
    break;
  case '/':
    display.textContent = (+a / +b);
    d = 1;
    break;
  case 0:
    equals2();
    break;
}
b = 0;
a = display.textContent;
c = 0;
}

function equals2() {
  switch (e) {
    case '+':
      display.textContent = (+a + +b);
      e = 0;
      break;
    case '-':
      display.textContent = (+a - +b);
      e = 0;
      break;
    case '*':
      display.textContent = (+a * +b);
      e = 0;
      break;
    case '/':
      display.textContent = (+a / +b);
      e = 0;
      break;
    case 0:
      display.textContent = 'ERROR';
      break;
  }
  b = 0;
  a = display.textContent;
  c = 0;
  }

function color() {
  if ((a != 0) && (display.textContent = '0'))
display.style.color = '#bcb7b7';
else {
  display.style.color = 'black';
}
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
  } else if (d = 1) {
     b = display.textContent;
     equals()
     b = 0;
     c = 0;
     a = display.textContent;
  }
})
clear.addEventListener('click', () => {
  display.textContent = 0;
  a = 0;
  b = 0;
  c = 0;
  d = 0;
  e = 0;
  counter = 0;
})
add.addEventListener('click', () => {
  if (a == 0) {
  a = display.textContent;
  c = '+';
  display.textContent = 0;
  color();
} else if ((a != 0) && (c == '+')) {
  b = display.textContent;
  equals();
  a = display.textContent;
  c = '+';
 } else if ((a != 0) && (c == '*')) {
   b = display.textContent;
   equals();
   a = display.textContent;
   c = '+';
 } else if ((a != 0) && (c == '/')) {
   b = display.textContent;
   equals();
   a = display.textContent;
   c = '+';
 } else if ((a != 0) && (c == '-')) {
   b = display.textContent;
   equals();
   a = display.textContent;
   c = '+';
  } else if ((a != 0) && (e == 0)){
    b = display.textContent;
    c = '+';
    e = '+';
    equals();
} else {
  b = display.textContent;
  equals2();
  e = 0;
}
})
minus.addEventListener('click', () => {
  if (a == 0) {
    a = display.textContent;
    c = '-';
    display.textContent = 0;
    color();
  } else if ((a != 0) && (c == '+')) {
   b = display.textContent;
   equals();
   a = display.textContent;
   c = '-';
  } else if ((a != 0) && (c == '*')) {
    b = display.textContent;
    equals();
    a = display.textContent;
    c = '-';
  } else if ((a != 0) && (c == '/')) {
    b = display.textContent;
    equals();
    a = display.textContent;
    c = '-';
  } else if ((a != 0) && (c == '-')) {
    b = display.textContent;
    equals();
    a = display.textContent;
    c = '-';
    } else if ((a != 0) && (e == 0)){
      b = display.textContent;
      c = '-';
      e = '-';
      equals();
  } else {
    b = display.textContent;
    equals2();
    e = 0;
  }
  })
multiply.addEventListener('click', () => {
  if (a == 0) {
    a = display.textContent;
    c = '*';
    display.textContent = 0;
    color();
  } else if ((a != 0) && (c == '+')) {
    b = display.textContent;
    equals();
    a = display.textContent;
    c = '*';
   } else if ((a != 0) && (c == '*')) {
     b = display.textContent;
     equals();
     a = display.textContent;
     c = '*';
   } else if ((a != 0) && (c == '/')) {
     b = display.textContent;
     equals();
     a = display.textContent;
     c = '*';
   } else if ((a != 0) && (c == '-')) {
     b = display.textContent;
     equals();
     a = display.textContent;
     c = '*';
    } else if ((a != 0) && (e == 0)){
      b = display.textContent;
      c = '*';
      e = '*';
      equals();
  } else {
    b = display.textContent;
    equals2();
    e = 0;
  }
  })
divide.addEventListener('click', () => {
  if (a == 0) {
    a = display.textContent;
    c = '/';
    display.textContent = 0;
    color();
  } else if ((a != 0) && (c == '+')) {
    b = display.textContent;
    equals();
    a = display.textContent;
    c = '/';
   } else if ((a != 0) && (c == '*')) {
     b = display.textContent;
     equals();
     a = display.textContent;
     c = '/';
   } else if ((a != 0) && (c == '/')) {
     b = display.textContent;
     equals();
     a = display.textContent;
     c = '/';
   } else if ((a != 0) && (c == '-')) {
     b = display.textContent;
     equals();
     a = display.textContent;
     c = '/';
    } else if ((a != 0) && (e == 0)){
      b = display.textContent;
      c = '/';
      e = '/';
      equals();
  } else {
    b = display.textContent;
    equals2();
    e = 0;
  }
  })
decimal.addEventListener('click', () => {
  display.style.color = 'black';
  if (display.textContent === '0') {
    display.textContent = '.';
  } else if (d == 1) { 
    d = 0;
    display.textContent = '.';
  } else {
    display.textContent += '.';
  }
})
zero.addEventListener('click', () => {
  display.style.color = 'black';
  if (display.textContent === '0') {
    display.textContent = '0';
  } else if (d == 1) { 
    d = 0;
    display.textContent = '0';
  } else {
    display.textContent += '0';
  }
})
one.addEventListener('click', () => {
  display.style.color = 'black';
  if ((b == 0) && (c == 0) && (d == 0) && display.textContent != '0' && counter > 0) {
    a = display.textContent;
    display.textContent = '';
    display.textContent += '1';
    counter++;
  } else if (display.textContent === '0') {
    display.textContent = '1';
  } else if (d == 1) { 
    d = 0;
    display.textContent = '1';
  } else {
    display.textContent += '1';
  }
})
two.addEventListener('click', () => {
  display.style.color = 'black'; 
  if ((b == 0) && (c == 0) && (d == 0) && display.textContent != '0' && counter > 0) {
    a = display.textContent;
    display.textContent = ''
    display.textContent += '2';
    counter++;
  } else if (display.textContent === '0') {
    display.textContent = '2';
  } else if (d == 1) { 
    d = 0;
    display.textContent = '2';
  } else {
    display.textContent += '2';
  }
})
three.addEventListener('click', () => {
  display.style.color = 'black';
  if ((b == 0) && (c == 0) && (d == 0) && display.textContent != '0' && counter > 0) {
    a = display.textContent;
    display.textContent = ''
    display.textContent += '3';
    counter++;
  } else if (display.textContent === '0') {
    display.textContent = '3';
  } else if (d == 1) { 
    d = 0;
    display.textContent = '3';
  } else {
    display.textContent += '3';
  }
})
four.addEventListener('click', () => {
  display.style.color = 'black';
  if ((b == 0) && (c == 0) && (d == 0) && display.textContent != '0' && counter > 0) {
    a = display.textContent;
    display.textContent = ''
    display.textContent += '4';
    counter++;
  } else if (display.textContent === '0') {
    display.textContent = '4';
  } else if (d == 1) { 
    d = 0;
    display.textContent = '4';
  } else {
    display.textContent += '4';
  }
})
five.addEventListener('click', () => {
  display.style.color = 'black';
  if ((b == 0) && (c == 0) && (d == 0) && display.textContent != '0' && counter > 0) {
    a = display.textContent;
    display.textContent = '';
    display.textContent += '5';
    counter++;
  } else if (display.textContent === '0') {
    display.textContent = '5';
  } else if (d == 1) { 
    d = 0;
    display.textContent = '5';
  } else {
    display.textContent += '5';
  }
})
six.addEventListener('click', () => {
  display.style.color = 'black';
  if ((b == 0) && (c == 0) && (d == 0) && display.textContent != '0' && counter > 0) {
    a = display.textContent;
    display.textContent = '';
    display.textContent += '6';
    counter++;
  } else if (display.textContent === '0') {
    display.textContent = '6';
  } else if (d == 1) { 
    d = 0;
    display.textContent = '6';
  } else {
    display.textContent += '6';
  }
})
seven.addEventListener('click', () => {
  display.style.color = 'black';
  if ((b == 0) && (c == 0) && (d == 0) && display.textContent != '0' && counter > 0) {
    a = display.textContent;
    display.textContent = ''
    display.textContent += '7';
    counter++;
  } else if (display.textContent === '0') {
    display.textContent = '7';
  } else if (d == 1) { 
    d = 0;
    display.textContent = '7';
  } else {
    display.textContent += '7';
  }
})
eight.addEventListener('click', () => {
  display.style.color = 'black';
  if ((b == 0) && (c == 0) && (d == 0) && display.textContent != '0' && counter > 0) {
    a = display.textContent;
    display.textContent = ''
    display.textContent += '8';
    counter++;
  } else if (display.textContent === '0') {
    display.textContent = '8';
  } else if (d == 1) { 
    d = 0;
    display.textContent = '8';
  } else {
    display.textContent += '8';
  }
})
nine.addEventListener('click', () => {
  display.style.color = 'black';
  if ((b == 0) && (c == 0) && (d == 0) && display.textContent != '0' && counter > 0) {
    a = display.textContent;
    display.textContent = ''
    display.textContent += '9';
    counter++;
  } else if (display.textContent === '0') {
    display.textContent = '9';
  } else if (d == 1) { 
    d = 0;
    display.textContent = '9';
  } else {
    display.textContent += '9';
  }
})