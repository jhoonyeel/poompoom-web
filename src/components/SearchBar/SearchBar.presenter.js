import React from 'react';

export default function SearchBarUI({ isFocused, searchTerm, handleChange, handleFocus, handleBlur, recommendations }) {
  return (
    <div>
      <div>
        돋보기 아이콘
        <input type="text" value={searchTerm} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
      </div>
      <div>
        추천 키워드
        <br />
        {(isFocused || searchTerm) && (
          <ul>
            {recommendations.map((recommendation) => (
              <li key={recommendation.id}>{recommendation.keyword}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
