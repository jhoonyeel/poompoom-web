import React, { forwardRef } from 'react';
import { AutoCompleteKeywords } from './AutoCompleteKeywords';
import { Recommendations } from './Recommendations';
import * as S from './SearchBar.styles';

const SearchBarUI = forwardRef(
  (
    {
      isFocused,
      searchTerm,
      setSearchTerm,
      handleChange,
      handleFocus,
      handleBlur,
      handleClearInput,
      handleSearch,
      handleRecommendationClick,
    },
    ref,
  ) => (
    <S.Wrapper>
      <S.SearchInputContainer>
        <S.SearchInput
          type="text"
          placeholder="사용자 검색 시 검색어 앞에 @를 붙여주세요."
          value={searchTerm}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          ref={ref}
          hasSearchTerm={searchTerm.length !== 0}
          isFocused={isFocused}
        />
        {searchTerm.length !== 0 && (
          <S.DeleteBtn type="button" onClick={handleClearInput}>
            ×
          </S.DeleteBtn>
        )}
        <S.SearchBtn type="button" onClick={handleSearch} />
      </S.SearchInputContainer>
      {isFocused && searchTerm.length === 0 && (
        <Recommendations handleRecommendationClick={handleRecommendationClick} />
      )}
      {isFocused && searchTerm.length > 0 && (
        <AutoCompleteKeywords searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      )}
    </S.Wrapper>
  ),
);

export default SearchBarUI;
