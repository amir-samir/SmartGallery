import './opening-site.css';
import About from '../about/about'; 
import { Registration } from '../registration/registration'
import Navbar from '../navbar/navbar';
import Contact from '../contact/contact';
import DevicesCards from '../cards/devicesCards';
import Footer from '../footer/footer';





function OpeningSite() {
    return <div className='section-container'>
                <Navbar/> 
                <section className="signUpSection">
                    <div className="welcomeText">
                        <h1 className="companyName">Smart Memories</h1>
                        <p className="companyDescription">Turn Your Black Screen into intertainment devices</p>
                        <hr className="devideRegister"/>
                    </div>
                    <div className="registration-container">
                        <Registration/> 
                    </div>
                </section>
                <section className='aboutSection'>
                    <About/>
                    <DevicesCards/>
                </section>
                <section className='contactSection'>
                <h1 className='contact-Title'>Contact Us</h1>
                <hr className='contactDevider'/>
                <Contact/>
                </section>
                <Footer/>
            </div>
}

export default OpeningSite
