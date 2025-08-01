export function calculateBMI(weight: number, height: number): number {
  if (height <= 0) return 0;
  return weight / (height * height);
}

// 기타 유틸리티 함수 추가
