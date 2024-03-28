// Функция для получения времени до конца года
function timeUntilEndOfYear() {
    var today = new Date();
    var endOfYear = new Date(today.getFullYear() + 1, 0, 0);
    var millisecondsRemaining = endOfYear - today;
    
    var days = Math.floor(millisecondsRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((millisecondsRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((millisecondsRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((millisecondsRemaining % (1000 * 60)) / 1000);

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

// Функция для обновления отображения счетчика
function updateCountdown() {
    var timeRemaining = timeUntilEndOfYear();

    var daysSpan = document.getElementById('days');
    var hoursSpan = document.getElementById('hours');
    var minutesSpan = document.getElementById('minutes');
    var secondsSpan = document.getElementById('seconds');

    daysSpan.textContent = timeRemaining.days;
    hoursSpan.textContent = ('0' + timeRemaining.hours).slice(-2);
    minutesSpan.textContent = ('0' + timeRemaining.minutes).slice(-2);
    secondsSpan.textContent = ('0' + timeRemaining.seconds).slice(-2);

};

// Обновляем счетчик каждую секунду
setInterval(updateCountdown, 1000);