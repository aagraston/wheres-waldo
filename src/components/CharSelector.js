import React, { useState, useEffect } from 'react'

function CharSelector(props) {
  const { allChars, selectorOpen, checkForFound, foundChars, clickedPoint } =
    props

  function showModal() {}

  const [closeClass, setCloseClass] = useState('closed')
  const [posStyles, setPosStyles] = useState({ top: 0 + 'px', left: 0 + 'px' })

  useEffect(() => {
    if (!selectorOpen) {
      setCloseClass('')
      setPosStyles({ top: clickedPoint.y + 'px', left: clickedPoint.x + 'px' })
    }
  }, [clickedPoint])

  const selectableChars = []

  allChars.forEach((char) => {
    if (!foundChars.includes(char)) {
      selectableChars.push(char)
    } else {
      //do nothing
    }
  })

  return (
    <div className={'drop-down-container' + ' ' + closeClass} style={posStyles}>
      {selectableChars.map((char) => (
        <div
          className="drop-down-selection"
          onClick={checkForFound.bind(this, char)}
        >
          <p>{char}</p>
        </div>
      ))}
    </div>
  )
}

export default CharSelector
