import logo from './logo.svg';
import './index.css';


document.addEventListener('DOMContentLoaded', () => {
    const verificationForm = document.getElementById('verification-form');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const verificationCodeInput = document.getElementById('verification-code');
    const verificationStatus = document.getElementById('verification-status');
    
    // Function to send a verification code (simulated)
    function sendVerificationCode(type, destination) {
        const code = generateVerificationCode();
        alert(`Sending ${type} verification code: ${code} to ${destination}`);
    }
    
    // Function to generate a random 6-digit code
    function generateVerificationCode() {
        return Math.floor(100000 + Math.random() * 900000);
    }
    
    document.getElementById('send-email-code').addEventListener('click', () => {
        const email = emailInput.value;
        if (email) {
            sendVerificationCode('email', email);
        }
    });
    
    document.getElementById('send-phone-code').addEventListener('click', () => {
        const phone = phoneInput.value;
        if (phone) {
            sendVerificationCode('phone', phone);
        }
    });
    
    verificationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const enteredCode = verificationCodeInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        
        // Here, send the entered code to backend for verification.
        // example, simulate a successful verification.
        const simulatedVerificationCode = '123456'; // Simulated correct code
        
        if (enteredCode === simulatedVerificationCode) {
            verificationStatus.textContent = 'Verification successful!';
        } else {
            verificationStatus.textContent = 'Verification code is incorrect. Please try again.';
        }
    });
});