import './header.css';
import scenery from '../../assets/scenery.jpg';
import user from '../../assets/user.jpg';

const Header = () => {
  return (
    <header>
      <div className="welcome_motive">
          <p>WELCOME TO BLOGGING PLATFORM</p>
          <h1>Craft narratives ✍️ that ignite <span>inspiration</span> 💡,<br /> <span>knowledge</span> 📙, and <span>entertainment</span> 🎬</h1>
      </div>
      <div className="latest_blog">
        <img src={scenery} alt="blgPost_img" />
        <div className="latest_blog_content">
            <div className="content_header">
              <img src={user} alt="user_pic" className='user_avatar'/>
              <p>username</p>
              <p>.</p>
              <p>12 minutes ago</p>
            </div>
            <div className="content">
                <h1>Where To Watch John Wick: Chapter 4</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem temporibus ullam cumque reprehenderit, molestiae sed, optio eos impedit quibusdam iusto expedita laboriosam quis? Odit modi magni labore expedita rerum cumque!</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;