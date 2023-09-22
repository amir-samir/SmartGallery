import './home.css';
import React, { useState } from 'react';
import GalleryShow from '../galleryShow/galleryShow';
import ProfileNavbar from '../profileNavbar/profileNavbar';
import RoomCards from '../cards/roomCards';
import RoomImagesHolder from '../roomImagesHolder/roomImagesHolder';
import ImageUploader from '../imageUploader/imageUploader';





function Home(){

   
    // Create a useState Constant to save selectedImages to upload as an Array of Strings
    const [selectedImages, setSelectedImages] = useState<string[]>([])
    // Handle Uploaded Diles with ReactChangeEvent
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Store the target Files in files const
        const files = event.target.files;
        //Check if files exists or not
        if (files) {
            // Create an Array to save immages urls and initialize it as an empty array
            const imageUrls: string[] = [];
            for (let file of files) {
                const imageUrl = URL.createObjectURL(file);
                imageUrls.push(imageUrl)
            }
            setSelectedImages((prevSelectedImages) => [...prevSelectedImages, ...imageUrls]);
        }
    };

    //Handle deleting a selected image and remove its url from the array
    const handleDeleteImage = (imageUrl: string) => {
        setSelectedImages((prevSelectedImages) =>
            prevSelectedImages.filter((imgUrl) => imgUrl !== imageUrl)
        );
    };

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
           </section>
            <ImageUploader/>
           <RoomImagesHolder/>
           

    </div>

        ;
}

export default Home;