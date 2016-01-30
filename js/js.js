function show(target,target2){
    document.getElementById(target).style.display = 'block';
    document.getElementById(target2).style.display = 'block';
    }

function hide(target,target2) {
  document.getElementById(target).style.display = 'none';
  document.getElementById(target2).style.display = 'none';
}


function showProduct(target,target2){
    document.getElementById(target).style.display = 'block';
    document.getElementById(target2).style.display = 'block';
    }

function hideProduct(target,target2) {
    document.getElementById(target).style.display = 'none';
    document.getElementById(target2).style.display = 'none';
    }

function showImgOverlay(target){
    document.getElementById(target).style.display = 'block';
    }

$('.img').hover(function(){
  $('#img-container div').animate({left: '0px'});
});

$('.img').mouseout(function(){
  $('#img-container div').animate({left: '-350px'});
});

function hideImgOverlay(target){
    document.getElementById(target).style.display = 'none';
    }
