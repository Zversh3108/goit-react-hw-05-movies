import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

export const MovieImage = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const MovieContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  border-bottom: 1px solid grey;
`;

export const MovieTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const MovieScore = styled.p`
  font-size: 16px;
  color: #666666;
  margin-bottom: 10px;
`;

export const MovieOverview = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const MovieDescription = styled.p`
  font-size: 16px;
  color: #333333;
  margin-bottom: 20px;
`;

export const AdditionalInfoContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  border-bottom: 1px solid grey;
`;

export const AdditionalInfoTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AdditionalInfoList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 0;
  gap: 20px;
`;

export const AdditionalInfoLink = styled(Link)`
  color: grey;
  display: block;
  text-decoration: none;
  padding: 2px 20px;
  border: 2px solid grey;
  border-radius: 10px;
  width: 10%;
  &:hover {
    color: white;
    background-color: grey;
  }
`;

export const PlaceholderImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;
export const BackButton = styled(Link)`
  display: inline-block;
  background-color: #ccc;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  position: relative;
  transition: background-color 0.3s;
  margin-bottom: 5px;
  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid #fff;
    transition: border-right-color 0.3s;
  }

  &:hover {
    background-color: #999;

    ::before {
      border-right-color: #999;
    }
  }

  &:focus,
  &:active {
    background-color: #888;

    ::before {
      border-right-color: #888;
    }
  }
`;
