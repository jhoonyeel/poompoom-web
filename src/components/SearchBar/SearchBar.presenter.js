import { faCircleXmark, faMagnifyingGlass, faMinus } from '@fortawesome/free-solid-svg-icons';
import React, { forwardRef } from 'react';
import * as S from './SearchBar.styles';

const SearchBarUI = forwardRef(
  (
    {
      isFocused,
      searchTerm,
      handleChange,
      handleFocus,
      handleBlur,
      handleKeyDown,
      handleRecommendationClick,
      handleClearInput,
      recommendations,
    },
    ref,
  ) => (
    <S.Wrapper>
      <S.SearchInputBox>
        <S.SearchIcon icon={faMagnifyingGlass} />
        <S.MinusIcon icon={faMinus} rotation={90} />
        <S.SearchInput
          type="text"
          placeholder="사용자 검색 시 검색어 앞에 @를 붙여주세요."
          value={searchTerm}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          ref={ref}
        />
        <S.XCircleIcon icon={faCircleXmark} onClick={handleClearInput} />
      </S.SearchInputBox>
      <S.RecommendBox>
        {isFocused && searchTerm.length === 0 && (
          <>
            <S.RecommendParagraph>지금 다른 분들이 많이 검색해요</S.RecommendParagraph>
            <S.RecommendList>
              {recommendations.map((recommendation) => (
                <S.RecommendItem
                  key={recommendation.id}
                  onClick={() => {
                    handleRecommendationClick(recommendation.name);
                  }}
                >
                  {recommendation.name}
                </S.RecommendItem>
              ))}
            </S.RecommendList>
          </>
        )}
      </S.RecommendBox>
    </S.Wrapper>
  ),
);

export default SearchBarUI;
