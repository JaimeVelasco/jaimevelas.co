import styled from 'styled-components'
import { ParallaxLayer } from '@react-spring/parallax'

const Content = styled(ParallaxLayer)`
  padding: 1.5rem;
  @media (min-width: 600px) {
    padding: 3rem;
  }
  @media (min-width: 900px) {
    padding: 6rem;
  }
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 50;
`

export default Content
