let submitBtn = document.querySelector('#submit');
let checkBox = document.querySelector('#checkbox');
let username = document.querySelector('#username');
let password= document.querySelector('#password');
let loginBtn=document.querySelector('#existing');

submitBtn.addEventListener('click',(event)=>{
	event.preventDefault();
// if(username.value === '' || password.value === ''){}
  if(checkbox.checked){
  let users =[];
  let user ={
   UserName : username.value,
   Password : password.value}
   users.push(user);
   localStorage.setItem('users', JSON.stringify(users));
  }
  else if(JSON.parse(localStorage.getItem('users'))){
  	let savedUser =	JSON.parse(localStorage.getItem('users'));
    savedUser.forEach((user)=>{
      if(user.UserName === username.value ){      
	    loginBtn.removeAttribute('hidden')
      loginBtn.addEventListener('click',(e)=>{
  		  e.preventDefault();
  		  alert(`Logged in as ${user.UserName}`)})
      }
    });
  }
  else{
		alert(`Logged in as ${username.value}`);
    }
});