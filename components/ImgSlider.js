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
        autoplay: true
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

    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    //when the li has a active button
    li.slick-active button:before{
        color: white;
    }

    .slick-list{
        overflow: visible;
    }

    button{
        z-index: 1;
    }


`

const Wrap = styled.div`
    cursor: pointer;

    img{
        border: 4px solid transparent;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover{
            border: 4px solid rgb(249, 249, 249, 0.8);
        }

    }
`