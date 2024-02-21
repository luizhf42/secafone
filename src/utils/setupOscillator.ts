export default () => {
  const audioCtx = new AudioContext();
	
	const oscillator = audioCtx.createOscillator();
	oscillator.frequency.value = 200;

	const gain = audioCtx.createGain();
	gain.gain.value = 3;

	oscillator.connect(gain);
	gain.connect(audioCtx.destination);

  return oscillator;
}