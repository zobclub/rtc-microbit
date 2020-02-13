# rtc-microbit
---
This extension supports EEPROM in MakeCode

* I2C address 0x69

## Method
---
* Initialize RTC
```
RTC.init()
```

* RTC Set Time
```
RTC.setTime(sec, min, hour)
```

* RTC Set Date
```
RTC.setDate(date, month, year)
```
RTC.setTime(sec, min, hour)
RTC.setDate(date, month, year)
※この順で連続的に並べて実行すると正確に動作する

* RTC Update Time
```
RTC.updateTime()
```

* RTC time by string
```
RTC.strTime()
```

* RTC date by string
```
RTC.strDate()
```

* RTC get hour time
```
RTC.hourTime()
```

* RTC get minute time
```
RTC.minTime()
```

* RTC get second time
```
RTC.secTime()
```

## Example
---
```
RTC.init()
basic.forever(function () {
    RTC.updateTime()
    serial.writeString(RTC.strTime())
    serial.writeLine("")
    basic.pause(1000)
})
```

## License
MIT

## Supported targets

* for PXT/microbit

