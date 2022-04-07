import React from 'react'
import { Routes, Route } from 'react-router-dom'

import image01 from '../imgs/img01.jpg'
import image02 from '../imgs/img02.jpg'
import image03 from '../imgs/img03.jpg'
import image04 from '../imgs/img04.jpg'

import ImagePage from '../pages/ImagePage'
import ImageSelectionPage from '../pages/ImageSelectionPage'
import ScoreBoardPage from '../pages/ScoreBoardPage'

function App() {
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

  const selectImage = (choice) => {
    console.log(choice)
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ImageSelectionPage
            selectImage={selectImage}
            imgObjArray={imgObjArray}
          />
        }
      />
      <Route path="image" element={<ImagePage />} />
      <Route path="score" element={<ScoreBoardPage />} />
    </Routes>
  )
}

export default App
