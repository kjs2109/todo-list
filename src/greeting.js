const inputForm = document.querySelector('.input-form');
const inputUserName = document.querySelector('.input_user-name');
const greeting = document.querySelector('.greeting');

//submit 이벤트가 발생했을 때
// default 이벤트를 막아주고
// input창을 지워준다.
// 유저 이름을 localStorage에 저장하고
// paintGreeting() 함수를 호출한다.
function handleSubmit(event) {
    event.preventDefault();

    const userName = inputUserName.value;
    inputUserName.value =  '';
    localStorage.setItem('user-name', userName);

    paintGreeting(userName)
}

//  localStorage에 유저 이름이 없으면 inputForm을 보이게 하고
//  이름이 있으면 greeting이 보이게 한다.
function paintGreeting(name) {
    if (name === null) {
        inputForm.classList.remove('hidden');
    
    }else {
        greeting.classList.remove('hidden');
        inputForm.classList.add('hidden');
        greeting.innerText = `Hello ${name}!!`;
    }
}

const getUserName = localStorage.getItem('user-name');

paintGreeting(getUserName);

inputForm.addEventListener('submit', handleSubmit);