import React from 'react'
import uniqid from 'uniqid'

function ImageSelectionPage(props) {
  const { selectImage, imgObjArray } = props

  return (
    <div className="image-selection-page-container">
      <h1>Where's Waldo?</h1>
      <p>Select an image to play!</p>
      <div className="image-selection-container">
        {imgObjArray.map((obj) => (
          <div key={uniqid()} className="image-selection-card">
            <div className="image-selection-image">
              <img src={obj.image} onClick={selectImage.bind(this, obj.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSelectionPage
