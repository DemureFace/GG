$(function(){

    $('.toggles button').click(function(){
        const get_id = this.id;
        const get_current = $('.posts .' + get_id);
       $('.post').not(get_current).hide(500);
       get_current.show(500); 
    })
    $('#showall').click(function(){
        $('.post').show(500);
    });
});