const displayLeft = document.querySelector('.display__time-left')
const displayEndTime = document.querySelector('.display__end-time')


function buttonHandler() {
    // console.log(this.dataset.time);
    const seconds = this.dataset.time
    const hour = Math.floor(seconds / 3600)
    const min = Math.floor(seconds % 3600 / 60)
    const sec = Math.floor(seconds % 3600 % 60)
        // console.log(hour);
        // console.log(min);
    displayLeft.textContent = `${hour<10?'0'+hour:''}:${min<10?'0'+min:min}:${sec<10?'0'+sec:sec}`

    const now = new Date()
    console.log(now);
    const then = now + seconds * 1000
    console.log(then);
    const newDate = new Date(then)
    const laterHour = newDate.getHours()
    const laterMin = newDate.getMinutes()
    const endTime = `结束后时间是${laterHour<10?'0'+laterHour:laterHour}:${laterMin<10?'0'+laterMin:laterMin}`
    displayEndTime.textContent = endTime
}
const buttons = document.querySelectorAll('[data-time]')
buttons.forEach(button => button.addEventListener('click', buttonHandler))