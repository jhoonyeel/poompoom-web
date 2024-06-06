import styled from 'styled-components';
import ReviewPostAuthor from '../../../Card/ReviewPostAuthor/ReviewPostAuthor.container';
import ReviewPostHashtags from '../../../Card/ReviewPostHashtags/ReviewPostHashtags.container';

export default function SubAccountUI({ subAccounts }) {
  return (
    <SubList>
      {subAccounts.map((account) => (
        <SubItem key={account.id}>
          <SubAuthorBox>
            <ReviewPostAuthor nickName={account.nickName} />
          </SubAuthorBox>
          <ReviewPostHashtags account={account} />
        </SubItem>
      ))}
    </SubList>
  );
}
const SubList = styled.div`
  width: 25%;
  padding: 1% 0;
`;
const SubItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8%;
`;
const SubAuthorBox = styled.div`
  margin-bottom: 5%;
`;
