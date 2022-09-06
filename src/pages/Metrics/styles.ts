import styled from 'styled-components'
import { colors } from '../../styles/pallete'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  max-width: 80rem;
  min-height: 100vh;
  padding: 6rem 0;

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
