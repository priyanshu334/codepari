import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import AboutUs from './components/AboutUs';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Blogs from './components/resources/Blogs';
import LandingPage from './components/Landingpage/LandingPage'; 
import Main from './components/Main';
import Blog from './components/resources/Blog';
import Therapist from './components/Therepist/Therepist';
import TherapistConnection from './components/Therepist/TherepistConnection';
import Profile from './components/Profile';
import Pricing from './components/Pricing';
import Home from './components/Mindfullness/Home';
import Resources from './components/Resources';
import Books from './components/resources/Books';
import Apps from './components/Apps';
import Stats from './components/Stats';
import AnalyticsPage from './components/AnalyticsPage';
import Quiz from './components/Quiz/Quiz';
import MusicTherephy from './components/resources/MusicTherephy';
import Courses from './components/resources/Courses';
import Videos from './components/resources/Videos';

import Products from './components/resources/Products';
import VrTherephy from './components/resources/VrTherephy';
import BrainWaves from './components/Mindfullness/BrainWaves';


function App() {
  return (
    
    <>
      
       <Routes>
        <Route path='/' element={<SignIn/>}></Route>
        <Route path='/Blogs' element={<Blogs/>}/>
        <Route path='/home' element={<LandingPage/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/Therapist' element={<Therapist/>}/>
        <Route path='/therepistconnection' element={<TherapistConnection/>}/>
         <Route path='/profile' element={<Profile/>}/>
         <Route path='/pricing' element={<Pricing/>}/>
         <Route path='resources' element={<Resources/>}/>
         <Route path='/books' element={<Books/>}/>
         <Route path='/mains' element={<Home/>}/>
         <Route path='/Apps' element={<Apps/>}/>
         <Route path='/stats' element={<AnalyticsPage/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/music' element={<MusicTherephy/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/vr' element={<VrTherephy/>}/>
        <Route path='/brainwaves' element={<BrainWaves/>}/>
   </Routes>
  
  
    </>

  );
}

export default App;
