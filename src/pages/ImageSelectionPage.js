import React from 'react'

import image01 from '../imgs/img01.jpg'
import image02 from '../imgs/img02.jpg'
import image03 from '../imgs/img03.jpg'
import image04 from '../imgs/img04.jpg'

function ImageSelectionPage() {
  const imgArray = [image01, image02, image03, image04]

  return (
    <div>
      <h1>Image Selector</h1>
      <div className="image-selection-container">
        {imgArray.map((img) => (
          <div className="image-selection-card">
            <div className="image-selection-image">
              <img src={img} width="900px" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSelectionPage
