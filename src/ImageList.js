import React from "react";

const ImageList = (props) => {

  const images = props.imagesArray.map(image => {
    return <img key={image.id} src={image.urls.regular} alt={image.alt_description}/>
  })

  console.log(images);
  
  return(
    <div>{images}</div>
  );
}

export default ImageList;