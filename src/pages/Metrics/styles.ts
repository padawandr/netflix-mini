import styled from 'styled-components'
import { colors } from '../../styles/pallete'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 6rem 0;
  justify-content: center;
  gap: 2rem;
  max-width: 80rem;

  .heading {
    font-size: 3.2rem;
  }

  .section {
    .ranking {
      margin-top: 0.5rem;

      .row {
        margin-top: 0.2rem;

        & > * {
          margin-right: 0.5rem;
        }

        .medal {
          &1 {
            color: ${colors.gold};
          }

          &2 {
            color: ${colors.silver};
          }

          &3 {
            color: ${colors.bronze};
          }
        }
      }
    }
  }
`
