import { useEffect, useRef, useState } from 'react';
import './roomCards.css'

interface RoomCardProps {
        dataImage: string;
        header: string;
        content: string;
        isSelected: boolean;
        onSelect: () => void;
}
function RoomCards() {
    const RoomCard = ({dataImage, header, content, isSelected, onSelect}: RoomCardProps) => {
        const [mouseX, setMouseX] = useState(0);
        const [mouseY, setMouseY] = useState(0);
        const [cardDimensions, setCardDimensions] = useState({width: 0, height: 0});
        const [isMouseOver, setIsMouseOver] = useState(false); // Track mouse hover state
        const cardRef: any = useRef();

        useEffect(() => {
                setCardDimensions({
                    width: cardRef.current.offsetWidth,
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
            <div className={`card-wrap ${isSelected ? 'selected' : ''}`} 
              onMouseMove={handleMouseMove} 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
              onClick={onSelect} 
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
    const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
    function setRoom(header:any){
      setSelectedRoom(header)
      console.log(header)
    }
    return <div className="devices-container">
    <RoomCard dataImage="/automatic.png"
      header="Automatic" 
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      isSelected={selectedRoom === 'Automatic'} 
      onSelect={() => setRoom('Automatic')}/>
    <RoomCard dataImage="/livingroom.png"
      header="Living Room" 
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      isSelected={selectedRoom === 'Living Room'} 
      onSelect={() => setRoom('Living Room')} />
    <RoomCard dataImage="/bedroom.png"
      header="Bed Room" 
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      isSelected={selectedRoom === 'Bed Room'} 
      onSelect={() => setRoom('Bed Room')} />
    <RoomCard dataImage="/kids.png"
      header="Kids Room" 
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      isSelected={selectedRoom === 'Kids Room'} 
      onSelect={() => setRoom('Kids Room')} />
  </div>
}
export default RoomCards