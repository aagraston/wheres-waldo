import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import image01 from '../imgs/img01.jpg'
import image02 from '../imgs/img02.jpg'
import image03 from '../imgs/img03.jpg'
import image04 from '../imgs/img04.jpg'

import ImagePage from '../pages/ImagePage'
import ImageSelectionPage from '../pages/ImageSelectionPage'
import ScoreBoardPage from '../pages/ScoreBoardPage'

function App() {
  const navigate = useNavigate()
  const firstMount = useRef(true)

  const imgArray = [image01, image02, image03, image04]
  const imgObjArray = []

  const [curImage, setCurImage] = useState({})

  imgArray.forEach((e, index) => {
    const imageObj = {
      image: e,
      id: index,
    }
    imgObjArray.push(imageObj)
  })

  const findImageObj = (id) => {
    return imgObjArray.filter((obj) => {
      return obj.id === id
    })
  }

  const selectImage = (choice) => {
    const setToThis = findImageObj(choice)
    if (setToThis !== undefined) {
      setCurImage(setToThis)
    }
  }

  useEffect(() => {
    if (firstMount.current !== true) {
      navigate('image')
    } else {
      firstMount.current = false
    }
  }, [curImage])

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
      <Route path="image" element={<ImagePage curImage={curImage} />} />
      <Route path="score" element={<ScoreBoardPage />} />
    </Routes>
  )
}

export default App
