export const EVENTS = {
  // 클라이언트 → 서버: 방 참가 요청
  ROOM_JOIN: "room:join",
  // 서버 → 클라이언트: 방 참가 완료 알림
  ROOM_JOINED: "room:joined",

  // 클라이언트 → 서버: 채팅 전송 요청
  CHAT_SEND: "chat:send",
  // 서버 → 클라이언트: 채팅 메시지 전달
  CHAT_MESSAGE: "chat:message",
  // 서버 → 클라이언트: 채팅 이력 전송
  MESSAGES: "messages",

  // 클라이언트 → 서버: 기능 업데이트 요청
  FEATURE_UPDATE: "feature:update",
  // 서버 → 클라이언트: 기능 업데이트 알림
  FEATURE_UPDATED: "feature:updated",

  // 클라이언트 → 서버: 퀴즈 생성 요청
  QUIZ_CREATE: "quiz:create",
  // 서버 → 클라이언트: 퀴즈 생성 결과
  QUIZ_CREATED: "quiz:created",

  // 클라이언트 → 서버: 추첨 시작 요청
  DRAW_START: "draw:start",
  // 서버 → 클라이언트: 추첨 결과 전달
  DRAW_RESULT: "draw:result",

  // 클라이언트 → 서버: 체크 생성 요청
  CHECK_CREATE: "check:create",
  // 서버 → 클라이언트: 체크 생성 결과
  CHECK_CREATED: "check:created",
  // 클라이언트 → 서버: 체크 상태 토글 요청
  CHECK_TOGGLE: "check:toggle",
  // 서버 → 클라이언트: 체크 토글 결과
  CHECK_TOGGLED: "check:toggled",

  // 클라이언트 → 서버: OX 퀴즈 응답 제출 요청
  OXQUIZ_ANSWER: "oxquiz:answer",
  // 서버 → 클라이언트: OX 퀴즈 응답 결과 브로드캐스트
  OXQUIZ_ANSWERED: "oxquiz:answered",
  // 클라이언트 → 서버: OX 퀴즈 생성 요청
  OXQUIZ_CREATE: "oxquiz:create",
  // 서버 → 클라이언트: OX 퀴즈 생성 결과
  OXQUIZ_CREATED: "oxquiz:created",

  // 서버 → 클라이언트: 유저 퇴장 알림
  USER_LEFT: "user:left",
};
