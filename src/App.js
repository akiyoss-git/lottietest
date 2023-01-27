import './App.css';
import Lottie from 'react-lottie';
import * as animationData from './animation.json'

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
  };
  return (
    <div className="App">
      <Lottie options={defaultOptions}
              height={500}
              width={500}/>
    </div>
  );
}

export default App;
