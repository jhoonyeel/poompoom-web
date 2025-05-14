import profileDummyPhoto from '../../../../shared/assets/ProfilePhoto.svg';
import placeholderPhoto from '../../assets/DummyPhoto.svg';
import * as S from './ReviewCreate.style';

export default function ReviewCreateUI({
  images,
  activeImageIndex,
  reviewData,
  setReviewData,
  setActiveImageIndex,
  profilePhoto,
  handleManageImage,
  handleDeleteImage,
  handleInputChange,
  handleSubmit,
  nextImage,
  prevImage,
  CATEGORIES,
  ITEM,
  nickname,
}) {
  return (
    <S.Wrapper>
      <S.ReviewCreateForm onSubmit={handleSubmit}>
        <S.Header>
          <S.Title>새 무드뷰 만들기</S.Title>
          <S.SubmitBtn type="submit">업로드하기</S.SubmitBtn>
        </S.Header>
        <S.HeaderLine />
        <S.BodyContainer>
          <S.ReviewImageContainer>
            <S.ReviewImageBox onClick={() => document.getElementById('imageInput').click()}>
              {images.length > 0 ? (
                <>
                  <img
                    src={
                      activeImageIndex < images.length
                        ? URL.createObjectURL(images[activeImageIndex])
                        : placeholderPhoto
                    }
                    alt={`preview ${activeImageIndex} 이미지`}
                  />
                  {activeImageIndex > 0 && <S.ArrowLeft onClick={prevImage}>‹</S.ArrowLeft>}
                  <S.ArrowRight onClick={nextImage}>
                    {activeImageIndex === images.length - 1 ? <S.AddIcon /> : '›'}
                  </S.ArrowRight>
                  <S.DeleteButton
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteImage();
                    }}
                  >
                    &times;
                  </S.DeleteButton>
                  <S.Dots>
                    {images.map((_, index) => (
                      <S.Dot
                        active={index === activeImageIndex}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex(index);
                        }}
                      />
                    ))}
                  </S.Dots>
                </>
              ) : (
                <img src={placeholderPhoto} alt="placeholder 이미지" />
              )}
            </S.ReviewImageBox>
            <S.ImageInput id="imageInput" type="file" multiple onChange={handleManageImage} />
          </S.ReviewImageContainer>
          <S.ReviewContentContainer>
            <S.ReviewContentHeader>
              <S.AuthorCircleBox>
                <S.AuthorImg src={profilePhoto || profileDummyPhoto} alt="프로필 이미지" />
              </S.AuthorCircleBox>
              <S.Nickname>@{nickname}</S.Nickname>
              <S.ReviewTypeBtn
                type="button"
                $active={reviewData.reviewType === 'RECEIVED'}
                onClick={() => setReviewData((prevData) => ({ ...prevData, reviewType: 'RECEIVED' }))}
              >
                받은 선물
              </S.ReviewTypeBtn>
              <S.ReviewTypeBtn
                type="button"
                $active={reviewData.reviewType === 'GIVEN'}
                onClick={() => setReviewData((prevData) => ({ ...prevData, reviewType: 'GIVEN' }))}
              >
                준 선물
              </S.ReviewTypeBtn>
            </S.ReviewContentHeader>
            <S.ReviewContent name="content" placeholder="문구를 입력해주세요..." onChange={handleInputChange} />
            <S.ReviewInfoContainer>
              <S.Line />
              <S.CategoryHeader>
                <S.CategorySelectIcon />
                <S.CategoryTitle>카테고리 선택</S.CategoryTitle>
              </S.CategoryHeader>
              <S.CategoryContainer>
                {CATEGORIES.map((cat) => (
                  <S.CategoryBtn
                    key={cat}
                    type="button"
                    $active={reviewData.category === cat}
                    onClick={() => setReviewData((prevData) => ({ ...prevData, category: cat }))}
                  >
                    {cat}
                  </S.CategoryBtn>
                ))}
              </S.CategoryContainer>
              <S.Line />
              <S.CategoryHeader>
                <S.CategorySelectIcon />
                <S.CategoryTitle>품목 선택</S.CategoryTitle>
              </S.CategoryHeader>
              <S.CategoryContainer>
                {ITEM.map((itemSell) => (
                  <S.CategoryBtn
                    key={itemSell}
                    type="button"
                    $active={reviewData.item === itemSell}
                    onClick={() => setReviewData((prevData) => ({ ...prevData, item: itemSell }))}
                  >
                    {itemSell}
                  </S.CategoryBtn>
                ))}
              </S.CategoryContainer>
              <S.Line />
              <S.AdditionalInfoContainer>
                <S.LabelContainer>
                  <S.InfoTitle>구매처</S.InfoTitle>
                  <S.InfoInput name="source" type="text" onChange={handleInputChange} />
                </S.LabelContainer>
                <S.LabelContainer>
                  <S.InfoTitle>아이템</S.InfoTitle>
                  <S.InfoInput name="item" type="text" onChange={handleInputChange} />
                </S.LabelContainer>
                <S.LabelContainer>
                  <S.InfoTitle>제품 정보(링크)</S.InfoTitle>
                  <S.InfoInput name="item_url" type="text" onChange={handleInputChange} />
                </S.LabelContainer>
                <S.LabelContainer>
                  <S.InfoTitle>가격</S.InfoTitle>
                  <S.InfoInput name="price" type="text" onChange={handleInputChange} />
                </S.LabelContainer>
              </S.AdditionalInfoContainer>
            </S.ReviewInfoContainer>
          </S.ReviewContentContainer>
        </S.BodyContainer>
      </S.ReviewCreateForm>
    </S.Wrapper>
  );
}
