import React, { useEffect, useState } from "react";
import ImagesCard from "./ImagesCard";
import axios from "axios";

const ImagesFetch = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?page=3&limit=132")
      .then((res) => {
        setImages(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <>
      {images.map((images) => (
        <ImagesCard
          key={images.id}
          image={
            <img
              key={images.id}
              src={images.download_url}
              height={300}
              width={300}
              alt="picsum"
            />
          }
        />
      ))}
    </>
  );
};

export default ImagesFetch;
