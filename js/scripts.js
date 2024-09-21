


// Total Expenses and balance ber korar jonno calculate kora
document.getElementById('calculate').addEventListener('click', function(event) {
    event.preventDefault();

    // for input value
    const incomeValue = inputValueId('income');
    const softwareValue = inputValueId('software');
    const courseValue = inputValueId('courses');
    const internetValue = inputValueId('internet');


    const totalExpenses = softwareValue + courseValue + internetValue;
    const balance = incomeValue - totalExpenses;
    
    document.getElementById('total-expenses').innerText = totalExpenses.toFixed(2);
    document.getElementById('balance').innerText = balance.toFixed(2);

    document.getElementById('results').classList.remove('hidden');

});


// Savings and Remaining balance ber korar jonno
document.getElementById('calculate-savings').addEventListener('click', function() {

    console.log('calculate-savings button clicked')
    // for input value
    const incomeValue = inputValueId('income');
    const softwareValue = inputValueId('software');
    const courseValue = inputValueId('courses');
    const internetValue = inputValueId('internet');
    const savingsValue = inputValueId('savings');

    const totalExpenses = softwareValue + courseValue + internetValue;
    const balance = incomeValue - totalExpenses;

    const savingsAmount = (balance * savingsValue) / 100;
    const remainingBalance = balance - savingsAmount;

    document.getElementById('savings-amount').innerText = savingsAmount.toFixed(2);
    document.getElementById('remaining-balance').innerText = remainingBalance.toFixed(2);


    const div = document.createElement('div');
    div.innerHTML = `
        <div id="history-list" class="grid grid-cols-2 gap-3"><div class="bg-white p-3 rounded-md shadow-sm border-l-2 border-indigo-500">
            <p class="text-xs text-gray-500">9/21/2024</p>
            <p class="text-sm font-bold text-gray-800">Income: ${incomeValue}</p>
            <p class="text-xs text-gray-600">Expenses: ${totalExpenses}</p>
            <p class="text-xs text-gray-600">Balance: ${balance}</p>
        </div>
    `
    document.getElementById('history-section').appendChild(div);

});



// click history button 
document.getElementById('history-button').addEventListener('click', function() {

    this.classList.add('text-white', 'bg-blue-700');

    const assistanceButton = document.getElementById('assistance-button');
    assistanceButton.classList.remove('text-white', 'bg-blue-700');

    const calculateForm = document.getElementById('calculate-form');
    calculateForm.classList.add('hidden');

    const historySection = document.getElementById('history-section');
    historySection.classList.remove('hidden');
    
});

// click assistance button 
document.getElementById('assistance-button').addEventListener('click', function() {

    this.classList.add('text-white', 'bg-blue-700');

    const historyButton = document.getElementById('history-button');
    historyButton.classList.remove('text-white', 'bg-blue-700');

    const calculateForm = document.getElementById('calculate-form');
    calculateForm.classList.remove('hidden');

    const historySection = document.getElementById('history-section');
    historySection.classList.add('hidden');

});