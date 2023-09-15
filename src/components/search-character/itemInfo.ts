export type GradeLevel = "0" | "1" | "2" | "3" | "4" | "5" | "6";

export const gradeName = {
  "0": "일반",
  "1": "희귀",
  "2": "고급",
  "3": "영웅",
  "4": "전설",
  "5": "유물",
  "6": "고대",
};

export const gradeColor = {
  "0": "white",
  "1": "#78d300",
  "2": "#2fa4f9",
  "3": "#c429fb",
  "4": "#eb9313",
  "5": "#ff670c",
  "6": "#dcc999",
};

export const gradeBackground = {
  "0": "white",
  "1": "linear-gradient(135deg,#8fd82f,#498001)",
  "2": "linear-gradient(135deg,#111f2c,#113d5d)",
  "3": "linear-gradient(135deg,#261331,#480d5d)",
  "4": "linear-gradient(135deg,#362003,#9e5f04)",
  "5": "linear-gradient(135deg,#341a09,#a24006)",
  "6": "linear-gradient(135deg,#3d3325,#dcc999)",
};

// 품질
// ~10 빨강
// ~30 황색
// ~70 초록
// ~90 파랑
// 90~99 보라
// 100 밝은 주황

// 노멀 배경: white
// 희귀 배경: linear-gradient(135deg,#8fd82f,#498001);
// 고급 배경: linear-gradient(135deg,#111f2c,#113d5d);
// 영웅 배경: linear-gradient(135deg,#261331,#480d5d);
// 전설 배경: linear-gradient(135deg,#362003,#9e5f04);
// 유물 배경: linear-gradient(135deg,#341a09,#a24006);
// 고대 배경: linear-gradient(135deg,#3d3325,#dcc999);
