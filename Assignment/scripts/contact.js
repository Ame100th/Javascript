// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
// Select the submit button and the main content area of the contact page
const submitButton = document.getElementById('submit-button');
const contactPage = document.querySelector('.contact');

// Add an event listener to the submit button
submitButton.addEventListener('click', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Clear the contents of the contact page
    contactPage.innerHTML = '';

    // Create a new <p> element
    const thankYouMessage = document.createElement('p');

    // Set the text of the <p> element
    thankYouMessage.textContent = 'Thank you for your message';

    // Set the font size of the <p> element to 24px
    thankYouMessage.style.fontSize = '24px';

    // Append the <p> element to the contact page
    contactPage.appendChild(thankYouMessage);
});

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

