import './css/App.css';
import MovieList from './components/MovieList';
import NavbarMovie from './components/NavbarMovie.js';
import MovieDetails from './components/MovieDetails.js';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarMovie />
        <h1 className="display-4">Welcome to the movies app.</h1>
        <div className="movie-card-container-display">
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={MovieList} />
          <Route path="/movie/:id" component={MovieDetails} />
        </div>
      </div>
    </Router>
  );
}

export default App;
