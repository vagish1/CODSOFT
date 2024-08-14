import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateBlogPost from './pages/CreateBlogPost';
import Profile from './pages/Profile';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<CreateBlogPost/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  )
}

export default App
