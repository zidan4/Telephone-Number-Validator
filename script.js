document.addEventListener('DOMContentLoaded', () => {
    const checkBtn = document.getElementById('check-btn');
    const clearBtn = document.getElementById('clear-btn');
    const userInput = document.getElementById('user-input');
    const resultsDiv = document.getElementById('results-div');

    checkBtn.addEventListener('click', () => {
        const input = userInput.value.trim();
        if (!input) {
            alert('Please provide a phone number');
            return;
        }

        const isValid = validatePhoneNumber(input);
        const resultClass = isValid ? 'valid' : 'invalid';
        const resultText = `${isValid ? 'Valid' : 'Invalid'} US number: ${input}`;
        
        resultsDiv.innerHTML = `<span class="${resultClass}">${resultText}</span>`;
    });

    clearBtn.addEventListener('click', () => {
        userInput.value = '';
        resultsDiv.textContent = '';
    });
});

function validatePhoneNumber(input) {
    const cleaned = input.replace(/\D/g, '');
    
    // Check length and country code
    const validLength = cleaned.length === 10 || (cleaned.length === 11 && cleaned.startsWith('1'));
    if (!validLength) return false;

    // Check phone number pattern
    const regex = /^(1[- ]?)?(\(\d{3}\)|\d{3})([- ]?)\d{3}([- ]?)\d{4}$/;
    return regex.test(input);
}
