//Gallery show Example
import { useEffect, useRef, useState } from 'react';
import './galleryShow.css';

function GalleryShow() {
    var radius = 240;
    var autoRotate = true;
    var rotateSpeed = -60;
    var imgWidth = 120;
    var imgHeight = 170;
    const timerRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        setTimeout(init, 1000)
        var odrag = document.getElementById('drag-container');
        var ospin = document.getElementById('spin-container');
        var aImg = ospin?.getElementsByTagName('img') || [];
        var aVid = ospin?.getElementsByTagName('video') || [];
        var aEle = [...aImg, ...aVid]; // combine 2 arrays

        //Size of images
        ospin!.style.width = imgWidth + "px";
        ospin!.style.height = imgHeight + "px";

        //Size of ground - depend on radius
        const ground = document.getElementById('ground');
        ground!.style.width = radius * 3 + "px";
        ground!.style.height = radius * 3 + "px";
        function init(delayTime: any){
            for (let i = 0; i < aEle.length; i++){
                    aEle[i]!.style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
                    aEle[i]!.style.transition = "transform 1s";
                    aEle[i]!.style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
            }
        }

        // auto spin
        if (autoRotate) {
          var animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
            ospin!.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
        }

        document.onwheel = (e) => {
          e = e || window.event;
          const d = e.deltaY / 20 || -e.detail;
          radius += d;
          init(1);
        };

  
      // Initialize after 1000 milliseconds
      setTimeout(() => init(1), 1000);

    }, []);

    return <div className='show-drag-container' id='drag-container'>
               <div className='show-spin-container' id='spin-container'>
                <img src="/thailand.png" alt=""/>
                <img src="/kid1.png" alt=""/>
                <img src="/winter1.png" alt=""/>
                <img src="/winter2.png" alt=""/>
                <img src="/fatherAndSon.png" alt=""/>
                <img src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                <video controls autoPlay={true} loop>
                    <source src="https://player.vimeo.com/external/322244668.sd.mp4?s=338c48ac2dfcb1d4c0689968b5baf94eee6ca0c1&profile_id=165&oauth2_token_id=57447761" type="video/mp4"/>
                </video>

               </div>
               <div className='show-ground' id='ground'>
               </div> 
    </div>
} 
export default GalleryShow;