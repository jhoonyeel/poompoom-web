import Clothes from '../Clothes';
import Ling from '../Ling';
import Shoes from '../Shoes';
import UnderWare from '../UnderWare';

export const recommendQnA = [
  {
    question: 'Q1. 반지 사이즈를 선택해주세요.',
    Component: Ling,
  },
  {
    question: 'Q2. 신발 사이즈를 선택해주세요.',
    Component: Shoes,
  },
  {
    question: 'Q3. 옷 사이즈를 선택해주세요.',
    Component: Clothes,
  },
  {
    question: 'Q4. 속옷 사이즈를 선택해주세요. (선택 사항)',
    Component: UnderWare,
    optional: true,
  },
];

export const ConnectQnA = [
  {
    question: 'Q1. 자취를 시작한 나, 놀러온 애인의 손에 들려있는',
    answers: ['극강의 실용성, 크리X스 제품 패키지!', '감성충만, 빈티지숍 라탄 휴지 케이스'],
  },
  {
    question: 'Q2. 깜짝 이벤트라며 강아지를 데려온 애인에게 나는',
    answers: ['너 돌팔이니? 말도 없이 데려오면 어떻게 해!', '공동육아라며! 미리 부부 체험하며 오히려 좋잖아?'],
  },
  {
    question: 'Q3. 프라다 가방을 사온 남자친구, 알고보니 개봉만 한 중고상품?',
    answers: ['와우, 싸게 잘 샀네. 오히려 좋아! ', '더 낮은 가격대라도 차라리 새걸 사주지. 여러모로 찝찝해!'],
  },
  {
    question: 'Q4. 100일 선물로 뭐가 좋을까?',
    answers: [
      '시들어도 괜찮아, 장미꽃 100송이 + 손수 접은 종이학 100마리 + 정성 가득 손편지',
      '당신의 애플 감성을 채워 줄 맥세이프!',
    ],
  },
  {
    question: 'Q5. 애인에게 선물을 받은 나, 이번엔 내가 줄 차례!',
    answers: ['받은 선물의 가격대를 찾아보고 비슷한 선물을 줘야겠어.', '가격보다 마음이 중요하지! 더 좋은 걸 줄게! '],
  },
];
