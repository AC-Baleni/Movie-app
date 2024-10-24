
import 'bootstrap/dist/css/bootstrap.css';
import style from './App.module.css';
import MovieList from './components/MovieList';
import NavbarComponent from './components/NavbarComponent';

function App() {
   
    return (
        <div className="App">
            <NavbarComponent />
            <div className={style.mainContent}>
                <MovieList/>
            </div>
        </div>
    );
}

export default App;
