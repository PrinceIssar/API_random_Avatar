// (function (){
//
//
//
// })();

$(document).ready(function (){
  
    $('button').click(function (){
        const name = $('#nameid').val();
        // alert(name);
        $('.imgChange').attr('src',` https://joeschmoe.io/api/v1/${name}`);
        const b = $('.imgChange');
        console.log(b);
        console.log(b);


    });
});
