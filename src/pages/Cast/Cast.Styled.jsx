import styled from '@emotion/styled';
export const CastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

export const ActorCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const ActorImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ActorName = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #333333;
`;

export const CharacterName = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: #666666;
`;

export const PlaceholderImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;
