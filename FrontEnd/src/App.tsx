import './App.css'
import Home from './components/home/home';
import Slider from './components/Slider/slider'
import OpeningSite from './components/opening-site/opening-site';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={OpeningSite}/>
                <Route path="/home" Component={Home}/>
                <Route path="/slider" Component={Slider}/>
            </Routes>
        </Router>
    );
}

export default App
