import React from 'react'

import image01 from '../imgs/img01.jpg'
import image02 from '../imgs/img02.jpg'
import image03 from '../imgs/img03.jpg'
import image04 from '../imgs/img04.jpg'

function ImageSelectionPage(props) {
  const imgArray = [image01, image02, image03, image04]
  const imgObjArray = []

  imgArray.forEach((e, index) => {
    const imageObj = {
      image: e,
      id: index,
    }
    imgObjArray.push(imageObj)
  })

  console.log(imgObjArray)
  const { selectImage } = props

  return (
    <div className="image-selection-page-container">
      <h1>Where's Waldo?</h1>
      <p>Select an image to play!</p>
      <div className="image-selection-container">
        {imgObjArray.map((obj) => (
          <div className="image-selection-card">
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
