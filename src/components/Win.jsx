import Confetti from 'react-confetti';
export const Win = ({ gameState }) => {
  if (gameState !== 'win') return;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  return (
    <>
      <Confetti width={windowWidth} height={windowHeight} />
    </>
  );
};
