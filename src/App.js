import { SCENE1 } from 'constants/SceneConfig';
import './App.css';
import Scene from './components/templates/Scene/Scene';

function App() {
  return (
    <Scene sceneConfig={SCENE1}/>
  );
}

export default App;
