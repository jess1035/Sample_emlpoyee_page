import React from 'react';


function Work(property) {
  return (
    <div className="work">
    
    <div className="zoomIn__dept">
            <b>{property.dept}</b>
              </div>
              <div className="zoomIn__workInfo">
              {property.info}
              </div>
              
    
    </div>
  )
}

export default Work
