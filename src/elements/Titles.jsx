import styled from 'styled-components'
import { rotateAnimation } from '../styles/animations'
import triangle from '../images/triangle.svg'

export const Title = styled.h1`
  font-size: 2.25rem;
  font-family: 'Cantata One', Constantia, 'Lucida Bright', Georgia, serif;
  color: #ffffff;
  margin-bottom: 2rem;
  letter-spacing: 0.05em;
  position: relative;
  display: inline-block;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    ${rotateAnimation('4s')};
    left: -60px;
    top: 5px;
  }
`

export const BigTitle = styled.h1`
  font-size: 3rem;
  @media (min-width: 900px) {
    font-size: 5rem;
  }
  font-family: 'Cantata One', Constantia, 'Lucida Bright', Georgia, serif;
  color: #ffffff;
  margin-bottom: 1.5rem;
  letter-spacing: 0;
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`

export const Subtitle = styled.p`
  font-size: 1.5rem;
  @media (min-width: 900px) {
    font-size: 2.25rem;
  }
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #ffffff;
  margin-top: 2rem;
  @media (min-width: 1600px) {
    width: 75%;
  }
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`
