// =============================================================================
// Web Audio API — Âm thanh thủ công không cần tải file ngoài (0kb, 100% miễn phí)
// =============================================================================

export class AudioManager {
  constructor() {
    this.ctx = null;
    this.isMuted = true;
    this.ambientNode = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Tiếng chuông thiền hữu cơ khi click / tương tác (432Hz harmonic tone)
  playChime(freq = 432) {
    if (this.isMuted) return;
    this.init();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    // Easing âm lượng mượt mà (Exponential decay)
    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.8);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 1.8);
  }

  // Âm thanh hover nhẹ như gió thoảng
  playHover() {
    if (this.isMuted) return;
    this.init();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(648, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(864, this.ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }

  toggleSound(buttonElement) {
    this.isMuted = !this.isMuted;
    if (!this.isMuted) {
      this.init();
      this.playChime(528); // Tần số thư giãn 528Hz khi bật
      if (buttonElement) buttonElement.innerHTML = `<span>Sound: ON</span>`;
    } else {
      if (buttonElement) buttonElement.innerHTML = `<span>Sound: OFF</span>`;
    }
    return !this.isMuted;
  }
}
