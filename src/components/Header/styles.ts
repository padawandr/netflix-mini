import styled from 'styled-components'
import { colors } from '../../styles/pallete'

export const Wrapper = styled.header<{ scrolled: boolean }>`
  position: fixed;
  width: 100%;
  z-index: 20;
  background-color: ${props =>
    props.scrolled ? `${colors.dark}` : 'transparent'};
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 30%,
    transparent
  );

  .container {
    height: 4rem;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0.4rem 0;
    width: 92%;

    .logo {
      width: 7.2rem;
    }

    .menu {
      position: relative;

      .avatar {
        border-radius: 0.4rem;
        width: 3.2rem;
        cursor: pointer;
      }

      .action {
        position: absolute;
        width: 15rem;
        top: 4rem;
        right: 0;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        background: ${colors.dim};
        border-radius: 0.4rem;
        padding: 0.2rem;

        .link {
          background: ${colors.dark};
          font-size: 1.4rem;
          padding: 0.5rem 0;
          border-radius: 0.4rem;
          transition: color 200ms ease;

          &:hover {
            color: ${colors.dim};
          }
        }
      }
    }
  }
`
