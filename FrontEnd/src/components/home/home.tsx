import './home.css';
import React, { useState } from 'react';
import GalleryShow from '../galleryShow/galleryShow';
import ProfileNavbar from '../profileNavbar/profileNavbar';
import RoomCards from '../cards/roomCards';
import RoomImagesHolder from '../roomImagesHolder/roomImagesHolder';
import ImageUploader from '../imageUploader/imageUploader';
import { useNavigate } from 'react-router-dom';

function Home(){

    const navigate = useNavigate();
    // Create a useState Constant to save selectedImages to upload as an Array of Strings
    const [selectedImages, setSelectedImages] = useState<string[]>([])
    //Handle deleting a selected image and remove its url from the array

    function navigateShow(){
        navigate('/slider');
    }

    return <div className="homeContainer">
           <ProfileNavbar/>
           <section className='galleryShowSection'>
           <div className='galleryShowTitle'>
            <h1 className='galleryShowTitleContent'>
                Manage Your Rooms and Gallery
            </h1>
            <hr className="devideShowGallery"/>
           </div>
            <GalleryShow/>
           </section>
           <section className='roomSelectorSection'>
                <div className='roomSelectorTitle'>
                <h1 className='roomSelectorTitleContent'> Select a room</h1>
                <hr className="devideSelector"/>
                </div>
            <RoomCards/>
            <button className="play-btn" onClick={navigateShow}></button>
           </section>
            <ImageUploader/>
           <RoomImagesHolder/>
           

    </div>

        ;
}

export default Home;