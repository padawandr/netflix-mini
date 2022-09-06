import styled from 'styled-components'

export const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;

  .container {
    bottom: 1rem;
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 10;

    .about {
      flex: 0.92;
      text-shadow: 0.1rem 0.1rem 0.2rem #00000066;

      .title {
        font-size: 2rem;
      }

      .overview {
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        display: -webkit-box;
        font-size: 1rem;
        line-height: 1.5;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 75vw;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .container {
      .about {
        .title {
          font-size: 4rem;
        }
        .overview {
          font-size: inherit;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .container {
      .about {
        .title {
          font-size: 6rem;
        }
      }
    }
  }
`
