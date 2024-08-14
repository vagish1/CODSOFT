import './nav.css';
import pic from  '../../assets/user.jpg';
import create from '../../assets/create.svg';

const Nav = () => {
  return (
    <nav>
      <div className="nav_left">
          <p>Blogging Platform</p>
          <ul>
            <li>Home</li>
            <li>Create</li>
            <li>Profile</li>
          </ul>
      </div>
      <div className="nav_right">
          <div className='write'><img src={create} alt="create_icon" />write</div>
          <img src={pic} alt="pic" className='user_avatar'/>
      </div>
    </nav>
  )
}

export default Nav