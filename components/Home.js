import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'

function Home() {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
        </Container>
    )
}

export default Home

//tells google and browsers that this is the main content, its the same as div but browsers read this better
const Container = styled.main`
// min height will make the main content take up at minimum the rest of the page 
// 100 vertical height - 70 px for the nav bar

    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5pc);
    position: relative;
    overflow-x: hidden;

    &:before{
        background: url("/DisClonePictures/home-background.png") center center / cover 
        no-repeat fixed; 
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;

    }
`