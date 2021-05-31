const buttons = document.querySelectorAll('.play-button');

let sound;
buttons.forEach(button => {
	button.addEventListener('click', () => {
		sound && sound.fade(1, 0, 500);
		if (sound && `audio/${button.id}.mp3` === sound._src) {
			sound = null;
			return;
		}
		setTimeout(() => {
			sound = new Howl({ src: [`audio/${button.id}.mp3`] });
			sound.play();
		}, 500);
	});
});

