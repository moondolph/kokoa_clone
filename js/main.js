function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  document.getElementById("current-time").textContent = `${hours}:${minutes}`;
}

// 페이지 로드 시 시간 업데이트 + 1초마다 업데이트
updateTime();
setInterval(updateTime, 1000);
