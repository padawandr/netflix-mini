import styled from 'styled-components'
import { colors } from '../../styles/pallete'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  gap: 2rem;

  .title {
    align-self: flex-start;
    font-size: 3.2rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 100%;
    position: relative;

    .input {
      background: ${colors.dusk};
      border: 0;
      border-radius: 0.4rem;
      padding: 1.6rem;
      color: ${colors.light};
    }

    .submit {
      background: ${colors.primary};
      padding: 1.6rem;
      border-radius: 0.4rem;
      font-size: 1.6rem;
      font-weight: 700;
    }

    .error {
      position: absolute;
      bottom: -2rem;
      right: 0;
    }
  }
`
