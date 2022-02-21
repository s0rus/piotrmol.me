import styled from 'styled-components';

export const HeaderImage = styled.img`
  width: 100%;
  height: 420px;
  margin-bottom: -8px;

  object-fit: cover;
  object-position: 50% 60%;
`;

export const HeaderWrapper = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.pink};

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(64px, 5vw, 72px);
    font-weight: 900;
  }
`;

export const HeroContent = styled.div`
  padding: 32px 64px;

  display: flex;
  flex-flow: column nowrap;

  ul {
    list-style-type: none;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;

    li {
      margin: 32px 0;

      p {
        color: ${({ theme }) => theme.colors.green};
        font-size: clamp(16px, 1vw, 24px);

        span {
          text-decoration: underline;
          color: ${({ theme }) => theme.colors.pink};
        }
      }

      &:nth-of-type(1) {
        align-self: flex-end;
        position: relative;

        &::before {
          content: '';
          width: 100%;
          height: 100%;
          box-sizing: content-box;
          padding: 16px;

          position: absolute;
          top: -35%;
          left: -5%;
          transform: rotate(-2deg);

          border-radius: 20px;
          border: 2px solid ${({ theme }) => theme.colors.green};
        }
      }

      &:nth-of-type(2) {
        align-self: flex-start;
        position: relative;
        text-align: center;

        &::before {
          content: '';
          width: 100%;
          height: 100%;
          box-sizing: content-box;
          padding: 16px;

          position: absolute;
          top: -25%;
          left: -5%;

          border-radius: 8% 92% 6% 94% / 90% 16% 84% 10%;
          border: 2px solid ${({ theme }) => theme.colors.green};
        }
      }

      &:nth-of-type(3) {
        align-self: center;
        position: relative;
        text-align: center;

        &::before {
          content: '';
          width: 100%;
          height: 100%;
          box-sizing: content-box;
          padding: 24px;

          position: absolute;
          top: -50%;
          left: -10%;

          border-radius: 50%;
          border: 2px solid ${({ theme }) => theme.colors.green};
        }
      }
    }
  }
`;

export const ResumeButtonWrapper = styled.div`
  height: 100%;
  padding: 32px 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};

  a {
    padding: 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;

    font-family: 'Playfair Display', serif;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.blue};

    transition: background-color 0.2s ease-in-out;

    &:focus {
      outline: 4px solid ${({ theme }) => theme.colors.pink};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.pink};
    }
  }
`;
