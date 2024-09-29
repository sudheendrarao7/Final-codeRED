const banks = [
    { name: "State Bank of India", url: "https://www.onlinesbi.sbi" },
    { name: "ICICI Bank", url: "https://www.icicibank.com" },
    { name: "HDFC Bank", url: "https://www.hdfcbank.com" },
    { name: "Axis Bank", url: "https://www.axisbank.com" },
    { name: "Punjab National Bank", url: "https://www.pnbindia.in" },
    { name: "Bank of Baroda", url: "https://www.bankofbaroda.in" },
    { name: "Canara Bank", url: "https://www.canarabank.in" },
    { name: "Union Bank of India", url: "https://www.unionbankofindia.co.in" },
    { name: "Bank of India", url: "https://www.bankofindia.co.in" },
    { name: "Kotak Mahindra Bank", url: "https://www.kotak.com" }
];

// Dynamically populate the banks list
const banksList = document.getElementById('banks-list');

banks.forEach(bank => {
    const bankLink = document.createElement('a');
    bankLink.classList.add('bank-link');
    bankLink.href = bank.url;
    bankLink.textContent = bank.name;
    bankLink.target = '_blank'; // Open link in new tab

    banksList.appendChild(bankLink);
});
