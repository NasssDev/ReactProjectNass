import '../styles/Banner.css';
import leaf from '../assets/leaf.png';

function Banner() {
    return (
        <div className="banner-jungle">
            <img src={leaf} alt='La maison jungle' className='logo-jungle' />
            <h1 className="title-jungle">NasssDev Website</h1>
        </div>
    )
}

export default Banner