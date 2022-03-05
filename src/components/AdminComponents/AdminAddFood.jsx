import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import ImageUploader from '../ImageUploader'
import TextField from '../TextField'

export default function AdminAddFood() {
  const { user } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [desc, setDesc] = useState('')
  const [type, setType] = useState('pasta')
  const [image, setImage] = useState('')
  const [url, setUrl] = useState('')

  const handleAddFood = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/food/create/' + user._id, {
        name: name,
        price: price,
        desc: desc,
        type: type,
        image: url,
      })
    } catch (error) {
      console.log(error)
    }
    location.reload()
  }

  const options = [
    {
      label: 'Pasta',
      value: 'pasta',
    },
    {
      label: 'Pizza',
      value: 'pizza',
    },
    {
      label: 'Platter',
      value: 'platter',
    },
  ]

  const handleChange = (e) => {
    setType(e.target.value)
  }

  return (
    <div className='shadow-md bg-white p-7 rounded-md'>
      <h4 className='text-2xl font-semibold capitalize '>Add Food</h4>

      <form className='mt-10 space-y-3' onSubmit={(e) => handleAddFood(e)}>
        <TextField type='text' placeHolder='Food Name' setOption={setName} />
        <TextField type='number' placeHolder='Price' setOption={setPrice} />
        <label className='mr-2'>Choose a type:</label>
        <select
          className='py-2 px-3 border border-gray-300'
          onChange={handleChange}
        >
          {options.map((item) => (
            <option value={item.value} key={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        {url ? (
          <img src={url} alt='' />
        ) : (
          <ImageUploader image={image} setImage={setImage} setUrl={setUrl} />
        )}

        <textarea
          className='mb-5 w-full p-1 border-2 border-gray-200'
          rows='6'
          placeholder='Description'
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <button
          className='bg-orange-600 text-md capitalize hover:bg-orange-500 rounded-sm px-4 py-2 text-white font-semibold'
          type='submit'
        >
          add
        </button>
      </form>
    </div>
  )
}
