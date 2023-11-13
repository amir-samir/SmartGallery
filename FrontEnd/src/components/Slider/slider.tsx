import React, { useEffect, useState } from "react";
import HeroSlider, { AutoplayButton, Overlay, Slide } from "hero-slider";
import { BackgroundProps } from "hero-slider/dist/components/Slide/Background";
import { useNavigate } from "react-router-dom";

import './slider.css'

interface Image {
  _id: string;
  imageName: string;
  category: string;
  image: string;
}

interface WeatherInfo {
  name?: string;
  sys?: { country?: string };
  main?: { temp?: number };
  weather?: [{ description?: string }];
}

const weatherApi = {
  key: "3eebcdbd65b5e2b19f3cf53414e590e6",
  base: "https://api.openweathermap.org/data/2.5/"
}

function Slider() {
  const [images, setImages] = useState<Image[]>([]);
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);

  // Fetch weather information and store it in state
  useEffect(() => {
    fetch(`${weatherApi.base}weather?q=munich&units=metric&APPID=${weatherApi.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeatherInfo(result);
      });
  }, []);

  useEffect(() => {
    async function getImages() {
      try {
        const response = await fetch("http://localhost:5083/getImages", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setImages(data.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    getImages();
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      // 27 ist keycode für ESC
      if (event.keyCode === 27) {
        navigate(-1);
      }
    };

    window.addEventListener("keydown", handleEsc);


    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
 },[navigate]);

  return (
    <section>
    <div>
      {weatherInfo && (
        <div className="weatherWrapper">
          <p className="weatherLocation">{weatherInfo.name}, {weatherInfo.sys?.country}</p>
          <p className="weatherTemp">{weatherInfo.main?.temp} °C</p>
          <p className="weatherDesc">{weatherInfo.weather?.[0]?.description}</p>
        </div>
      )}
      </div>



    <HeroSlider
      height="100vh"
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 250,
        slidingDelay: 100,
        onSliding: (nextSlide) => console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide: number, nextSlide: number) => console.debug(
          "onBeforeSliding(previousSlide, nextSlide): ",
          previousSlide,
          nextSlide
        ),
        onAfterSliding: (nextSlide: number) => console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      {images.map((data) => (
        <Slide
          key={data._id}
          background={{
            backgroundImage: `url(${data.image})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          } as BackgroundProps} />
      ))}
      <Overlay>
        <AutoplayButton />
      </Overlay>
    </HeroSlider>
    </section>
  );
}

export default Slider;
