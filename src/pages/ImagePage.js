import React, { useState } from 'react'
import CharSelector from '../components/CharSelector'

function ImagePage(props) {
  const { curImage } = props
  let imgSrc = ''

  if (curImage[0] !== undefined) {
    imgSrc = curImage[0].image
  }

  const dummyDat = [
    { name: 'Waldo', xloc: 251, yloc: 820.3 },
    {
      name: 'Wilma',
      xloc: 1135,
      yloc: 738.7,
    },
  ]

  let curClickedPoint = {
    x: 0,
    y: 0,
  }

  const errorMargin = 10

  const [imageClicked, setImageClicked] = useState(false)
  const [foundChars, setFoundChars] = useState([])

  const allChars = []

  dummyDat.forEach((dat) => {
    allChars.push(dat.name)
  })

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

    checkForFound('Waldo')

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
        console.log(`you found ${character}!`)
      } else {
        console.log(`no, this is't ${character}`)
      }
    }
  }

  return (
    <div className="image-page-container">
      <CharSelector
        allChars={allChars}
        imageClicked={imageClicked}
        checkForFound={checkForFound}
        foundChars={foundChars}
      />
      <h1>Find Waldo, Odlaw and Wizard Whitebeard</h1>
      <div className="image-page-image-container">
        <img src={imgSrc} width="1500px" onClick={determinePoint} />
      </div>
    </div>
  )
}

export default ImagePage
