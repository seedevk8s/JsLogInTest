document.addEventListener('DOMContentLoaded', main);

function main() {
    // 버튼에 이벤트 연결
    bindLoginButton();

    // 토큰 체크
    const token = getToken();
    if (token !== null) {
        location.assign('/');
        return;
    }
}

function bindLoginButton() {
    const form = document.querySelector('#form-login');
    form.addEventListener('submit', login);
}

function login() {


}

function getToken() {
    return localStorage.getItem('token');
}



























