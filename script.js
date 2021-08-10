const displayLeft = document.querySelector('.display__time-left')
const displayEnd = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')
let countdown

function timer(seconds) {
    clearInterval(countdown)
    const now = Date.now()
    console.log(now);
    const then = now + seconds * 1000
    console.log(then);
    displayLeftTime(seconds)
    displayEndTime(then)

    countdown = setInterval(() => {

        const secondsLeft = Math.round((then - Date.now()) / 1000)

        if (secondsLeft < 0) {
            clearInterval(countdown)
            return
        }
        displayLeftTime(secondsLeft)
    }, 1000)

}

function displayLeftTime(seconds) {
    const hour = Math.floor(seconds / 3600)
    const min = Math.floor(seconds % 3600 / 60)
    const sec = Math.floor(seconds % 3600 % 60)
    displayLeft.textContent = `${hour<10?'0'+hour:''}:${min<10?'0'+min:min}:${sec<10?'0'+sec:sec}`
}

function displayEndTime(then) {
    const newDate = new Date(then)
    const laterHour = newDate.getHours()
    const laterMin = newDate.getMinutes()
    const endTime = `结束后时间是${laterHour<10?'0'+laterHour:laterHour}:${laterMin<10?'0'+laterMin:laterMin}`
    displayEnd.textContent = endTime
}

function buttonHandler() {
    // console.log(this.dataset.time);
    const seconds = this.dataset.time
    timer(seconds)

}


buttons.forEach(button => button.addEventListener('click', buttonHandler))

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
})