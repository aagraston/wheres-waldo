import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ImagePage from '../pages/ImagePage'
import ImageSelectionPage from '../pages/ImageSelectionPage'
import ScoreBoardPage from '../pages/ScoreBoardPage'

function App() {
  const selectImage = (choice) => {
    console.log(choice)
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<ImageSelectionPage selectImage={selectImage} />}
      />
      <Route path="image" element={<ImagePage />} />
      <Route path="score" element={<ScoreBoardPage />} />
    </Routes>
  )
}

export default App
