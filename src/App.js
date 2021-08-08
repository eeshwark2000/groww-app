import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Allbanks from './components/Allbanks';
import BankDetails from './components/BankDetails';
import Fav from './components/Fav';
import Navbar from './components/Navbar';
import Store from './store';

function App() {
  return (
    <div className="App container">
      <Provider store={Store}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/all-banks" />
            </Route>
            <Route exact path="/all-banks" component={Allbanks} />
            <Route exact path="/Favourites" component={Fav} />
            <Route exact path="/bank-details/:ifsc" component={BankDetails} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
