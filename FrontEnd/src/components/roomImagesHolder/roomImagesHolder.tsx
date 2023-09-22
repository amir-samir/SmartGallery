import './roomImagesHolder.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import swal from 'sweetalert';

function RoomImagesHolder() {
  return <div className='room-images-container'>
            <h1 className='room-images-title'>Living Room Gallery</h1>
            <hr className='room-images-gallery-devider'/>
            <div className='room-images-gallery'>
                <div className='room-images-gallery-item'>
                    <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="room-gallery-image" alt=""/>
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
                <div className='room-images-gallery-item'>
                    <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="room-gallery-image" alt=""/>
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
                <div className='room-images-gallery-item'>
                    <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="room-gallery-image" alt=""/>
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
                <div className='room-images-gallery-item'>
                    <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="room-gallery-image" alt=""/>
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
                <div className='room-images-gallery-item'>
                    <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="room-gallery-image" alt=""/>
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
                <div className='room-images-gallery-item'>
                    <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="room-gallery-image" alt=""/>
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
                <div className='room-images-gallery-item'>
                    <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="room-gallery-image" alt=""/>
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
                <div className='room-images-gallery-item'>
                    <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="room-gallery-image" alt=""/>
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
                <div className='room-images-gallery-item'>
                    <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="room-gallery-image" alt=""/>
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
            </div>

  </div>
}
export default RoomImagesHolder
