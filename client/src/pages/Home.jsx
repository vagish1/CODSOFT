import BlogPosts from "../components/blogPosts/BlogPosts";
import Nav from '../components/nav/Nav';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", gap:"2rem"}}>
      <Nav/>
      <Header/>
      <BlogPosts/>
      <Footer/>
    </div>
  )
}

export default Home