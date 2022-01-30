import { Switch,Route } from 'react-router-dom';
import HomePage from './components/pages/homepage/homepage.components';
import './App.css';


function App() {
  return (
    <div>
      <Switch>
        <Route exact patch='/' component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
