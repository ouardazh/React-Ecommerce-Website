import './Header.css'
import { Link } from 'react-router-dom';
function Header (){
    return (
        <header>
            <div className='firstHeader'>
                <p>🏠︎ Free Shipping on orders over 500 MAD | Use code: RIF15 for 15% OFF</p>
                <div className='containerIcons'>
                    <p><i class="fa-brands fa-facebook-f"></i></p>
                    <p><i class="fa-brands fa-instagram"></i></p>
                    <p><i class="fa-brands fa-youtube"></i></p>
                </div>
            </div>

            <div className='secondHeader'>
               
                <div className='containerLogo'>
                    <p className='iconLogo'>❀࿐</p>
                    <h4>VELVETIQUE</h4>
                    <p className='textLogo'>BEAUTY</p>
                </div>

                <nav>
                    <Link to="/">HOME</Link>
                    <Link to="/products">SHOP</Link>
                    <Link to="productlist">PRODUCTS</Link>
                    <Link to="order">ORDER</Link>
                    <Link to="/about">ABOUTUS</Link>
                    
                    {/* <a href="">HOME</a>
                    <a href="">SHOP</a>
                    <a href="">PLACE ORDER</a>
                    <a href="">ABOUT US</a> */}
                </nav>

                <div className='basket'>
                    <p><i class="fa-solid fa-magnifying-glass"></i></p>
                    <p><i class="fa-solid fa-user"></i></p>
                    <p><i class="fa-solid fa-bag-shopping"></i></p>
                </div>
            </div>

          
        </header>
    )
}
export default Header;