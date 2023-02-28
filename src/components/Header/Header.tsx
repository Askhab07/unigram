import add from '../../assets/add.svg';
import homeActive from '../../assets/home-active.svg';
import likes from '../../assets/likes.svg';
import msg from '../../assets/msg.svg';
import trends from '../../assets/trends.svg';
import logo from '../../assets/instagram.svg';
import './header.scss';
import { useAppSelector } from '../../hooks/hooks';

const Header = () => {
    const { posts } = useAppSelector(state => state.posts)

    return (
        <header className='header'>
            <div className='header__block'>
            <img className='logo' src={logo} alt="" />
            <div className='input'>
            <input type="text" placeholder='Search'/>
            <i className="bi bi-search"></i>
            </div>
            <ul>
                <li><img src={homeActive} alt="" /></li>
                <li><img src={msg} alt="" /></li>
                <li><img src={add} alt="" /></li>
                <li><img src={trends} alt="" /></li>
                <li><img src={likes} alt="" /></li>
                <li><img className='header__avatar' src={posts[0]?.user.avatar} alt="" /></li>
            </ul>
            </div>
        </header>
    );
};

export default Header;