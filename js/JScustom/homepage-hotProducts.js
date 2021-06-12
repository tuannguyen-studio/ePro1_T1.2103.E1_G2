$(function(){
    $('.category_item').click(function(){
        var category = $(this).attr('id');
        
        if(category === 'all'){
            $('.product_item').addClass('hide');
            setTimeout(function(){
                 $('.product_item').removeClass('hide');
            });
        } else{
            $('.product_item').addClass('hide');
            setTimeout(function () {
                $('.'+category).removeClass('hide');
            });
        }
    });
});