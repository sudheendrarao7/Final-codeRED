const adminCredentials = {
    username: 'root@1234',
    password: 'admin@1234'
};

const customerCredentials = {
    username: 'tester@123',
    password: 'synchrony'
};

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        window.location.href = 'dashboard.html';
        sessionStorage.setItem('userType', 'admin');
    } else if (username === customerCredentials.username && password === customerCredentials.password) {
        window.location.href = 'dash_index.html';
        sessionStorage.setItem('userType', 'customer');
    } else {
        const encryptedPassword = await encryptPassword(password);
        validateCustomerLogin(username, encryptedPassword);
    }
});

function validateCustomerLogin(username, encryptedPassword) {
    if (username === customerCredentials.username && encryptedPassword === 'mockEncryptedPassword') {
        window.location.href = 'dash_index.html';
        sessionStorage.setItem('userType', 'customer');
    } else {
        document.getElementById('login-error').textContent = 'Incorrect username or password';
    }
}

async function encryptPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return hex(hash);
}

function hex(buffer) {
    return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
}

window.addEventListener('DOMContentLoaded', () => {
    const userType = sessionStorage.getItem('userType');
    if (userType === 'admin') {
        document.getElementById('dashboard-heading').textContent = 'Admin Dashboard';
        document.getElementById('dashboard-message').textContent = 'Welcome, admin!';
    } else if (userType === 'customer') {
        document.getElementById('dashboard-heading').textContent = 'Customer Dashboard';
        document.getElementById('dashboard-message').textContent = 'Welcome, customer!';
    }
});
