const upload=document.querySelector(`#upload`);
const authorInfo=document.querySelector('.author__information');
const titleInfo=document.querySelector('.title__information');
const descript=document.querySelector('.descript');
const email=document.querySelector('.email');
const button=document.querySelector('.button__publication');




function authorInformation(event){
    if(event.target.value.length<=4){
        document.querySelector('.li__one').style.color='red'
    }else{
        document.querySelector('.li__one').style.color='green'
    }
    checkNameLegth()
    checkLetter()
}
function checkNameLegth(){
    let name=authorInfo.value.split(/\s+/)
    console.log(name)
    if(name.length<=1){
        document.querySelector('.li__two').style.color='red'
    }else{
        document.querySelector('.li__two').style.color='green'
    }
    
}


function checkLetter(){
    let validLetter=/^[\u10A0-\u10FF\s]*$/;
    if(!validLetter.test(authorInfo.value)){
        document.querySelector('.li__three').style.color='red'
    }else{
        document.querySelector('.li__three').style.color='green'
    }
}









authorInfo.addEventListener("input",authorInformation)







