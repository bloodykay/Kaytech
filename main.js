// Select buttons
const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');

// YES Button Click Event
yesButton.addEventListener('click', () => {
    alert('I knew it! ❤️ You’re the best!');
});

// NO Button Hover Event (to make it unclickable)
noButton.addEventListener('mouseover', () => {
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Calculate the maximum X and Y positions to keep the button within the viewport
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    // Generate random positions within the allowable range
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Apply the new position to the button
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});