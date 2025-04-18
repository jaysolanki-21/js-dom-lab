var button = document.querySelector('.addfriend');
var flag = 0;
button.addEventListener('click',function(){
    if(flag == 0){
        
        button.innerHTML = 'Remove friend';
        button.style.backgroundColor = 'red';
        flag = 1;
    }
    else{
        button.innerHTML = 'Add friend';
        button.style.backgroundColor = 'green';
        flag = 0;
    }
   
})