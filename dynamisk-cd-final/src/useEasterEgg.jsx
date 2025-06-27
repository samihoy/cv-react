
import { useEffect } from 'react';

export default function useEasterEgg() {
  useEffect(() => {
    console.log("Easter egg logic activated");

    let keySequence = '';
    const secretCode = '1337';

    const modal = document.getElementById('easterEggModal');
    const closeButton = document.querySelector('.close');
    const egg = document.getElementById("easterEgg");

    const handleKeyDown = (event) => {
      keySequence += event.key;
      keySequence = keySequence.slice(-secretCode.length);
      if (keySequence === secretCode && modal) {
        modal.style.display = 'block';
        keySequence = '';
      }
    };

    const handleCloseClick = () => {
      if (modal) modal.style.display = 'none';
    };

    const handleOutsideClick = (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };

const handleImageClick = () => {
  if (egg) {
    const isOriginal = egg.src.includes("profile-pic");
    egg.src = isOriginal
      ? "/images/My-alter-ego.jpg"
      : "/images/profile-pic.jpg";
  }
};

    if (egg) egg.addEventListener('click', handleImageClick);
    if (closeButton) closeButton.addEventListener('click', handleCloseClick);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleOutsideClick);

    return () => {
      if (egg) egg.removeEventListener('click', handleImageClick);
      if (closeButton) closeButton.removeEventListener('click', handleCloseClick);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);
}
