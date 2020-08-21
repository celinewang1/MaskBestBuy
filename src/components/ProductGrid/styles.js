import styled from '@emotion/styled'


export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
`

export const Product = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  font-family: passenger display;
`

export const PriceTag = styled.span`
  font-weight: 300;
  font-size: 1rem;
  font-style: oblique;
  text-align: center;
  margin-top: 10px;

  :before {
    content: ''
  }
`

export const Title = styled.span`
  font-weight: 300;
  font-size: 1.5rem;
  text-align: center;
`
