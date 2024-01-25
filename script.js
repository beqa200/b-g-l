const income=document.querySelector('.income');
const cross=document.querySelector('.cross')
const register=document.querySelector('.register')
const modalEmail=document.querySelector('.modal__email')


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
    const response=await fetch('https://george.pythonanywhere.com/api/login/',{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({
        email:modalEmail.value,
      })
    });
    console.log(response)
    const data= await response.json()
    localStorage.setItem('token',data.token)
    console.log(data)
    
  } catch (error){
    alert('Error during login:', error)
    
  }
}


