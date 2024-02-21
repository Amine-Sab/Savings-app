document.getElementById("Page1").addEventListener("click", function() {
    window.location.href = "Page1.html"; 
});
document.getElementById("Page2").addEventListener("click", function() {
    window.location.href = "Page2.html"; 
});
document.getElementById("Page3").addEventListener("click", function() {
    window.location.href = "Page3.html";
});


// Page 1
function calculateSavings() {
    let age = parseInt(document.getElementById('age').value);
    let retirementAge = parseInt(document.getElementById('retirementAge').value);
    let salary = parseInt(document.getElementById('salary').value);
    let savingsPercentage = parseFloat(document.getElementById('savingsPercentage').value);
    let raisePercentage = parseFloat(document.getElementById('raisePercentage').value);

    if (age < 0 || retirementAge < 0 || salary < 0 || savingsPercentage < 0 || savingsPercentage > 100 || raisePercentage < 0 || raisePercentage > 100) {
        alert("Please enter valid values.");
        return;
    }

    if (age >= retirementAge) {
        alert("Age must be less than retirement age.");
        return;
    }

    let totalSavings = 0;

    for (let i = age; i < retirementAge; i++) {
        let savings = salary * (savingsPercentage / 100);
        totalSavings += savings;
        salary *= (1 + (raisePercentage / 100));
    }

    document.getElementById('result').innerHTML = "Total Savings at Retirement: Dh " + totalSavings.toFixed(2);
}

function clearForm1() {
    document.getElementById('age').value = '';
    document.getElementById('retirementAge').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('savingsPercentage').value = '';
    document.getElementById('raisePercentage').value = '';
    document.getElementById('result').innerHTML = '';
}


// page 2
function calculateYears() {
    let age = parseInt(document.getElementById('age').value);
    let salary = parseFloat(document.getElementById('salary').value);
    let desiredAmount = parseFloat(document.getElementById('desiredAmount').value);
    let savingPercentage = parseFloat(document.getElementById('savingPercentage').value);
    let raisePercentage = parseFloat(document.getElementById('raisePercentage').value);

    if (isNaN(age) || isNaN(salary) || isNaN(desiredAmount) || isNaN(savingPercentage) || isNaN(raisePercentage) || age <= 0 || salary <= 0 || desiredAmount <= 0 || savingPercentage < 0 || savingPercentage > 100 || raisePercentage < 0 || raisePercentage > 100) {
        document.getElementById('result').innerHTML = "Please enter valid values.";
        return;
    }

    let savings = 0;
    let years = 0;

    while (savings < desiredAmount) {
        if (years === 0) {
        
        } else {
            salary *= (1 + (raisePercentage / 100));
        }
        savings += (salary * (savingPercentage / 100));
        years++;
    }

    document.getElementById('result').innerHTML = "You need " + years + " years to save Dh " + desiredAmount.toFixed(2);
}

function clearForm2() {
    document.getElementById('age').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('desiredAmount').value = '';
    document.getElementById('savingPercentage').value = '';
    document.getElementById('raisePercentage').value = '';
    document.getElementById('result').innerHTML = '';
}

// Page 3

function calculateYearsToGoodLiving() {
    let savedAmount = parseFloat(document.getElementById('savedAmount').value);
    let goodLivingSalary = parseFloat(document.getElementById('goodLivingSalary').value);

    if (isNaN(savedAmount) || isNaN(goodLivingSalary) || savedAmount <= 0 || goodLivingSalary <= 0) {
        document.getElementById('result').innerHTML = "Please enter valid values.";
        return;
    }

    let yearlyExpenses = goodLivingSalary * 12; // Assuming monthly salary for simplicity
    let years = savedAmount / yearlyExpenses;

    document.getElementById('result').innerHTML = "You can assure a good living for " + years.toFixed(2) + " years with the saved amount.";
}

function clearForm3() {
    document.getElementById('savedAmount').value = '';
    document.getElementById('goodLivingSalary').value = '';
    document.getElementById('result').innerHTML = '';
}