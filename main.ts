let range = SuperBit.RGB_Program()
range = SuperBit.RGB_Program().range(0, 3)
SuperBit.RGB_Program().showRainbow(1, 360)
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    SuperBit.RGB_Program().showColor(neopixel.hsl(Math.trunc(input.acceleration(Dimension.X) / 5), Math.trunc(input.acceleration(Dimension.Y) / 5), Math.trunc(input.acceleration(Dimension.X) / 5)))
})
