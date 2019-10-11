// tests go here; this will not be compiled when this package is used as a library
RTC.init()
basic.forever(function () {
    RTC.updateTime()
    serial.writeLine(RTC.stringDate())
    serial.writeLine(RTC.stringTime())
    basic.pause(1000)
})
