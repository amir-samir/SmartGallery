import './App.css'
import Home from './components/home/home';
import OpeningSite from './components/opening-site/opening-site';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={OpeningSite}/>
                <Route path="/home" Component={Home}/>
            </Routes>
        </Router>
    );
}

export default App
