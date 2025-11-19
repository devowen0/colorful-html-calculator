let display = document.querySelector('.display');
let buttons = Array.from(document.querySelectorAll('.btn'));
let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear');

// Button clicks
buttons.forEach(button => {
    button.addEventListener('click', e => {
        if (button.classList.contains('equal')) return;
        if (button.classList.contains('clear')) return;

        display.value += button.value;
    });
});

// Equal button
equal.addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
});

// Clear button
clear.addEventListener('click', () => {
    display.value = '';
});

// Keyboard input
document.addEventListener('keydown', e => {
    const allowedKeys = '0123456789+-*/.';
    
    if (allowedKeys.includes(e.key)) {
        // Append numbers/operators/decimal
        display.value += e.key;
    } else if (e.key === 'Enter') {
        // Evaluate expression
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
        }
    } else if (e.key === 'Backspace') {
        // Remove last character
        display.value = display.value.slice(0, -1);
    } else if (e.key.toLowerCase() === 'c') {
        // Clear display with C
        display.value = '';
    }
});
