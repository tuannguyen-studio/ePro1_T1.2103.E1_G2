$(function(){
    function toggleAttr(el, attribute, vals) {
        if ($(el).attr(attribute) == vals[0]) {
            $(el).attr(attribute, vals[1]);
        } else if ($(el).attr(attribute) == vals[1]) {
            $(el).attr(attribute, vals[0]);
        }
    }

    $('.click').click(function () {
        var vals = ['../../IMGS/background/2.jpg', '../../IMGS/background/1.jpg'];
        toggleAttr($('#icon-img'), 'src', vals);
    })
})