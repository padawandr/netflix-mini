import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 6rem 0;
  justify-content: center;

  .title {
    font-size: 3.2rem;
  }

  .info {
    font-size: 1.4rem;
    margin-top: 3rem;

    .field {
      margin-top: 1rem;

      & strong {
        margin-right: 0.5rem;
      }
    }

    .movies {
      margin-top: 3rem;
    }
    .watched {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
      gap: 0.2rem;
      margin-top: 0.5rem;

      .poster {
        border-radius: 0.1rem;
      }
    }
  }
`
