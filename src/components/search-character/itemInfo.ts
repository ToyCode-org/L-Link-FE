export type GradeLevel = "0" | "1" | "2" | "3" | "4" | "5" | "6";

export const gradeName = {
  "0": "일반",
  "1": "희귀",
  "2": "고급",
  "3": "영웅",
  "4": "전설",
  "5": "유물",
  "6": "고대",
  "7": "에스더",
};

export const gradeColor = {
  "0": "white",
  "1": "#78d300",
  "2": "#2fa4f9",
  "3": "#c429fb",
  "4": "#eb9313",
  "5": "#ff670c",
  "6": "#dcc999",
  "7": "#3af3ef",
};

export const gradeBackground = {
  "0": "white",
  "1": "linear-gradient(135deg,#8fd82f,#498001)",
  "2": "linear-gradient(135deg,#111f2c,#113d5d)",
  "3": "linear-gradient(135deg,#261331,#480d5d)",
  "4": "linear-gradient(135deg,#362003,#9e5f04)",
  "5": "linear-gradient(135deg,#341a09,#a24006)",
  "6": "linear-gradient(135deg,#3d3325,#dcc999)",
  "7": "linear-gradient(135deg,#0c2e2c,#2faba8)",
};

// 품질
// ~10 빨강
// ~30 황색
// ~70 초록
// ~90 파랑
// 90~99 보라
// 100 밝은 주황
export const qualityCheck = (qualityValue: number): string => {
  let color = "";
  if (qualityValue < 10) color = "red";
  if (10 <= qualityValue && qualityValue < 30) color = "yellow";
  if (30 <= qualityValue && qualityValue < 70) color = "green";
  if (70 <= qualityValue && qualityValue < 90) color = "blue";
  if (90 <= qualityValue && qualityValue < 100) color = "purple";
  if (qualityValue === 100) color = "orange";
  return color;
};

// bracelet effects
