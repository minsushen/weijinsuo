// 工具提示需要手动添加调用
$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $(window).scroll(function(){
      var scrollTop=$(document).scrollTop();
      if(scrollTop>40){
        $('#slide').css({
          marginTop:82
        })
      }else{
        $('#slide').css({
          marginTop:0
        })
      }
    })
  })