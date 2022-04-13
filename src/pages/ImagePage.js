import React, { useState, useEffect } from 'react'
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

  const [curClickedPoint, setClickedPoint] = useState({
    x: 0,
    y: 0,
  })

  const [curClickedPagePoint, setClickedPagePoint] = useState({
    x: 0,
    y: 0,
  })

  const errorMargin = 10

  const [selectorOpen, toggleSelectorOpen] = useState(true)
  const [foundChars, setFoundChars] = useState([])

  const allChars = []

  dummyDat.forEach((dat) => {
    allChars.push(dat.name)
  })

  const determinePoint = (e) => {
    const targ = e.target
    const clickX = e.clientX
    const clickY = e.clientY

    setClickedPagePoint({ x: clickX, y: clickY })
    const boundingRect = targ.getBoundingClientRect()
    const imgX = boundingRect.x
    const imgY = boundingRect.y

    const imgClickX = clickX - imgX
    const imgClickY = clickY - imgY

    setClickedPoint({
      x: imgClickX,
      y: imgClickY,
    })

    toggleSelector()

    console.log(`${imgClickX} ${imgClickY}`)
  }

  function toggleSelector() {
    if (selectorOpen) {
      toggleSelectorOpen(false)
    } else {
      toggleSelectorOpen(true)
    }
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
        setFoundChars((prev) => prev.concat(character))
      } else {
        console.log(`no, this is't ${character}`)
      }
    }
  }

  return (
    <div className="image-page-container">
      <CharSelector
        allChars={allChars}
        selectorOpen={selectorOpen}
        toggleSelectorOpen={toggleSelectorOpen}
        checkForFound={checkForFound}
        foundChars={foundChars}
        clickedPoint={curClickedPagePoint}
      />
      <h1>Find Waldo, Odlaw and Wizard Whitebeard</h1>
      <div className="found-list">
        <p>Characters Found:</p>
        {foundChars.map((char) => (
          <div>{char}</div>
        ))}
      </div>
      <div className="image-page-image-container">
        <img src={imgSrc} width="1500px" onClick={determinePoint} />
      </div>
    </div>
  )
}

export default ImagePage
