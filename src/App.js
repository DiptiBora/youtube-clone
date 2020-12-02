import './App.css';
import Header from './Header'
import Sidebar from '../src/Sidebar/Sidebar'
import RecommendedVideos from './RecommendedVideos';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route path="/search/:searchTerm" >
              <div className="App_pages">
                <Sidebar/>
                <SearchPage />
              </div>
            </Route>
            <Route path="/" >
              <div className="App_pages">
                <Sidebar/>
                <RecommendedVideos />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
