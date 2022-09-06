import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 1.2rem;

  .title {
    font-size: inherit;
  }

  .list {
    margin-top: 0.4rem;
    position: relative;
  }

  .control-left {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: -1.3rem;
    position: absolute;
    top: 0;
    width: 1.2rem;
  }

  .control-right {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    position: absolute;
    right: -1.3rem;
    top: 0;
    width: 1.2rem;
  }

  .movies {
    -ms-overflow-style: none;
    align-items: center;
    display: flex;
    gap: 0.2rem;
    overflow-x: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    .movie {
      min-width: 18rem;
      position: relative;
      transition: all 200ms ease;

      .thumbnail {
        border-radius: 0.1rem;
        transition: filter 200ms ease;

        &:hover {
          filter: brightness(1.1);
        }
      }

      .title {
        bottom: 0.4rem;
        font-size: 1.2rem;
        left: 0;
        overflow: hidden;
        padding: 0 0.5rem;
        position: absolute;
        text-overflow: ellipsis;
        text-shadow: 0.1rem 0.1rem 0.2rem #00000066;
        white-space: nowrap;
        width: 100%;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .list {
      margin-top: 0.6rem;
    }

    .movies {
      .movie {
        min-width: 22rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .list {
      margin-top: 0.8rem;
    }
    .movies {
      .movie {
        min-width: 26rem;
      }
    }
  }
`
