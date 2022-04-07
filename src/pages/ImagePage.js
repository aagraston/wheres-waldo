import React from 'react'
function ImagePage(props) {
  const { curImage } = props
  let imgSrc = ''

  if (curImage[0] !== undefined) {
    imgSrc = curImage[0].image
  }

  return (
    <div className="image-page-container">
      <h1>Find Waldo, Odlaw and Wizard Whitebeard</h1>
      <div className="image-page-image-container">
        <img src={imgSrc} width="1500px" />
      </div>
    </div>
  )
}

export default ImagePage
