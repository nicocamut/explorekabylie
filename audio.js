const buttons = document.querySelectorAll('.play-button');

let sound;
buttons.forEach(button => {
	button.addEventListener('click', () => {
		sound && sound.fade(1, 0, 500);
		setTimeout(() => {
			sound = new Howl({ src: [`audio/${button.id}.mp3`] });
			sound.play();
			 if (self.playlist[self.index].howl) {
      self.playlist[self.index].howl.stop();
    }

    // Reset progress.
    progress.style.width = '0%';

    // Play the new track.
    self.play(index);
		}, 500);
	});
});
