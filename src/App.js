import RadarChart from './components/RadarChart';
import UserInput from './components/UserInput';
import FormBox from './components/FormBox';
import './App.css';
import {getResourcesBySkill, getResourceByPath} from './firebase.js';

function App() {

  return (
    <div>
     
      {/* <RadarChart/> */}
      {/* <UserInput/> */}
      <FormBox></FormBox>
    </div>
  );
}

export default App;
