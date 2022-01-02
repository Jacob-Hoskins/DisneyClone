import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommended for You</h4>
            {/* putting the content component will help us in css make the grid
                and style our stuff */}
            <Content>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6A7F6C940FBD19A243E207069D16077FF0E53A519ED7D4892E7B8762834B74A6/scale?width=1200&aspectRatio=1.78&format=jpeg" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6A7F6C940FBD19A243E207069D16077FF0E53A519ED7D4892E7B8762834B74A6/scale?width=1200&aspectRatio=1.78&format=jpeg" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6A7F6C940FBD19A243E207069D16077FF0E53A519ED7D4892E7B8762834B74A6/scale?width=1200&aspectRatio=1.78&format=jpeg" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6A7F6C940FBD19A243E207069D16077FF0E53A519ED7D4892E7B8762834B74A6/scale?width=1200&aspectRatio=1.78&format=jpeg" />
                </Wrap>

            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
    
`
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr))

`

const Wrap = styled.div`
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;

    }
// dont forget &: just conects hover to the parent element
    &:hover{
        transfor: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadown: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 /72%) 0px 30px 22px -10px;
    }
`