ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectThingSpeak()
basic.forever(function () {
    if (ESP8266_IoT.wifiState(true)) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        ESP8266_IoT.connectWifi("dlink", "12345678")
    }
    if (ESP8266_IoT.thingSpeakState(true)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
        ESP8266_IoT.uploadData()
    } else {
        ESP8266_IoT.setData(
        "2KFEZ7F79CT7UB2T",
        1,
        2
        )
        ESP8266_IoT.connectThingSpeak()
    }
})
