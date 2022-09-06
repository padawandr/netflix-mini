import styled from 'styled-components'
import { colors } from '../../styles/pallete'

export const Wrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100vh;
  justify-content: center;
  width: max(60rem);

  .title {
    align-self: flex-start;
    font-size: 3.2rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    position: relative;
    width: 100%;

    .input {
      background: ${colors.dusk};
      border: 0;
      border-radius: 0.4rem;
      color: ${colors.light};
      padding: 1.6rem;
    }

    .submit {
      background: ${colors.primary};
      border-radius: 0.4rem;
      font-size: 1.6rem;
      font-weight: 700;
      padding: 1.6rem;
    }

    .error {
      bottom: -2rem;
      position: absolute;
      right: 0;
    }
  }
`
