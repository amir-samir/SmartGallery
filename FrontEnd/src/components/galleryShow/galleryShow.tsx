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
        var sX:any, sY:any, nX, nY, desX = 0,
        desY = 0,
        tX = 0,
        tY = 10;
        // let sX, sY, nX, nY, desX = 0, desY = 0;
        // let timer: any;
        // const odrag = document.getElementById('drag-container');
        // const ospin = document.getElementById('spin-container');
        // const aImg = ospin?.getElementsByTagName('img') || [];
        // const aVid = ospin?.getElementsByTagName('video') || [];
        // const aEle = [...aImg, ...aVid]; // combine 2 arrays

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

        function applyTransform(obj: any){
            // Constrain the angle of the camera (between 0 and 180)
            if (tY > 180) tY = 180;
            if (tY < 0) tY = 0;

            // Apply the angle
            obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
        }

        function playSpin(yes: boolean){
                ospin!.style.animationPlayState = yes ? 'running' : 'paused';            
            }

        // auto spin
        if (autoRotate) {
          var animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
            ospin!.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
        }

        // // setup events
        // document.onpointerdown = (e) => {
        // //   clearInterval(odrag!.timer);
        //   e = e || window.event;
        //   var sX = e.clientX,
        //       sY = e.clientY;
  
        //   document.onpointermove = (e) => {
        //     e = e || window.event;
        //     var nX = e.clientX,
        //         nY = e.clientY;
        //     desX = nX - sX;
        //     desY = nY - sY;
        //     tX += desX * 0.1;
        //     tY += desY * 0.1;
        //     applyTransform(odrag);
        //     sX = nX;
        //     sY = nY;
        //   };

        //   document.onpointerup = () => {
        //     odrag?.timer = setInterval(() => {
        //       desX *= 0.95;
        //       desY *= 0.95;
        //       tX += desX * 0.1;
        //       tY += desY * 0.1;
        //       applyTransform(odrag);
        //       playSpin(false);
        //       if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        //         clearInterval(odrag?.timer);
        //         playSpin(true);
        //       }
        //     }, 17);
        //     document.onpointermove = document.onpointerup = null;
        //   };
  
        //   return false;
        // };
  
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