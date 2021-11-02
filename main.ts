radio.onReceivedNumberDeprecated(function (receivedNumber) {
    if (receivedNumber == 0) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 38)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 38)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (receivedNumber == 1) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 39)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 39)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (receivedNumber == 2) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 70)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 10)
        basic.showLeds(`
            . . # # #
            . . . # #
            . . # . #
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        motobit.enable(MotorPower.Off)
    }
    if (receivedNumber == 3) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 10)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 70)
        basic.showLeds(`
            # # # . .
            # # . . .
            # . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        motobit.enable(MotorPower.Off)
    }
    if (receivedNumber == 4) {
        motobit.enable(MotorPower.Off)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(4)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(2)
})
radio.setGroup(1)
motobit.invert(Motor.Left, true)
motobit.invert(Motor.Right, true)
