$(function(){
//
//  $('textarea').on('focus').function(){
//    alert('aaa')
//    $(this).attr('rows'.'10');
//  }).on('blur',function(){
//    $(this).sttr('attr','3');
//  })

 $("textarea.tweet_textarea").focus(function(){
              $(this).css('height','150px');
              $("div.on_focus").css('display','block');
           }).blur(function(){
               $(this).css('height','58px');
               $("div.on_focus").css('display','none');
           });


});
