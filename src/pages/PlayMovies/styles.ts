import styled from 'styled-components'
import { colors } from '../../styles/pallete'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  width: 100%;

  .playing {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .action {
    color: ${colors.dim};
    margin: 2rem auto 1rem;
    width: 92%;

    .timeframe {
      display: flex;
      gap: 1rem;
    }

    .controls {
      align-items: center;
      display: flex;
      font-size: 3rem;
      gap: 1rem;
      justify-content: space-between;
      margin-top: 1rem;

      .control {
        transition: color 200ms ease;

        &:hover {
          color: ${colors.light};
        }
      }

      .title {
        flex: 1;
        font-size: 1.2rem;
        text-align: center;
      }
    }
  }
`
