import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'

const data = [
  {
    id: 1,
    img: './image/Huawei.jpg',
    color: 'linear-gradient(to right,#000, #999)'
  },
  {
    color: 'linear-gradient(to right,#00f, #999)',
    id: 2,
    img: './image/iphone.jpg'
  },
  {
    color: 'linear-gradient(to right,#f00, #999)',
    id: 3,
    img: './image/oppo.jpg'
  },
  {
    color: 'linear-gradient(to right,#92fc08, #999)',
    id: 4,
    img: './image/samsung.jpg'
  }
]

export default function navbar() {
  let imgRef = useRef( null )
  let img = './image/Huawei.jpg'
  
  const changeTheme = (src, color) => {
    imgRef.current.src = src
    document.body.style.backgroundImage = color 
  }
  
  return (
    <>
      <header>
        <Link href='#'>zoom</Link>
        <ul>
          <li><Link href='#'>home</Link></li>
          <li><Link href='#'>about us</Link></li>
          <li><Link href='#'>infomation</Link></li>
          <li><Link href='#'>contact us</Link></li>
        </ul>
      </header>
      <section className='content'>
        <div className='text'>
          <h2 >the phones</h2>
          <p>
            There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain          </p>
        </div>
        <div className='logo'>
          <img  src={ img } className='img' alt=''  ref={ imgRef} />
        </div>
      </section>
      <aside className='aside'>
        {
          data.map(item => (
            <img 
              src={item.img} 
              alt='' 
              key={item.id} 
              onClick={(src) => changeTheme(item.img, item.color) } />
          ))
        }
      </aside>
    </>
  )
}
