import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GameScene from 'components/templates/GameScene/GameScene';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BOARD1, BOARD2, BOARD3 } from 'constants/types';
import Levels from 'components/pages/Levels/Levels';
import Main from 'components/templates/Main/Main';
import Scene from 'components/templates/Scene/Scene';
import { SCENE1 } from 'constants/SceneConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/letter" element={<Scene sceneConfig={SCENE1} />} />
      <Route path="/levels" element={<Levels />} />
      <Route path="/game/level1" element={<GameScene board={BOARD1}/>} />
      <Route path="/game/level2" element={<GameScene board={BOARD2} />} />
      <Route path="/game/level3" element={<GameScene board={BOARD3} />} />
      <Route
        path="*"
        element={<Main />}
      />
    </Routes>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
