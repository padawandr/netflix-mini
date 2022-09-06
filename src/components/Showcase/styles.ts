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
    position: absolute;
    top: 0;
    left: -1.3rem;
    height: 100%;
    width: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .control-right {
    position: absolute;
    top: 0;
    right: -1.3rem;
    height: 100%;
    width: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .movies {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    .movie {
      min-width: 18rem;
      transition: all 200ms ease;
      position: relative;

      .thumbnail {
        border-radius: 0.1rem;
        transition: filter 200ms ease;

        &:hover {
          filter: brightness(1.1);
        }
      }

      .title {
        position: absolute;
        font-size: 1.2rem;
        bottom: 0.4rem;
        left: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        padding: 0 0.5rem;
        text-shadow: 0.1rem 0.1rem 0.2rem #00000066;
      }
    }
  }
`
