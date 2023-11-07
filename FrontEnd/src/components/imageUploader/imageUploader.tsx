import { ChangeEvent, useEffect, useState } from 'react';
import RoomImagesHolder from '../roomImagesHolder/roomImagesHolder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import './imageUploader.css'



function ImageUploader() {
	const [fileSelected, setFileSelected] = useState(false);
	const [selectedImages, setSelectedImages] = useState<File[]>([]);
	const [image, setImage] = useState<string[]>([]);

	//Handle file input change and save the images in an Array
	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const files = Array.from(e.target.files || []);
		setSelectedImages([...selectedImages, ...files]);
		console.log(selectedImages);
	}
	//Click the hidden Input button
	const handleChooseFileClick = () => {
		const fileInput = document.getElementById('file');
		if (fileInput) {
		  fileInput.click(); // Programmatically trigger a click event on the hidden input
		}
	  };

	//Handle deleting an image before uploading
	  const handleImageDelete = (index: number) => {
		const updatedImages = [...selectedImages];
		updatedImages.splice(index, 1); // Remove the image at the specified index
		image.splice(index, 1);
		setSelectedImages(updatedImages);
	  };

	//Convert images to Base64 to save them in MongoDB (Not the best Solution but its enough good for a demo Project)
	  function convertToBase64(e: any) {
		handleFileChange
		console.log(e);
	  
		const files = e.target.files;
		const imageArray: string[] = [];
	  
		for (let i = 0; i < files.length; i++) {
		  const reader = new FileReader(); // Create a new FileReader instance for each file
	  
		  reader.onload = () => {
			console.log(reader.result);
			imageArray.push(reader.result as string);
	  
			if (imageArray.length === files.length) {
			  // All images have been processed, update the state
			  setImage(imageArray);
			}
		  };
	  
		  reader.onerror = error => {
			console.log("Error: ", error);
		  };
	  
		  reader.readAsDataURL(files[i]); // Start reading the current file
		}
	  }
	  
	//Fetch the POST Method to upload the images using the Server
	  function uploadImages() {
		fetch("http://localhost:5083/uploadImagesBase", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			"Access-Control-Allow-Origin": "*",
		  },
		  body: JSON.stringify({
			images: image,
		  }),
		})
		  .then((res) => res.json())
		  .then((data) => console.log(data));
		setSelectedImages([]);
	  }

	  //Handle file Input changes
	  function handleImageInputChanges(e: any) {
		handleFileChange(e);
		convertToBase64(e);  
	  }
	  
    return <div id="upload" className="modal" data-state="0" data-ready="false">
	<div className="modal__header">
		<button className="modal__close-button" type="button">
			<svg className="modal__close-icon" viewBox="0 0 16 16" width="16px" height="16px" aria-hidden="true">
				<g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
					<polyline points="1,1 15,15" />
					<polyline points="15,1 1,15" />
				</g>
			</svg>
			<span className="modal__sr">Close</span>
		</button>
	</div>
	<div className="modal__body">
		<div className="modal__col">
			<svg className="modal__icon modal__icon--blue" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true">
				<g fill="none" stroke="hsl(223,90%,50%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<circle className="modal__icon-sdo69" cx="12" cy="12" r="11" strokeDasharray="69.12 69.12" />
					<polyline className="modal__icon-sdo14" points="7 12 12 7 17 12" strokeDasharray="14.2 14.2" />
					<line className="modal__icon-sdo10" x1="12" y1="7" x2="12" y2="17" strokeDasharray="10 10" />
				</g>
			</svg>
			<svg className="modal__icon modal__icon--red" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true" display="none">
				<g fill="none" stroke="hsl(3,90%,50%)" strokeWidth="2" strokeLinecap="round">
					<circle className="modal__icon-sdo69" cx="12" cy="12" r="11" strokeDasharray="69.12 69.12" />
					<line className="modal__icon-sdo14" x1="7" y1="7" x2="17" y2="17" strokeDasharray="14.2 14.2" />
					<line className="modal__icon-sdo14" x1="17" y1="7" x2="7" y2="17" strokeDasharray="14.2 14.2" />
				</g>
			</svg>
			<svg className="modal__icon modal__icon--green" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true" display="none">
				<g fill="none" stroke="hsl(138,90%,50%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<circle className="modal__icon-sdo69" cx="12" cy="12" r="11" strokeDasharray="69.12 69.12" />
					<polyline className="modal__icon-sdo14" points="7 12.5 10 15.5 17 8.5" strokeDasharray="14.2 14.2" />
				</g>
			</svg>
		</div>
		<div className="modal__col">
			<div className="modal__content">
				<h2 className="modal__title">Upload a File</h2>
				<p className="modal__message">Select a file to upload from your computer or device.</p>
				<div className="modal__actions">
					<button className="modal__button modal__button--upload" type="button" data-action="file" onClick={handleChooseFileClick}>Choose File</button>
					<input className='fileInputImageUploader' id="file" type="file" name='upload' multiple onChange={handleImageInputChanges} hidden/>
				</div>
			</div>
		</div>
	</div>
	<div className="modal__body">
		<div className='selectedImagesContainer'>
		{selectedImages.map((image, index) => (
			<div className='selected-item'>
			<img
			className='selected-image'
            key={index}
            src={URL.createObjectURL(image)}
            alt={`Uploaded ${index}`}
            width="150"
            height="150"
          />
			<div className='selected-image-info'>
				<ul className='selected-image-list'>
					<li className='selected-image-delete'>
						<span className='selected-image-hidden-delete' onClick={() => handleImageDelete(index)}>
							<FontAwesomeIcon icon={faTrashAlt} aria-hidden="true" />
						</span>
					</li>
				</ul>
			</div>
		</div>
        ))}
		<button className='uploadButton' onClick={uploadImages}> upload </button>
		</div>
       
      </div>
</div>
}
export default ImageUploader