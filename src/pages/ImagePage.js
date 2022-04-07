import React from 'react'
function ImagePage(props) {
  const { curImage } = props
  let imgSrc = ''

  if (curImage[0] !== undefined) {
    imgSrc = curImage[0].image
  }

  const determinPoint = (e) => {
    const targ = e.target
    const clickX = e.clientX
    const clickY = e.clientY
    const boundingRect = targ.getBoundingClientRect()
    const imgX = boundingRect.x
    const imgY = boundingRect.y

    const imgClickX = clickX - imgX
    const imgClickY = clickY - imgY

    console.log(`${imgClickX} ${imgClickY}`)

    console.log(targ.getBoundingClientRect())
  }

  return (
    <div className="image-page-container">
      <h1>Find Waldo, Odlaw and Wizard Whitebeard</h1>
      <div className="image-page-image-container">
        <img src={imgSrc} width="1500px" onClick={determinPoint} />
      </div>
    </div>
  )
}

export default ImagePage
