import Confetti from 'react-confetti';
import {useWindowSizes} from "react-use-window-sizes";
export function ConfettiComponent() {
  const { width, height } = useWindowSizes();
  return (
    <Confetti numberOfPieces={300} width={width} 
    height={height} 
    />
  );
}
