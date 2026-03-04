// MSW 핸들러 정의 – 각 API endpoint에 대한 mock 응답 등록

/**
 * mock 응답 정의
 */
import { authHandler } from './handlers/authHandler.js';
import { reviewDetailHandler } from './handlers/reviewDetailHandler.js';
import { reviewSearchHandler } from './handlers/reviewSearchHandler.js';

export const handlers = [reviewSearchHandler, reviewDetailHandler, authHandler];
