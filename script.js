const income=document.querySelector('.income');
const cross=document.querySelector('.cross')
const register=document.querySelector('.register')
const modalEmail=document.querySelector('.modal__email')
const logIn=modalEmail.value

if(localStorage.getItem('email')){
  modalEmail.value=localStorage.getItem('email')
}




cross.addEventListener('click',()=>{
    document.querySelector('#modalWindow').style.visibility='hidden'
})
income.addEventListener('click',(event)=>{
     document.querySelector('#modalWindow').style.visibility='visible'
})
register.addEventListener('click',()=>{
    localStorage.setItem('email',modalEmail.value)

    login()
})
async function login(){
  try{
    const responce=await fetch('https://george.pythonanywhere.com/api/login/',{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({
        email:'logIn',
      })
    });
    console.log(responce)
    const data= await responce.json()
    console.log(data)
    
  } catch (error){
    alert('Error during login:', error)
    
  }
}



const item = [...document.querySelectorAll(".item")];
const nav = [...document.querySelectorAll(".nav-list")];
console.log(nav);

const foo = item.filter((ele, index) => ele[index] == "UI/UX");
console.log(foo);

