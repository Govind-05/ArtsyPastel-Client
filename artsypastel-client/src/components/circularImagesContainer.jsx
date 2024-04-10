import React from 'react'
import Image from 'next/image';

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
        <div className="circle-container hidden md:block" style={containerStyle} >
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
    
            return <Image key={index} src={image} alt={`Image ${index}`} width={64} height={64} style={{...imageStyle,display:(index === 2 || index === 3 || index === 4 || index === 5)&&"none"}} className={((index === 1 || index === 3 || index === 6 || index === 8 || index === 11 || index === 13) ? "spinner" : undefined) } />;
          })}
        </div>
      );
}

export default circularImagesContainer