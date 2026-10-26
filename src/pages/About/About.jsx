import './About.css'
import imageabout from '../../assets/img/1.avif'

function About (){
    return(
        <section className='aboutSection'>
            <p className='ourStory'>OUR STORY</p>
            <h1 className='titleAbout'>Pure Beauty, Thoughtfully <br />C<span>raft</span>ed</h1>
            <p>At Velvetique Beauty, we believe skin confidence comes from gentle, clean, and effective care. Our mission is <br />
             to transform daily skincare into a moment of pure ritual and self-love.</p>
             <div className='containerAbout'>
                <img src={imageabout} alt="" />
                <div className='rightBoxAbout'>
                    <h2>Clean Formulations. Real Results.</h2>
                    <p>Founded with a passion for conscious formulations, Velvetique <br /> 
                    combines dermatologist-backed active ingredients like Salicylic Acid, <br />
                     Niacinamide, and Hyaluronic Acid with soothing botanical extracts <br />
                      like Aloe Vera and Chamomile. <br /> <br />

                    Every formula is 100% toxin-free, cruelty-free, and ethically sourced. <br />
                     We eliminate harsh sulfates, parabens, and artificial irritants, leaving  <br />
                    only pure, transformative goodness for your skin barrier.</p>
                </div>
             </div>


             <h2 className='secondTitleAbout'>Our Three Commitments</h2>
        <div className='secondContainerAbout'>
            
            <div className='box'>
                <h3>Transparency</h3>
                <p>We clearly state every ingredient and <br />
                 concentration so you know exactly what <br />
                  touches your skin.</p>
            </div>

            <div className='box'>
                <h3>Efficacy</h3>
                <p>Dermatologically tested products <br />
                 designed to deliver visible improvements<br />
                 in texture, radiance, and hydration.</p>
            </div>

            <div className='box'>
                <h3>Sustainability</h3>
                <p>Eco-conscious packaging and zero animal<br />
                 testing to ensure kindness to your skin<br />
                 and our planet.</p>
            </div>
        </div>
        </section>
    )
}
export default About;