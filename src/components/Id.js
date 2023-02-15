import React from 'react';
import { Link } from 'react-router-dom';
import './Id.css';

function Id(property) {
  return (
    
    <div className="id">
      
      <img className="id__image"src="https://media.istockphoto.com/id/1171169127/photo/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=yqAKmCqnpP_T8M8I5VTKxecri1xutkXH7zfybnwVWPQ=" alt="" srcset="" />


    <div className="id__name">{property.name}</div>

    <spam className="id__designation">
      {property.designation}
    </spam>
    <div className="id__info">
      {property.intro}
    </div>

    
    </div>
  
  )
}

export default Id
