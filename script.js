// This is script.js - our external JavaScript file

// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Finnaly you clicked it');
    
    // Get the button element
    const button = document.querySelector('.my-button');
    const heading = document.querySelector('h1');
    const container = document.querySelector('.container');
    
    // Add click event to the button
    button.addEventListener('click', function() {
        alert('Finnaly you clicked it');
        heading.textContent = 'Now you are in FUTERISO team !';
        heading.style.color = '#00a0b5ff';
    });
    
    // Add hover effect using JavaScript
    container.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
    });
    
    container.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
// Add color-changing functionality
const colors = ['#ffd56bff', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
let colorIndex = 0;

document.querySelector('.my-button').addEventListener('click', function() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});
// Add typing animation
const originalText = "Welcome to Our Website!";
let currentText = "";
let charIndex = 0;

function typeWriter() {
    if (charIndex < originalText.length) {
        currentText += originalText.charAt(charIndex);
        document.querySelector('h1').textContent = currentText;
        charIndex++;
        setTimeout(typeWriter, 100);
    }
}

// Start animation when page loads
typeWriter();
// Enhanced counter
let count = 0;
const countElement = document.getElementById('count');

document.getElementById('increaseBtn').addEventListener('click', function() {
    count++;
    updateCount();
});

document.getElementById('decreaseBtn').addEventListener('click', function() {
    count--;
    updateCount();
});

document.getElementById('resetBtn').addEventListener('click', function() {
    count = 0;
    updateCount();
});

function updateCount() {
    countElement.textContent = count;
    
    // Change color based on count
    if (count > 0) {
        countElement.style.color = 'green';
    } else if (count < 0) {
        countElement.style.color = 'red';
    } else {
        countElement.style.color = 'black';
    }
}