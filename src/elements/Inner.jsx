import styled from 'styled-components'

const Inner = styled.div`
  width: 100%;
  text-align: center;
  @media (min-width: 900px) {
    text-align: left;
  }
  @media (min-width: 1600px) {
    width: 66.66667%;
  }
`

export default Inner
