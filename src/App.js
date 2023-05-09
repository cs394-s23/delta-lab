import RadarChart from './components/RadarChart';
import UserInput from './components/UserInput';
import FormBox from './components/FormBox';
import './App.css';
import Playlist from './components/Playlist';
import { Grid } from '@mui/material';

import {getResourcesBySkill, getResourceByPath} from './firebase.js';

function App() {

  return (
   <Grid container spacing={3}>
      <FormBox></FormBox>
    </Grid>

     

      
    
  );
}

export default App;
