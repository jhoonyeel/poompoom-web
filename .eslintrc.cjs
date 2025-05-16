module.exports = {
  // ✅ 어떤 환경에서 코드를 실행하는지 명시 (전역 변수 허용 등)
  env: {
    browser: true, // 브라우저 환경 (window, document 등 사용 가능)
    node: true, // Node.js 환경 (require, module 등 사용 가능)
    es6: true, // ES6 문법 사용 가능 (const, let, 화살표 함수 등)
  },

  // ✅ 코드 분석에 사용할 파서 설정
  parser: '@babel/eslint-parser', // Babel로 트랜스파일링한 코드를 lint 가능하게 해줌

  parserOptions: {
    ecmaVersion: 2020, // 최신 JS 문법 허용
    sourceType: 'module', // ES6 모듈 import/export 문법 허용
    ecmaFeatures: {
      jsx: true, // JSX 문법 사용 가능 (React에서 필요)
    },
    requireConfigFile: false, // babel.config.js 없어도 동작하도록 설정
    babelOptions: {
      presets: ['@babel/preset-react'], // ✅ JSX 파싱을 위한 프리셋 명시
    },
  },

  // ✅ 모듈 해석 관련 설정 (import 경로, 확장자 등)
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@app', './src/app'],
          ['@features', './src/features'],
          ['@layouts', './src/layouts'],
          ['@pages', './src/pages'],
          ['@shared', './src/shared'],
          ['@widgets', './src/widgets'],
        ],
      },
    },
  },

  // ✅ ESLint에 사용할 플러그인 목록
  plugins: ['prettier'], // prettier와의 충돌 방지 및 룰 적용

  // ✅ 확장할 스타일 가이드 목록
  extends: [
    'airbnb', // Airbnb JavaScript 스타일 가이드
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // prettier 설정 자동 적용
  ],

  // ✅ 규칙 커스터마이징
  rules: {
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function', // 이름 있는 컴포넌트는 arrow function만 허용
        unnamedComponents: 'arrow-function', // 이름 없는 것도 arrow로
      },
    ],

    // JSX를 항상 명확하게 감싸고 줄바꿈을 유지
    'react/jsx-wrap-multilines': [
      'error',
      {
        return: 'parens-new-line',
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'always',
        jsx: 'always',
      },
    ],

    // 파일 확장자에 JSX 허용
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    // prettier 관련 설정을 ESLint와 통합
    'prettier/prettier': ['error', { endOfLine: 'auto' }],

    // React 17+부터 import React 불필요 → 꺼줌
    'react/react-in-jsx-scope': 'off',

    // PropTypes 사용 안함
    'react/prop-types': 'off',

    // export default 대신 export 명시적 사용 강제 안함
    'import/prefer-default-export': 'off',

    // console.log 허용
    'no-console': 'off',

    // 매개변수 재할당 허용
    'no-param-reassign': 'off',

    // 특정 밑줄 변수 허용
    'no-underscore-dangle': ['error', { allow: ['_retry'] }],

    // alert 허용
    'no-alert': 'off',

    // map index 사용 허용
    'react/no-array-index-key': 'off',

    // 사용하지 않는 JSX fragment 금지 해제
    'react/jsx-no-useless-fragment': 'off',

    // 구조 분해 할당 강제 안함
    'prefer-destructuring': 'off',

    // 외로운 if문 허용
    'no-lonely-if': 'off',
  },
};
