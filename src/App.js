import RadarChart from './components/RadarChart';
import UserInput from './components/UserInput';
import FormBox from './components/FormBox';
import './App.css';
import {getResourcesBySkill, getResourceByPath} from './firebase.js';
import { getTop5Resources } from './utilities';

function App() {

  console.log(getTop5Resources(["0", "1", "7"]));

  return (
    <div>
     
      {/* <RadarChart/> */}
      {/* <UserInput/> */}
      <FormBox></FormBox>
    </div>
  );
}

export default App;
