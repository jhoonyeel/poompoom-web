import { useFetchRecommendations } from '@shared/hooks/useFetchRecommendations';
import styled from 'styled-components';

const TrendingHashtagSuggestions = ({ handleRecommendationClick }) => {
  const { recommendations } = useFetchRecommendations();

  return (
    <Wrapper>
      <RecommendParagraph>지금 다른 분들이 많이 검색해요</RecommendParagraph>
      <RecommendList>
        {recommendations.map((recommendation) => (
          <RecommendItem
            key={recommendation.id}
            onClick={() => {
              handleRecommendationClick(recommendation.name);
            }}
          >
            {recommendation.name}
          </RecommendItem>
        ))}
      </RecommendList>
    </Wrapper>
  );
};

export default TrendingHashtagSuggestions;

export const Wrapper = styled.div`
  position: absolute;
  z-index: 5;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  width: 100%;
  background: #fff;
  border: 3px solid #d9d9d9;
  border-top: none;
  border-radius: 0 0 20px 20px;
`;
export const RecommendParagraph = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
export const RecommendList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px 14px;
  flex-wrap: wrap;
  margin-top: 16px;
`;
export const RecommendItem = styled.li`
  border: 3px solid #f2f2f2;
  border-radius: 20px;
  padding: 6px 8px;
  cursor: pointer;
`;
