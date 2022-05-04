let compass = 0
basic.forever(function () {
    compass = input.compassHeading()
    if (compass < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (compass < 135) {
        basic.showArrow(ArrowNames.East)
    } else if (compass < 225) {
        basic.showArrow(ArrowNames.South)
    } else if (compass < 315) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
