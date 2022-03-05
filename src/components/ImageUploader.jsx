import React, { useRef } from 'react'

export default function ImageUploader({ setImage, image, setUrl }) {
  const fileSelect = useRef(null)

  async function handleImageUpload() {
    if (fileSelect) {
      fileSelect.current.click()
    }
  }

  const handleFile = (file) => {
    setImage(file)
    if (image) {
      uploadImage()
    }
  }

  const uploadImage = () => {
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'restaurantitalian')
    data.append('cloud_name', 'phamsang')
    fetch('https://api.cloudinary.com/v1_1/phamsang/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div
      className='bg-gray-200 border-4 border-dashed border-gray-400 rounded-lg flex items-center justify-center'
      style={{ height: 200, width: 'auto' }}
    >
      <div className='text-gray-700 text-center'>
        <button
          className='bg-blue-600 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded block m-auto'
          onClick={handleImageUpload}
          type='button'
        >
          Browse
        </button>
      </div>

      <input
        ref={fileSelect}
        type='file'
        style={{ display: 'none' }}
        accept='.png,.jpeg,.jpg'
        onChange={(e) => handleFile(e.target.files[0])}
      />
    </div>
  )
}
