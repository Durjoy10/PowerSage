const dayInput = document.getElementById('dayInput');
const checkButton = document.getElementById('checkButton');

const outputModalTemplate = document.getElementById('outputModalTemplate');
const outputModalContent = outputModalTemplate.content.cloneNode(true);

document.body.appendChild(outputModalContent);

const outputDayElement = document.querySelector('#outputDay');
const outputMessageElement = document.querySelector('#outputMessage');
const closeButton = document.querySelector('#closeButton'); // Get the close button

const modal = document.querySelector('.modal');

checkButton.addEventListener('click', () => {
    const day = parseInt(dayInput.value);
    let output;

    switch (day) {
        case 24:
            output = '13600 MegaWatts';
            break;
        case 25:
            output = '13000 MegaWatts';
            break;
        case 26:
            output = '14000 MegaWatts';
            break;
        case 27:
            output = '14233 MegaWatts';
            break;
        default:
            output = '<span class="text-red-500">Invalid Day. Please enter a number between 24 and 27.</span>';
    }

    outputDayElement.textContent = day;
    outputMessageElement.innerHTML = output;

    // Show modal
    modal.classList.add('modal-open');
    document.body.classList.add('modal-open'); // Optional: Add class to blur background or prevent scroll
});

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.classList.remove('modal-open');
    document.body.classList.remove('modal-open'); // Optional: Remove class to unblur background or allow scroll
});
