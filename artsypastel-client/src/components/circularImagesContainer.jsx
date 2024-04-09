import React from 'react'

function circularImagesContainer({images}) {
    const containerStyle = {
        position: 'absolute',
        width: '400px', // Change the size of the container as needed
        height: '400px',
        // margin: 'auto',
        zIndex:5,
        transform:"translateY(-50%)",
      };
    
      const angleStep = (2 * Math.PI) / images.length;
    
      return (
        <div className="circle-container" style={containerStyle} className='hidden md:block'>
          {images.map((image, index) => {
            const angle = index * angleStep;
            const x = Math.cos(angle) * 370 + 150; // Adjust radius as needed
            const y = Math.sin(angle) * 370 + 310; // Adjust radius as needed
            
            
            const imageStyle = {
              position: 'absolute',
              left: `${x}px`,
              top: `${y}px`,
              width:"5rem",
            };
    
            return <img key={index} src={image} alt={`Image ${index}`} style={imageStyle} className={( index==1 || index==3 || index==6 || index==8 || index==11|| index==13)&&"spinner"}/>;
          })}
        </div>
      );
}

export default circularImagesContainer