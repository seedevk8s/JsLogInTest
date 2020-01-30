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
        const res = await axios.post('https://api.marktube.tv/v1/me', {
            email: email,
            password: password
        });

        //정상적인 처리의 경우
        const { token } = res.data;     // const token = res.data.token 이 의미임.
        if (token === undefined) {
            return ;            // 그냥 끝냄
        }

        localStorage.setItem('token', token);
        location.assign('/');

    }catch (error) {
        const data = error.response.data;
        if(data) {
            const state = data.error;
            if(state === 'USER_NOT_EXIST') {
                alert('사용자가 존재하지 않습니다.');
            } else if(state === 'PASSWORD_NOT_MATCH') {
                alert('비밀번호가 틀렸습니다.');
            }
        }

    }
}

function getToken() {
    return localStorage.getItem('token');
}



























