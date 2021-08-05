const passwordInput = document.querySelector('.pass-word');
const toggleBtn = document.querySelector('.btn');
toggleBtn.addEventListener('click' , () => {
  if(passwordInput.type === 'password'){
    passwordInput.setAttribute('type','text');
  }
  else{
    passwordInput.setAttribute('type','password');
  }
});