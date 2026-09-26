radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        NTD(1, 1)
    }
    if (receivedNumber == 2) {
    	
    }
    if (receivedNumber == 3) {
    	
    }
    radio.sendNumber(0)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
function __init__ () {
    ASI = strip.range(0, 2)
    SUNE = strip.range(2, 4)
    MOMO = strip.range(6, 2)
    KOSI = strip.range(8, 1)
    HARA = strip.range(9, 1)
    MUNE = strip.range(10, 4)
    KATA = strip.range(14, 4)
    UDE = strip.range(18, 4)
    KAO = strip.range(22, 1)
    ME = strip.range(23, 1)
}
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
function NTD (Mode: number, Aye_Mode: number) {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    if (Mode == 1) {
        body_color = neopixel.rgb(255, 0, 0)
    } else if (Mode == 2) {
        body_color = neopixel.rgb(255, 200, 0)
    } else if (Mode == 3) {
        body_color = neopixel.rgb(0, 0, 255)
    } else {
        body_color = neopixel.rgb(0, 255, 0)
    }
    if (Aye_Mode == 1) {
        Aye_color = neopixel.rgb(0, 255, 0)
    } else if (Aye_Mode == 2) {
        Aye_color = neopixel.rgb(255, 0, 0)
    } else {
        Aye_color = neopixel.rgb(255, 255, 0)
    }
    ME.showColor(Aye_color)
    basic.pause(2000)
    ASI.showColor(body_color)
    basic.pause(2000)
    SUNE.showColor(body_color)
    basic.pause(2000)
    MOMO.showColor(body_color)
    basic.pause(3000)
    KOSI.showColor(body_color)
    UDE.showColor(body_color)
    basic.pause(2000)
    HARA.showColor(body_color)
    basic.pause(1000)
    MUNE.showColor(body_color)
    KATA.showColor(body_color)
    basic.pause(1000)
    KAO.showColor(body_color)
    basic.pause(2000)
}
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
let Aye_color = 0
let body_color = 0
let ME: neopixel.Strip = null
let KAO: neopixel.Strip = null
let UDE: neopixel.Strip = null
let KATA: neopixel.Strip = null
let MUNE: neopixel.Strip = null
let HARA: neopixel.Strip = null
let KOSI: neopixel.Strip = null
let MOMO: neopixel.Strip = null
let SUNE: neopixel.Strip = null
let ASI: neopixel.Strip = null
let strip: neopixel.Strip = null
radio.setGroup(106)
strip = neopixel.create(DigitalPin.P0, 34, NeoPixelMode.RGB)
__init__()
