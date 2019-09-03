'use strict';

let money,
    start = function() {
        do{
            money = prompt('Ваш месячный доход?', 50000); // Доход в месяц
        }
        while(isNaN(money) || money === '' || money === null);
    };

start();

let appData = {
    budget: money,  // Доход в месяц
    budgetDay: 0,   // Прибыль за день
    budgetMonth: 0, // Прибыль за месяц
    income: {},     // Дополнительные доходы
    addIncome: [],
    expenses: {},   // Дополнительные расходы
    addExpenses: [],
    expensesMonth: 0,
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 3000000,
    period: 12,

    asking: function() {

        if (confirm('Есть ли у вас дополнительный источник заработка?')){
            let itemIncome,
                cashIncome;

            do {
                itemIncome = prompt('Какой у вас дополнительный зароботок?', 'Таксую');
            }
            while(!isNaN(cashIncome) || itemIncome == '' || itemIncome === null);

            do {
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            }     
            while(isNaN(cashIncome) || cashIncome == '' || cashIncome === null);

            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные расходы', 'Еда, Машина, Учеба');
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            // appData.addExpenses = addExpenses[0].toUpperCase() + addExpenses.substr(1);
            appData.deposit = confirm('Есть ли у вас депозит в банке?');

        let itemExpenses,
            cashExpenses;

        for (let i = 0; i < 2; i++) {

            do {
                itemExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Кварплата');
            }
            while(!isNaN(itemExpenses) || itemExpenses == '' || itemExpenses === null);

            do {
                cashExpenses = +prompt('Во сколько это обойдется?', 2500);
            }     
            while(isNaN(cashExpenses) || cashExpenses == '' || cashExpenses === null);

            appData.expenses[itemExpenses] = +cashExpenses;
        }
    },

    // Расходы за месяц
    getExpensesMonth: function() {
        for (let key in appData.expenses) {                 // перебор ключей в объекте
            appData.expensesMonth += appData.expenses[key]; // суммирование и запись
        }
    },
    
    // Чистая прибыль
    getBudget: function() {
        appData.budgetMonth =  appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },

    // Достижение цели
    getTargetMonth: function() {

        let capital =  Math.floor(appData.mission / appData.budgetMonth);

        if (capital > 0) {
            return ('Цель будет достигнута за: ' + capital + ' месяцев!');
        } else {
            return ('Цель не будет достигнута');
        }
    },

    // Уровень дохода
    getStatusIncome: function() {

        if (appData.budgetDay > 800) {
            return ('Высокий уровень дохода');
        } else if (appData.budgetDay > 300 && appData.budgetDay <= 800) {
            return ('Средний уровень дохода');
        } else if (appData.budgetDay > 0 && appData.budgetDay <= 300) {
            return ('Низкий уровень дохода');
        } else {
            return ('Что то пошло не так');
        }
    },

    // Сумма и процент депозита
    getInfoDeposit: function() {
        if(appData.deposit) {
            do {
                appData.percentDeposit = prompt('Какой годовой процент?', '10');
            }     
            while(isNaN(appData.percentDeposit) || appData.percentDeposit == '' || appData.percentDeposit === null);

            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            }     
            while(isNaN(appData.moneyDeposit) || appData.moneyDeposit == '' || appData.moneyDeposit === null);
            
        }
    },
    
    calcSavedMoney: function() {
        return appData.budgetMonth * appData.period;
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();
appData.calcSavedMoney();


console.log('Расходы за месяц: ' + appData.expensesMonth);
console.log(appData.getTargetMonth()); 
console.log(appData.getStatusIncome());
console.log('Дополнительный доход', appData.income);
console.log('Дополнительные расходы: ', appData.addExpenses);

for (let key in appData) {
    console.log('Напи программа включает в себя данные: ' + key);
}