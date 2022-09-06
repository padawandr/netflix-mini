import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;

  .container {
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 10;

    .about {
      flex: 0.92;
      text-shadow: 0.1rem 0.1rem 0.2rem #00000066;

      .title {
        font-size: 2rem;
      }

      .overview {
        display: -webkit-box;
        width: 75vw;
        font-size: 1rem;
        line-height: 1.5;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
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
