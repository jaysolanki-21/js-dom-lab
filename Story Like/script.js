
var like = document.querySelector('.ri-heart-fill');
var story = document.querySelector('.story');

story.addEventListener('dblclick', function(){
    like.style.opacity = '1';
    like.style.transform = 'translate(-50%, -50%) scale(4)';

    setTimeout(function(){
        like.style.opacity = '0';
        
    }, 1000);
    setTimeout(function(){
        like.style.transform = 'translate(-50%, -50%) scale(0)';
    },1300);
});
