import './Footer.css'
import { Link } from 'react-router-dom';
function Footer(){
    return(
        <footer>
            <div >
                <div className='containerLogo1'>
                    <p className='iconLogo1'>❀࿐</p>
                    <h4>VELVETIQUE</h4>
                    <p className='textLogo1'>BEAUTY</p>
                </div>
                <p>Thoughtful beauty for every skin, <br />
                 every day. Formulated with clean, <br />
                  clinically-proven ingredients <br /> designed to empower your natural <br />
                   radiance.</p>

                   <div>
                    <div className='containerIcons'>
                    <p><i class="fa-brands fa-facebook-f"></i></p>
                    <p><i class="fa-brands fa-instagram"></i></p>
                    <p><i class="fa-brands fa-youtube"></i></p>
                </div>
                <p>© 2026 Velvetique Beauty. All Rights Reserved.</p>
                
            </div>

            </div>
            
            <div className='footerContainer1'>
               <div className='footerContainer'>
                <h4>Quick Links</h4>
                <a href="">Home</a>
                <a href="">Shop All</a>
                <a href="">About Us</a>
                <a href="">Order Form</a>
            </div>

            <div className='footerContainer'>
                <h4>Customer Care</h4>
                <a href="">Track Your Order</a>
                <a href="">Shipping Policy</a>
                <a href="">Return & Refund</a>
                <a href="">FAQs & Contact</a>
            </div> 
            </div>
            


            <div>
                <h4>Newsletter</h4>
                <p>Subscribe to get special offers, <br />
                 beauty tips and 10% off your first <br />
                  order.</p>
                  <input type="text" name="" id="" placeholder='Enter your email address' />
                  <button className='subscribebtn'>SUBSCRIBE</button>
            </div>


            

        </footer>
    )
}
export default Footer;