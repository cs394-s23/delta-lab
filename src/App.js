import './App.css';
import HomePage from './components/HomePage';
import {UserProvider, useUser} from './context/AuthContext';

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
