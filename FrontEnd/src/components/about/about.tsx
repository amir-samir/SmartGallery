import './about.css'

function About() {
    return <div className="aboutContainer">
                <h1 className="aboutTitle">About Us!</h1>
                <hr className="devideAbout"/>
                <p className="aboutContent"> Welcome to Smart Memories, where we merge technology with memories.<br/>
                Our product, the Interactive Picture Frame, is designed to bring your photos to life in a smart, context-aware way.<br/>
                We believe in enhancing your home experience by dynamically displaying images based on time and current weather.<br/>
                Driven by innovation and a passion for personalization</p>
                <h2 className="supportContent">Our Software supports</h2>
                <h3 className="devicesContent">Following Devices</h3>
                <hr className="devideSupport"/>
           </div>
}

export default About