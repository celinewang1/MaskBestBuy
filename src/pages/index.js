import React from 'react'
import { Link } from 'gatsby'
import {
  Featured,
  Background,
  Hero,
  OurMasks,
  LargeButton,
  ViewMasksHover,
  HeroImage3Buttons,
  HeroImageButton,
  HeroImageText,
  ImageButtonsGridContainer,
  ImageButtonsGridItem,
  SecondGridContainer,
  SecondGridItem1,
  SecondGridItem2,
  SecondGridItem3,
  Title,
  Links
} from './styles'



const IndexPage = () => {
  return (
    <>
    <Hero>
      <Title>Masks For All</Title>
       <center><Link to="/face-masks/">
     <LargeButton>BUY MASKS</LargeButton>
      </Link></center>

      <ImageButtonsGridContainer>
        <ImageButtonsGridItem>Protect Your Family</ImageButtonsGridItem>
        <ImageButtonsGridItem>Protect Yourself</ImageButtonsGridItem>
        <ImageButtonsGridItem>Protect Others</ImageButtonsGridItem>
      </ImageButtonsGridContainer>

      <SecondGridContainer>
        <SecondGridItem3>hello</SecondGridItem3>
        <SecondGridItem1>Our Masks</SecondGridItem1>
        <SecondGridItem2>We supply Level 2 medical face masks worn by doctors, nurses, and medical professionals.  These masks are now available to the general public.  
        <br></br>
        - ASTM Level 2 Rated Medical Face Masks
        <br></br>
        - Bacteria Filtration Efficiency Greater Than 99%
        <br></br>
        - Particulate Filtration Efficiency Greater Than 99%
        <br></br>
        - 3-Ply / 3 Layer Design:  Liquid Resistance Layer, Flame & Filtration Layer, and soft Inner Layer for comfort.
        <br></br>
        - One Size Fits Most:  These masks were not designed to fully seal against the face.  As long as the masks cover from the bridge of the nose to the bottom of the chin, they will provide excellent protection.</SecondGridItem2>
      </SecondGridContainer>
    </Hero>
    
    <Links>
      <Link to="/face-masks/">Face Masks</Link>
      <br></br>
      <Link to="/about-us/">About Us</Link>
      <br></br>
      <Link to="/FAQ/">FAQ</Link>
      <br></br>
      <Link to="/wear-mask/">How To Wear A Mask</Link>
      <br></br>
      <Link to="/anotherPage/">Another Page</Link>
      <br></br>
      <Link to="/counter/">Counter</Link>
    </Links>
  </>
  )
}


export default IndexPage