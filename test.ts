// tests go here; this will not be compiled when this package is used as a library
RTC.init()
basic.forever(function () {
    RTC.updateTime()
    serial.writeString(RTC.strTime())
    serial.writeLine("")
    basic.pause(1000)
})
