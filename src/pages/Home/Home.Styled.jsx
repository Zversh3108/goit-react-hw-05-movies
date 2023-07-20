import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  margin: 5px 20px;
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 20px;
    }

    a {
      text-decoration: none;
      border: 1px solid grey;
      border-radius: 5px;
      padding: 2px 5px;
      color: #000;
      transition: 0.2s;

      &:hover {
        color: white;
        background-color: grey;
      }
    }
  }
`;
