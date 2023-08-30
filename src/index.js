import logo from './logo.svg';
import './index.css';

const fs = require('fs');
const usersData = require('./users.json');

const registrationForm = document.getElementById('registration-form');
const emailVerificationCodeInput = document.getElementById('email-verification-code');
const mobileVerificationCodeInput = document.getElementById('mobile-verification-code');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('reg-firstname').value;
    const lastName = document.getElementById('reg-lastname').value;
    const email = document.getElementById('reg-email').value;
    const mobile = document.getElementById('reg-mobile').value;
    // ... other registration form data ...

    // Generate random 6-digit verification codes for email and mobile
    const emailVerificationCode = Math.floor(100000 + Math.random() * 900000);
    const mobileVerificationCode = Math.floor(100000 + Math.random() * 900000);

    // Send verification codes to the user's email and mobile (not shown in this example)

    // Add registration data to JSON file
    usersData.users.push({
        firstName,
        lastName,
        email,
        mobile,
        // ... other registration data ...
        emailVerificationCode,
        mobileVerificationCode
    });

    // Update users.json with new data
    fs.writeFileSync('./users.json', JSON.stringify(usersData, null, 2));

    // Show verification code input fields
    emailVerificationCodeInput.style.display = 'block';
    mobileVerificationCodeInput.style.display = 'block';
    alert('Verification codes have been sent to your email and mobile. Please enter them to complete the registration.');
});

emailVerificationCodeInput.addEventListener('input', () => {
    const enteredVerificationCode = emailVerificationCodeInput.value;
    validateVerificationCode(enteredVerificationCode, 'emailVerificationCode');
});

mobileVerificationCodeInput.addEventListener('input', () => {
    const enteredVerificationCode = mobileVerificationCodeInput.value;
    validateVerificationCode(enteredVerificationCode, 'mobileVerificationCode');
});

function validateVerificationCode(enteredCode, storedCodeKey) {
    if (enteredCode.length === 6) {
        const registeredUser = usersData.users.find(user => user.email === email);

        if (registeredUser && parseInt(enteredCode) === registeredUser[storedCodeKey]) {
            // Verification successful
            alert('Verification successful!');
        } else {
            alert('Verification code is incorrect. Please try again.');
        }
    }
}


