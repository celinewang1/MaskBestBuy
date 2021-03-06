import styled from '@emotion/styled'

export const ImageButtonsGridContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
    grid-column-gap: 200px;
    margin-top: 6rem;
`
export const ImageButtonsGridItem = styled.button`
    padding: 10px;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8);
    letter-spacing: 1px;
    text-transform: uppercase;
`
export const TextImageGridContainer = styled.div`
    display: grid;
    grid-template-areas: 'area1 area2'
                        'area1 area3';
    margin-top: 6rem;
    grid-gap: 10px;
    background-color: #2196F3;
    padding: 10px;
`

export const TextImageGridTitle = styled.div`
    font-size: 27px;
    font-style: normal;
    font-weight: 300;
    text-align: left;
    margin-bottom: 2rem;
    background-color: rgba(255, 255, 255, 0.8);
`
export const TextImageGridBody = styled.div`
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    text-align: left;
    line-height: 1.6;
    background-color: rgba(255, 255, 255, 0.8);
`
export const TextImageGridPic = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
`
export const Hero = styled.div`
    font-weight: 700;
    font-size: 2.0rem;
    text-align: center;
    position: relative;
    top: 100%;
    width: 100%;
    height: 100%;
    padding: 0;
`
export const Title = styled.div`
    font-weight: 550;
    font-size: 4.0rem;
    text-align: center;
    font-family: Georgia;
    font-stretch: condensed;
    padding-top: 22rem;
`
export const LargeButton = styled.button`
    background-color: #33adff;
    width: 15%;
    padding: 18px;
    text-align: center;
    transition: transform .2s;
    color: white;
    font-size: 11px;
    font-style: normal;
    font-weight: 150;
    text-align: center;
    font-family: Arial;
    letter-spacing: 2px;
    text-decoration: none;
    margin-top: 4rem;
    margin-bottom: 10rem;
`
export const ViewMaskHover = styled.div`
    transform: scale(1.5); 
`

export const HeroImage3Buttons = styled.div`
    column-count: 3;
`
export const HeroImageButton = styled.div`
    background-color: white;
    border: 2px solid #d1d1e0;
    width: 15%;
    padding: 10px;
    text-align: left;
    transition: transform .2s;
    margin-top: 15rem;
    margin-bottom: 3rem;
    display: block;
    
`
export const HeroImageText = styled.div`
    background-color: white;
    padding: 10px;
    font-size: 13px;
    font-style: normal;
    font-weight: 200;
    text-align: center;
    font-family: Arial;
    letter-spacing: 2px;

`

export const Links = styled.div`
    display: grid;
    text align: bottom;
    margin-top: 5rem;
    margin-bottom: 5rem;
    grid-template-rows: auto auto auto auto;
    line-height: 1.8;
`

