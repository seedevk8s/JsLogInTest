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

async function login(event) {
    event.preventDefault(); // submit 이벤트 원래의 형태데로는 안되게함.
    event.stopPropagation(); //이벤트가 상위로 전달되지 않게 막아줌

    // 아래 각 dom을 얻어옴
    const emailElement = document.querySelector('#email');
    const  passwordElement = document.querySelector('#password');

    // dom에 있는 실제 값을 얻어 와야함. => string
    const email = emailElement.value;
    const password = passwordElement.value;
    console.log(email, password);

    try {
        const res = await axios.post('https://api.karktube.tv/v1/me', {
            email: email,
            password: password
        });
    }catch (error) {
        
    }
}

function getToken() {
    return localStorage.getItem('token');
}



























