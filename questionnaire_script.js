function submitForm() {
    event.preventDefault(); // Prevent page reload on form submission

    // Gather input values
    const age = parseInt(document.getElementById("age").value);
    const monthlyIncome = parseInt(document.getElementById("monthlyIncome").value);
    const monthlySavings = parseInt(document.getElementById("monthlySavings").value);
    const investmentAmount = parseInt(document.getElementById("investmentAmount").value);
    const riskComfort = document.querySelector('input[name="riskComfort"]:checked').value;
    const investmentGoal = document.querySelector('input[name="investmentGoal"]:checked').value;

    // Calculate the allocation (simplified logic)
    let equity = 0, mutualFund = 0, fixedDeposit = 0, savingsBond = 0;

    // Simple logic based on risk and goal
    if (investmentGoal === "Aggressive growth" || riskComfort === "Very comfortable") {
        equity = investmentAmount * 0.7;
        mutualFund = investmentAmount * 0.2;
        fixedDeposit = investmentAmount * 0.05;
        savingsBond = investmentAmount * 0.05;
    } else if (investmentGoal === "Balanced growth" || riskComfort === "Somewhat comfortable") {
        equity = investmentAmount * 0.5;
        mutualFund = investmentAmount * 0.3;
        fixedDeposit = investmentAmount * 0.15;
        savingsBond = investmentAmount * 0.05;
    } else {
        equity = investmentAmount * 0.3;
        mutualFund = investmentAmount * 0.4;
        fixedDeposit = investmentAmount * 0.2;
        savingsBond = investmentAmount * 0.1;
    }

    // Display the result
    document.getElementById("equityResult").textContent = `Equity: ${equity}%`;
    document.getElementById("mutualFundResult").textContent = `Mutual Funds: ${mutualFund}%`;
    document.getElementById("fdResult").textContent = `Fixed Deposit: ${fixedDeposit}%`;
    document.getElementById("sbResult").textContent = `Savings Bank: ${savingsBond}%`;

    // Show the result section
    document.getElementById("result").style.display = "block";
}