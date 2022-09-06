import styled from 'styled-components'
import { colors } from '../../styles/pallete'

export const Wrapper = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  .playing {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .action {
    color: ${colors.dim};
    width: 92%;
    margin: 2rem auto 1rem;

    .timeframe {
      display: flex;
      gap: 1rem;
    }

    .controls {
      margin-top: 1rem;
      font-size: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      .control {
        transition: color 200ms ease;

        &:hover {
          color: ${colors.light};
        }
      }

      .title {
        font-size: 1.2rem;
        flex: 1;
        text-align: center;
      }
    }
  }
`
