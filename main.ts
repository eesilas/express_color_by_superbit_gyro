let range = SuperBit.RGB_Program().range(0, 3)
SuperBit.RGB_Program().showRainbow(1, 360)
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    if (input.temperature() < 22) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (input.temperature() > 22 && input.temperature() < 23) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (input.temperature() > 23 && input.temperature() < 24) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (input.temperature() <= 24 && input.temperature() < 25) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (input.temperature() <= 25 && input.temperature() < 26) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (input.temperature() <= 26 && input.temperature() < 27) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Indigo))
    } else if (input.temperature() <= 27 && input.temperature() < 28) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Violet))
    } else if (input.temperature() <= 28 && input.temperature() < 29) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Purple))
    } else if (input.temperature() <= 29 && input.temperature() < 30) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.White))
    } else {
        for (let index = 0; index < 4; index++) {
            SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
            basic.pause(100)
            SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(100)
        }
    }
})
