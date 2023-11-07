import React, { useEffect, useState } from 'react';
import './roomImagesHolder.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import swal from 'sweetalert';

interface Image {
    _id: string;
    imageName: string;
    category: string;
    image: string
}

function RoomImagesHolder() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    async function getImages() {
      try {
        const response = await fetch("http://localhost:5083/getImages", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setImages(data.data);
        console.log("images", images); // This will log the images after they have been set
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    getImages();
  }, []);

  return (
    <div className='room-images-container'>
      <h1 className='room-images-title'>Living Room Gallery</h1>
      <hr className='room-images-gallery-divider' />
      <div className='room-images-gallery'>
        {images.map((data) => (
          <div className='room-images-gallery-item' key={data._id}>
            <img
              src={data.image}
              className='room-gallery-image'
              alt={`Uploaded ${data.imageName}`}
            />
            <div className='room-gallery-image-info'>
              <ul className='room-gallery-image-info-list'>
                <li className='room-gallery-image-delete'>
                  <span className='hidden-delete-icon'>
                  <FontAwesomeIcon icon={faTrashAlt} aria-hidden="true" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomImagesHolder;
