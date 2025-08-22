// Audio utilities for the Bible Quiz App

// Function to play the timer end sound
export const playTimerEndSound = () => {
  // Create a simple beep sound using the Web Audio API
  const AudioCtx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

  if (!AudioCtx) return;

  const audioContext = new AudioCtx();
  
  // Create an oscillator for a beeping sound
  const oscillator = audioContext.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(800, audioContext.currentTime); // Value in hertz
  
  // Create a gain node to control volume
  const gainNode = audioContext.createGain();
  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
  
  // Connect the oscillator to the gain node and the gain node to the destination
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Start and stop the oscillator to create a beep
  oscillator.start();
  
  // Create a pattern of beeps
  setTimeout(() => {
    oscillator.stop();
    
    // Create a second beep after a short pause
    setTimeout(() => {
      const oscillator2 = audioContext.createOscillator();
      oscillator2.type = 'sine';
      oscillator2.frequency.setValueAtTime(1000, audioContext.currentTime);
      oscillator2.connect(gainNode);
      oscillator2.start();
      
      setTimeout(() => {
        oscillator2.stop();
        
        // Create a third beep after another short pause
        setTimeout(() => {
          const oscillator3 = audioContext.createOscillator();
          oscillator3.type = 'sine';
          oscillator3.frequency.setValueAtTime(1200, audioContext.currentTime);
          oscillator3.connect(gainNode);
          oscillator3.start();
          
          setTimeout(() => {
            oscillator3.stop();
          }, 300);
        }, 100);
      }, 300);
    }, 100);
  }, 300);
};
