import { useEffect, useState } from 'react';
import './imageUploader.css'



function ImageUploader() {
	const [fileSelected, setFileSelected] = useState(false);
	const handleChooseFileClick = () => {
		const fileInput = document.getElementById('file');
		if (fileInput) {
		  fileInput.click(); // Programmatically trigger a click event on the hidden input
		}
	  };
	  const handleFileInputChange = (e:any) => {
		// Check if a file has been selected
		setFileSelected(e.target.files.length > 0);
	  };
	useEffect(() => {
		return () => {
		  // Cleanup code if needed
		  
		  
		};
	  }, []);
	  
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
					<input className='fileInputImageUploader' id="file" type="file" onChange={handleFileInputChange} hidden/>
	  					
				</div>
			</div>
		</div>
	</div>
</div>
}
export default ImageUploader