$(function(){
  var $btn = $('input[type="button"]'),
      i = 6,
      timer;
  
  $btn.val('同意（'+i+'s)');
  $btn.attr("disabled","disabled");
  timer = setInterval(function(){
    i--;
    if(i === 0){
      clearInterval(timer);
      $btn.val('同意');
      $btn.removeAttr('disabled');
    }else{
      $btn.val('同意（'+i+'s)');
      $btn.attr("disabled","disabled");
    }
  },1000);

  $btn.click(function(){
    alert('就知道你一定会同意的！')
  })
})
