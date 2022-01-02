import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//slick/ the carousel will let the slider slide through the pictures


function ImgSlider() {
    let settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src='/DisClonePictures/slider-badging.jpg' alt='' />
            </Wrap>
            <Wrap>
                <img src='/DisClonePictures/slider-badag.jpg' alt='' />
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

//here you are giving the slider to the component instead of adding it in and styling it yourself
const Carousel = styled(Slider)`
    margin-top: 20px;

    .slick-list{
        overflow: visible;
    }

`

const Wrap = styled.div`
    img{
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    }
`