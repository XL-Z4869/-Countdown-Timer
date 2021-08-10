# -Countdown-Timer
效果：https://xl-z4869.github.io/-Countdown-Timer/
制作一个计数器
### 一、知识点
#### 1.setTnterVal
#### 2.Date()
### 二、主要步骤
#### 1.获取对应元素
* 新建一个变量，作为计数器名称
* 为按钮添加点击事件，通过事件获得计数器时间
```
const displayLeft = document.querySelector('.display__time-left')
const displayEnd = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')
let countdown

buttons.forEach(button => button.addEventListener('click', buttonHandler))
function buttonHandler() {
    // console.log(this.dataset.time);
    const seconds = this.dataset.time
    timer(seconds)
}
```
#### 2.新建一个函数获得要显示的时间
```
function displayLeftTime(seconds) {
    const hour = Math.floor(seconds / 3600)
    const min = Math.floor(seconds % 3600 / 60)
    const sec = Math.floor(seconds % 3600 % 60)
    displayLeft.textContent = `${hour<10?'0'+hour:''}:${min<10?'0'+min:min}:${sec<10?'0'+sec:sec}`
}
```

#### 3.新建一个函数，显示计数器结束后要显示的时间
```
function displayEndTime(then) {
    const newDate = new Date(then)
    const laterHour = newDate.getHours()
    const laterMin = newDate.getMinutes()
    const endTime = `结束后时间是${laterHour<10?'0'+laterHour:laterHour}:${laterMin<10?'0'+laterMin:laterMin}`
    displayEnd.textContent = endTime
}
```

#### 4.新建一个函数，实现计数器的操作
```
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
```

#### 5.最后添加输入分钟的提交事件
```
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
})
```
