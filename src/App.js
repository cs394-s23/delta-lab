import RadarChart from './components/RadarChart';
import UserInput from './components/UserInput';
import FormBox from './components/FormBox';
import './App.css';
import Playlist from './components/Playlist';

import {getResourcesBySkill, getResourceByPath} from './firebase.js';

function App() {

  return (
    <div className = "body">
     
      {/* <RadarChart/> */}
      {/* <UserInput/> */}
      <FormBox></FormBox>
      <Playlist/>
    </div>
  );
}

export default App;
