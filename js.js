let result = 0;

const correctAnswer = 10;

let sumNumber, sunRise, splitNumber, skyColour, importantQuestion; 


const test = confirm('Розпочнемо тест?');
if (test == true) {
    alert('Розпочинаймо! \u{1F973}');
    sumNumber = prompt('Скільки буде 2+2?');
    if (sumNumber == 4) {
        alert('Чудово! \u{1F929}');
        result += correctAnswer;
        alert(result + ' - твій рахунок');
    } else if (sumNumber == null) {
        alert('Упс \u{1F974}');
        result += 0;
        alert(result + ' - твій рахунок');
    }
    sunRise = prompt('Сонце встає на сході?');
    if (sunRise == 'так') {
        alert('Чудово! \u{1F929}');
        result += correctAnswer;
        alert(result + ' - твій рахунок');
    } else if (sunRise == null) {
        alert('Упс \u{1F974}');
        result += 0;
        alert(result + ' - твій рахунок');
    }
    splitNumber = prompt('Скільки буде 5 / 0?');
    if (splitNumber == '', 'неможна', 'неможливо') {
        alert('Чудово! \u{1F929}');
        result += correctAnswer;
        alert(result + ' - твій рахунок');
    } else if (splitNumber == Number) {
        alert('Упс \u{1F974}');
        result += 0;
        alert(result + ' - твій рахунок');
    }
    skyColour = prompt('Якого кольору небо?');
    if (skyColour == 'блакитного', 'блакитний') {
        alert('Чудово! \u{1F929}');
        result += correctAnswer;
        alert(result + ' - твій рахунок');
    } else if (skyColour == null) {
        alert('Упс \u{1F974}');
        result += 0;
        alert(result + ' - твій рахунок');
    }
    importantQuestion = prompt('Яка правильна відповідь на головне питання життя, всесвіту та всього такого.');
    if (importantQuestion =='42') {
        alert('Чудово! \u{1F929}');
        result += correctAnswer;
        alert(result + ' - твій рахунок');
    } else if (importantQuestion == null) {
        alert('Упс \u{1F974}');
        result += 0;
        alert(result + ' - твій рахунок');
    }
} else {
    alert('Тоді бувай \u{1F614}');
}
alert(`Ваш результат - ${result}!! Вітаю\u{1F929}`);