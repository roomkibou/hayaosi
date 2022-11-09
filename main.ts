input.onButtonPressed(Button.A, function () {
    radio.sendString("ｱｷﾗ")
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    basic.showIcon(IconNames.Square)
})
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
