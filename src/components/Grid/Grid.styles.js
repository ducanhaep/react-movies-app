import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    color: var(--medGrey);

    @media ${({ theme }) => theme.mediaQueries.bellow768} {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
`;
