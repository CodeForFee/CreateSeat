// auth.js

// Lưu token vào localStorage
function saveToken(token) {
  localStorage.setItem("access_token", token.access_token);
  localStorage.setItem("refresh_token", token.refresh_token);
}

// Lấy token
function getAccessToken() {
  return localStorage.getItem("access_token");
}

// Kiểm tra đã login chưa
function requireLogin() {
  const token = getAccessToken();
  if (!token) {
    alert("Vui lòng đăng nhập trước!");
    window.location.href = "login.html";
  }
}
