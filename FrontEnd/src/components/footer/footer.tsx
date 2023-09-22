import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer(){
   return <section className='footer-wrapper'>
        <footer>
            <div className='footer-container'>
                <h3 className='footer-title'>Smart Memories</h3>
                <form className='subscribe-form' action="#">
                <input className='registrtationInputs subscribe-email'
                     type="email"
                     required
                     autoComplete="off"
                     placeholder="Email"
                />
               <input className='registrtationInputs subscribe-button' type="submit" value="Subscribe" />
            </form>
            

            <div className="footer-social">
            <h3 className='footer-follow-title'>Follows Us</h3>
            <div className="footer-social-icons">
              <div className='iconsHolder'>
                <FontAwesomeIcon icon={faFacebook} className="icons"/>
              </div>
              <div className='iconsHolder'>
                <FontAwesomeIcon icon={faInstagram} className="icons"/>
              </div>
              <div className='iconsHolder'> 
                <FontAwesomeIcon icon={faLinkedin} className="icons" />
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3 className='footer-call-title'>Call Us</h3>
            <h3 className='numberPhone'>+91 12345678978</h3>
          </div>
          </div>

          <div className='footer-bottom-section'>
            <hr className='footer-devider'/>
            <div className='footer-bottom-grid'>
                <p className='footer-bottom-text'>
                    @{new Date().getFullYear()} SmartMemories. All Rights Reserved
                </p>
                <div>
                    <p className='footer-bottom-text'>PRIVACY POLICY</p>
                    <p className='footer-bottom-text'>TERMS & CONDITIONS</p>
                </div>
            </div>

          </div>
        </footer>

    </section>
}
export default Footer