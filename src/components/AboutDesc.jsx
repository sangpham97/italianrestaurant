import React from 'react'

export default function AboutDesc() {
  return (
    <div className='mx-auto max-w-screen-xl py-20 '>
      <div className='grid grid-cols-1 md:grid-cols-7 gap-3 md:gap-6'>
        <div className='md:col-span-3 space-y-8 px-5 flex flex-col items-center justify-center'>
          <img
            src='https://websitedemos.net/italian-restaurant-01/wp-content/uploads/sites/288/2021/03/parcelli.png'
            alt=''
          />
          <h3 className='text-4xl tracking-wide font-serif'>
            Our restaurant is a collective of amazing people striving to build
            delightful Italian Cuisine.
          </h3>
          <p className='text-gray-700 tracking-wide text-md'>
            Lectus fringilla occaecat iste pretium fugiat convallis a, veniam
            conubia qui leo quod sodales! Nemo hendrerit laborum, error!
            Reiciendis, voluptas officiis, placerat ratione blanditiis!
            Habitasse dui proin cupidatat fringilla, ipsum dolor quidem,
            convallis nam, nulla quis optio, iure pellentesque sociosqu saepe
            explicabo similique placeat odit tempore tenetur litora, impedit
            sollicitudin mus deleniti, recusandae anim quo. Rel nulla pulvinar
            montes suspendisse, turpis. Elementum nibh, autem nulla ullam,
            proident, hac ratione platea! Libero nam, harum quisque turpis fames
            sollicitudin blanditiis est aliquam aptent blandit class, occaecat!
            Fames.
          </p>
        </div>

        <div className='md:col-span-2 px-5 md:px-0'>
          <img
            src='https://websitedemos.net/italian-restaurant-01/wp-content/uploads/sites/288/2020/01/Serving-chef.jpg'
            alt=''
            className='rounded-lg w-full h-full shadow-lg'
          />
        </div>
        <div className='md:col-span-2 space-y-4 hidden md:block'>
          <img
            src='https://websitedemos.net/italian-restaurant-01/wp-content/uploads/sites/288/2020/01/Red-wine-img.jpg'
            alt=''
            className='shadow-lg  rounded-lg'
          />
          <img
            src='https://websitedemos.net/italian-restaurant-01/wp-content/uploads/sites/288/2020/02/pic34-free-img-o8mber8yudr26qzmrtm45h9j0sz2g5ol7km7c8jeko.jpg'
            alt=''
            className='shadow-lg rounded-lg'
          />
        </div>
      </div>
    </div>
  )
}
