/*

1) Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money

2) Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую” сохранить в переменную addExpenses, вывести в консоль в виде массива

3) Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булевое значение true/false)

4) Вывести в консоль типы данных money, income, deposit







7) Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission, вывести в консоль, округляя в большую сторону

8) Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. Вывести в консоль  округлив в меньшую сторону (методы объекта Math в помощь)

9) Написать конструкцию условий
1.	Если budgetDay больше 800, то “Высокий уровень дохода”
2.	Если budgetDay больше 300 и меньше 800, то сообщение “Средний уровень дохода”
3.	Если budgetDay больше 0 и меньше 300 то в консоль вывести сообщение “Низкий уровень дохода”
4.	Если отрицательное значение то вывести “Что то пошло не так”
5.	учесть варианты 0, 300 и 800

10) Проверить, чтобы все работало без ошибок в консоли

11) Добавить папку с третьим уроком в свой репозиторий на GitHub
*/
`use strict`
let question = +prompt(`Ваш месячный доход?`)
let money = question
console.log(money)
console.log(typeof money)

let income = `30000`
console.log(typeof income)
console.log(income.length)

let question2 = prompt(`Перечислите возможные расходы за рассчитываемый период через запятую`)
let addExpenses = question2 //`500, 12000, 200000, И еще`
    //сonsole.log(addExpenses.toLowerCase())
console.log(addExpenses.split(`,`))

let question3 = confirm(`Есть ли у вас депозит в банке`)
let deposit = question3 //1000<5000
console.log(deposit)
console.log(typeof deposit)



/*5) Спросить у пользователя по 2 раза каждый вопрос и записать ответы в переменные
1.	“Какие обязательные ежемесячные расходы у вас есть?”
2.	“Во сколько это обойдется?”
в итоге 4 вопроса и 4 переменных*/

let question4 = prompt(`Какие обязательные ежемесячные расходы у вас есть?`)
let monthlyExpense1 = question4
console.log(monthlyExpense1)

let question5 = +prompt(`Во сколько это обойдется?`)
let amountOfExpenses1 = question5
console.log(amountOfExpenses1)

let question6 = prompt(`Какие обязательные ежемесячные расходы у вас есть?`)
let monthlyExpense2 = question6
console.log(monthlyExpense2)

let question7 = +prompt(`Какие обязательные ежемесячные расходы у вас есть?`)
let amountOfExpenses2 = question7
console.log(amountOfExpenses2)

//6) Вычислить доход за месяц, учитывая обязательные расходы, сохранить в переменную budgetMonth и вывести результат в консоль
let budgetMonth = (money - amountOfExpenses1 - amountOfExpenses2)
console.log(budgetMonth)

//7) Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission, вывести в консоль, округляя в большую сторону
//++    parseInt

let mission = 100000
console.log(mission)

let period = (100000/budgetMonth)
console.log(parseInt(++period))






// 8) Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. Вывести в консоль  округлив в меньшую сторону (методы объекта Math в помощь)

let budgetDay = (budgetMonth / 30)
console.log(parseInt(budgetDay))

// 9) Написать конструкцию условий
// 1.	Если budgetDay больше 800, то “Высокий уровень дохода”
// 2.	Если budgetDay больше 300 и меньше 800, то сообщение “Средний уровень дохода”
// 3.	Если budgetDay больше 0 и меньше 300 то в консоль вывести сообщение “Низкий уровень дохода”
// 4.	Если отрицательное значение то вывести “Что то пошло не так”
// 5.	учесть варианты 0, 300 и 800

let n = parseInt(budgetDay)
switch (n) {
    case (n > 800):
        console.log(`Высокий уровень дохода`)
        break
    case (800 > n > 300):
        console.log(`Средний уровень дохода`)
        break
    case (300 > n > 0):
        console.log(`Низкий уровень дохода`)
        break
    default:
        console.log(`Что то пошло не так`)
}
