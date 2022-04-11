import React, { useState } from 'react'
import CharSelector from '../components/CharSelector'

function ImagePage(props) {
  const { curImage } = props
  let imgSrc = ''

  if (curImage[0] !== undefined) {
    imgSrc = curImage[0].image
  }

  const dummyDat = [
    { name: 'waldo', xloc: 251, yloc: 820.3 },
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

  const [imageClicked, setImageClicked] = useState(false)

  const errorMargin = 10

  const determinePoint = (e) => {
    setImageClicked(true)

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

    checkForFound('waldo')

    console.log(`${imgClickX} ${imgClickY}`)
  }

  const checkForFound = (character) => {
    const currentlyClicked = curClickedPoint
    //check for selected character
    const charDat = dummyDat.filter((obj) => {
      return obj.name === character
    })
    if (charDat !== undefined) {
      let curChar = charDat[0]
      if (
        currentlyClicked.x > curChar.xloc - errorMargin &&
        currentlyClicked.x < curChar.xloc + errorMargin &&
        currentlyClicked.y > curChar.yloc - errorMargin &&
        currentlyClicked.y < curChar.yloc + errorMargin
      ) {
        console.log('you found Waldo!')
      } else {
        console.log(`no, this is't waldo`)
      }
    }
  }

  return (
    <div className="image-page-container">
      <CharSelector />
      <h1>Find Waldo, Odlaw and Wizard Whitebeard</h1>
      <div className="image-page-image-container">
        <img src={imgSrc} width="1500px" onClick={determinePoint} />
      </div>
    </div>
  )
}

export default ImagePage
