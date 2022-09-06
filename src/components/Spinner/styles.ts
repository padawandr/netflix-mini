import styled from 'styled-components'
import { colors } from '../../styles/pallete'

export const Wrapper = styled.div`
  margin-top: 5rem;

  &:after {
    animation: dual-ring 1200ms linear infinite;
    border: 0.3rem solid ${colors.primary};
    border-color: ${colors.primary} transparent ${colors.primary} transparent;
    border-radius: 50%;
    content: '';
    display: block;
    height: 6.4rem;
    margin: 0.8rem auto;
    width: 6.4rem;
  }

  @keyframes dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
