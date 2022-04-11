import React from 'react'

function CharSelector(props) {
  const { allChars, imageClicked, checkForFound, foundChars } = props

  const selectableChars = []

  allChars.forEach((char) => {
    if (!foundChars.includes(char)) {
      selectableChars.push(char)
    } else {
      //do nothing
    }
  })

  return (
    <div className="drop-down-container">
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
