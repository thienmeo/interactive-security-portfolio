export function simulateLoader(onProgress, onComplete) {
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 25) + 10;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      onProgress(progress);
      setTimeout(onComplete, 300);
    } else {
      onProgress(progress);
    }
  }, 120);
}
