//Cards to show compatable devices
import { useEffect, useRef, useState } from 'react'
import './devicesCards.css'

interface CardProps {
    dataImage: string;
    header: string;
    content: string;
  }
function DevicesCards(){
    const Card = ({dataImage, header, content}: CardProps) => {
        const [mouseX, setMouseX] = useState(0);
        const [mouseY, setMouseY] = useState(0);
        const [cardDimensions, setCardDimensions] = useState({width: 0, height: 0});
        const [isMouseOver, setIsMouseOver] = useState(false); // Track mouse hover state
        const cardRef: any = useRef();

        useEffect(() => {
            setCardDimensions({
                width:  cardRef.current.offsetWidth,
                height: cardRef.current.offsetHeight
            });
        }, []);

        const handleMouseEnter = () => {
            setIsMouseOver(true); // Mouse is over the card
          };

        const handleMouseMove = (e: any) => {
              setMouseX(e.pageX - cardRef.current.offsetLeft - cardDimensions.width / 2);
              setMouseY(e.pageY - cardRef.current.offsetTop - cardDimensions.height / 2);
            }
        const handleMouseLeave = () => {
              setIsMouseOver(false); // Mouse is not over the card
              setTimeout(() => {
                setMouseX(0);
                setMouseY(0);
                }, 1000);
            }
        const cardStyle = {
                transform: `rotateY(${mouseX / cardDimensions.width * 30}deg) rotateX(${mouseY / cardDimensions.height * -30}deg)`
            };
        const cardBgTransform = {
                transform: `translateX(${mouseX / cardDimensions.width * -40}px) translateY(${mouseY / cardDimensions.height * -10}px)`
            };
        const cardBgImage = {
                backgroundImage: `url(${dataImage})`
            };

            return (
                <div className="card-wrap" 
                  onMouseMove={handleMouseMove} 
                  onMouseEnter={handleMouseEnter} 
                  onMouseLeave={handleMouseLeave} 
                  ref={cardRef}>
                  <div className="card" style={cardStyle}>
                    <div className="card-bg" style={{...cardBgTransform, ...cardBgImage}}></div>
                    <div className="card-info">
                      <h1>{header}</h1>
                      <p>{content}</p>
                    </div>
                  </div>
                </div>
              )
            }
    return <div className="devices-container">
      <Card dataImage="/iphone14pro.png"
        header="Smartphone" 
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
      <Card dataImage="/ipadPro.png"
        header="Tablet" 
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
      <Card dataImage="/imac.png"
        header="Desktop" 
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
      <Card dataImage="/tc.png"
        header="TV" 
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
    </div>
    
}

export default DevicesCards