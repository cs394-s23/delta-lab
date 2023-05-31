import RadarChart from './components/RadarChart';
import UserInput from './components/UserInput';
import FormBox from './components/FormBox';
import './App.css';
import Playlist from './components/Playlist';
import { Grid } from '@mui/material';
import HomePage from './components/HomePage';
import {UserProvider, useUser} from './context/AuthContext';
import {getResourcesBySkill, getResourceByPath} from './firebase.js';

function App() {

  return (
    <div className = "body">
      <UserProvider>
        <HomePage/>
      </UserProvider>
      
    </div>
   

     

    
  );
}

export default App;
