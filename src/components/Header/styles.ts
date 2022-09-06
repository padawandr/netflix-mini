import styled from 'styled-components'
import { colors } from '../../styles/pallete'

export const Wrapper = styled.header<{ scrolled: boolean }>`
  background-color: ${props =>
    props.scrolled ? `${colors.dark}` : 'transparent'};
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 30%,
    transparent
  );
  position: fixed;
  width: 100%;
  z-index: 20;

  .container {
    align-items: center;
    display: flex;
    height: 4rem;
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
        cursor: pointer;
        width: 3.2rem;
      }

      .action {
        background: ${colors.dim};
        border-radius: 0.4rem;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        padding: 0.2rem;
        position: absolute;
        right: 0;
        top: 4rem;
        width: 15rem;

        .link {
          background: ${colors.dark};
          border-radius: 0.4rem;
          font-size: 1.4rem;
          padding: 0.5rem 0;
          transition: color 200ms ease;

          &:hover {
            color: ${colors.dim};
          }
        }
      }
    }
  }
`
