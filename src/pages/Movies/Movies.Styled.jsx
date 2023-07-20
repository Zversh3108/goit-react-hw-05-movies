import styled from '@emotion/styled';
export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const MovieCard = styled.div`
  width: 200px;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
export const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;
export const MovieTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333333;
`;
export const PlaceholderImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid grey;
  border-radius: 4px;
  margin-right: 8px;
  border-color: grey;
`;

export const Button = styled.button`
  background-color: #ccc;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #999;
  }

  &:focus,
  &:active {
    background-color: #888;
  }
`;
