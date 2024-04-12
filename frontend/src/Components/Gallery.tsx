import React from 'react'
import StyledTitle from './StyledTitle'
import Title from './Title'
import img1 from '../assets/images/gallery-01.jpg'
import img2 from '../assets/images/gallery-02.jpg'
import img3 from '../assets/images/gallery-03.jpg'
import img4 from '../assets/images/gallery-04.jpg'
import img5 from '../assets/images/gallery-05.jpg'
import img6 from '../assets/images/gallery-06.jpg'
import img7 from '../assets/images/gallery-07.jpg'

function Gallery() {
  return (
    <div className="content">
        <div className="head mb-8">
            <StyledTitle title={"gallery"} />
            <Title title={"visit our custumers"} spanTitle={"tour gallery."} />
        </div>
        <div className="imgs-content">
            <div className="grid-item">
              <img className='img-1' src={img1} alt="memory" />
            </div>
            <div className="grid-item">
              <img className='img-2' src={img7} alt="memory" />
            </div>
            <div className="grid-item">
              <img className='img-4' src={img4} alt="memory" />
            </div>
            <div className="grid-item">
              <img className='img-5' src={img5} alt="memory" />
            </div>
            <div className="grid-item">
              <img className='img-3' src={img3} alt="memory" />
            </div>
            <div className="grid-item">
              <img className='img-6' src={img7} alt="memory" />
            </div>
            <div className="grid-item">
              <img className='img-7' src={img6} alt="memory" />
            </div>
            <div className="grid-item">
              <img className='img-8' src={img2} alt="memory" />
            </div>
            <div className="grid-item">
              <img className='img-5' src={img5} alt="memory" />
            </div>
            <div className="grid-item">
              <img className='img-7' src={img6} alt="memory" />
            </div>
            <div className="grid-item">
              <img className='img-8' src={img2} alt="memory" />
            </div>
        </div>
    </div>
  )
}

export default Gallery