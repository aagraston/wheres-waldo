import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import image01 from '../imgs/img01.jpg'
import image02 from '../imgs/img02.jpg'
import image03 from '../imgs/img03.jpg'
import image04 from '../imgs/img04.jpg'

import ImagePage from '../pages/ImagePage'
import ImageSelectionPage from '../pages/ImageSelectionPage'
import ScoreBoardPage from '../pages/ScoreBoardPage'

import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  setDoc,
  doc,
  getDocs,
  collection,
  addDoc,
  query,
  where,
  limit,
} from 'firebase/firestore'

function App() {
  const firebaseConfig = {
    apiKey: 'AIzaSyDz4MbQ7qk1LDMQKk3FSs9-4XCyOn_O0BI',
    authDomain: 'wheres-waldo-6ad91.firebaseapp.com',
    projectId: 'wheres-waldo-6ad91',
    storageBucket: 'wheres-waldo-6ad91.appspot.com',
    messagingSenderId: '923117726354',
    appId: '1:923117726354:web:0c980a0644ebeecd30944b',
  }

  const app = initializeApp(firebaseConfig)

  const firestore = getFirestore()

  const navigate = useNavigate()
  const firstMount = useRef(true)

  const imgArray = [image01, image02, image03]
  const imgObjArray = []

  const [curImage, setCurImage] = useState({})
  const [curData, setCurData] = useState([])

  imgArray.forEach((e, index) => {
    const imageObj = {
      image: e,
      id: index,
    }
    imgObjArray.push(imageObj)
  })

  //write the data needed to firestore
  const imageCollection = collection(firestore, 'imageDat')

  const queryForDocument = async (id) => {
    const imageQuery = query(
      collection(firestore, 'imageDat'),
      where('imgId', '==', id),
      limit(1)
    )
    const retDocDat = await getDocs(imageQuery)
    let retDoc = null
    retDocDat.forEach((doc) => {
      retDoc = doc.data()
    })
    return retDoc
  }

  async function writeData() {
    const imgData1 = {
      imgId: 0,
      data: [
        { name: 'Waldo', xloc: 251, yloc: 820.3 },
        { name: 'Wilma', xloc: 1135, yloc: 738.7 },
      ],
    }

    const imgData2 = {
      imgId: 1,
      data: [
        { name: 'Waldo', xloc: 936, yloc: 341.25 },
        { name: 'Wizard Whitebeard', xloc: 397, yloc: 324.25 },
        { name: 'Odlaw', xloc: 145, yloc: 317.25 },
      ],
    }

    const imgData3 = {
      imgId: 2,
      data: [
        { name: 'Wizard Whitebeard', xloc: 445.5, yloc: 407 },
        { name: 'Wilma', xloc: 422.5, yloc: 636.25 },
        { name: 'Odlaw', xloc: 1379.5, yloc: 562.26 },
        { name: 'Waldo', xloc: 1441.5, yloc: 67.26 },
      ],
    }

    await addDoc(imageCollection, imgData1, { merge: true })
    await addDoc(imageCollection, imgData2, { merge: true })
    await addDoc(imageCollection, imgData3, { merge: true })
  }

  const findImageObj = (id) => {
    return imgObjArray.filter((obj) => {
      return obj.id === id
    })
  }

  const selectImage = async (choice) => {
    const setToThis = findImageObj(choice)

    const dat = await queryForDocument(choice)
    console.log(dat)

    if (setToThis !== undefined) {
      setCurImage(setToThis)
    }

    setCurData(dat)
  }

  useEffect(() => {
    if (firstMount.current !== true) {
      navigate('image')
    } else {
      firstMount.current = false
    }
  }, [curData])

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
      <Route
        path="image"
        element={<ImagePage curImage={curImage} curData={curData} />}
      />
      <Route path="score" element={<ScoreBoardPage />} />
    </Routes>
  )
}

export default App
