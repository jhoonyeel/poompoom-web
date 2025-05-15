import styled from 'styled-components';
import { ReactComponent as SearchKeyword } from '../../assets/search_keyword.svg';
import { useSearchHashtags } from '../../hooks/useSearchHashtags';
import useSearchInputDebounce from '../../hooks/useSearchInputDebounce';

const SearchHashtagSuggestions = ({ searchTerm, setSearchTerm }) => {
  const { allHashtags } = useSearchHashtags(); // 모든 해시태그 가져오기
  const debouncedSearchTerm = useSearchInputDebounce(searchTerm, 500); // 입력값을 0.5초 지연시킴

  const filteredHashtags = allHashtags.filter((hashtag) =>
    hashtag.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
  );

  return (
    <Wrapper>
      <KeywordList>
        {filteredHashtags.map((hashtag, index) => (
          <KeywordItem
            key={`${hashtag.id}-${index}`}
            onClick={() => {
              setSearchTerm(hashtag.name);
            }}
          >
            <SearchKeywordIcon />
            <span>{hashtag.name}</span>
          </KeywordItem>
        ))}
      </KeywordList>
    </Wrapper>
  );
};

export default SearchHashtagSuggestions;

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
export const KeywordList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px 14px;
  flex-wrap: wrap;
  margin-top: 16px;
`;
export const KeywordItem = styled.li`
  border: 3px solid #f2f2f2;
  border-radius: 20px;
  padding: 6px 8px;
  cursor: pointer;
`;
export const SearchKeywordIcon = styled(SearchKeyword)`
  width: 32px;
  height: 32px;
`;
