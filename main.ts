let right_temp = 0
input.onButtonPressed(Button.B, function () {
    right_temp = 25
    if (input.temperature() == right_temp) {
        basic.showString("right temp")
    } else {
        basic.showString("wrong temp")
    }
})
