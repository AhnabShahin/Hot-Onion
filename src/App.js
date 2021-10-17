import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';

function App() {
  return (

    <div>
      <Router>
      <Header />
        <Switch>
          
          <Router exact path="/">

            <Body />
          </Router>
          <Footer />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
