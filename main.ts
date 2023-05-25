let x = 1023
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Heart)
        pins.analogWritePin(AnalogPin.P1, x)
        basic.clearScreen()
    } else {
        pins.analogWritePin(AnalogPin.P1, 0)
    }
})
