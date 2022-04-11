import React from 'react'
function ImagePage(props) {
  const { curImage } = props
  let imgSrc = ''

  if (curImage[0] !== undefined) {
    imgSrc = curImage[0].image
  }

  const dummyDat = [
    { name: 'waldo', xloc: 252, yloc: 120.7 },
    {
      name: 'wilma',
      xloc: 1135,
      yloc: 738.7,
    },
  ]

  let curClickedPoint = {
    x: 0,
    y: 0,
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

    curClickedPoint = {
      x: imgClickX,
      y: imgClickY,
    }

    console.log(`${imgClickX} ${imgClickY}`)
  }

  const checkForFound = (character, pointObject) => {
    //check for selected character
    const charDat = dummyDat.filter((obj) => {
      obj.name === character
    })
    if (charDat !== undefined) {
    }
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
