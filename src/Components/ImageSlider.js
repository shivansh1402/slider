import React, { useState , useEffect } from 'react'
import logo1 from '../images/image1.jpg'
import logo2 from '../images/image2.jpeg'
import logo3 from '../images/image3.jpg'
import logo4 from '../images/image4.jpg'
import logo5 from '../images/image5.jpg'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import styles from './ImageSlider.css'




const ImageSlider = () => {

    const SliderData = [logo1, logo2, logo3, logo4, logo5]

    const [current, setCurrent] = useState(0)

    const length = SliderData.length

    const nextSlide = () => {

        setCurrent(prevValue => {
            if (prevValue === length - 1) {
                return 0
            } else { return prevValue + 1 }
        })
    }

    const prevSlide = () => {

        setCurrent(prevValue => {
            if (prevValue === 0) {
                return length - 1
            } else { return prevValue - 1 }
        })
    }

    setInterval(() => {
        nextSlide()
    } , 4000)
    

    if (!Array.isArray(SliderData) || length <= 0) {

        return null
    }

    return (
        <div>

            <section className='slider'>

                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />

                {SliderData.map((slide, index) => {
                    return (
                        <div className={current === index ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img src={slide} alt='image' className='image' />)}
                        </div>

                    )
                })}

            </section>
        </div>
    )
}

export default ImageSlider