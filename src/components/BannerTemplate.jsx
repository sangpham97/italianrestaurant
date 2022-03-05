import React from 'react'

export default function BannerTemplate({ bgImage, children, height }) {
  return (
    <div
      style={{
        backgroundAttachment: 'fixed',
        height: `${height}`,
        padding: '30px 0',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `linear-gradient(
      0deg,
      rgba(19, 17, 17, 0.5),
      rgba(19, 17, 17, 0.5)
    ),
    url(${bgImage})`,
      }}
    >
      {children}
    </div>
  )
}
