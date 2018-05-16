function main() {
    $('#main').hide();
    $('#banner').hide();
    $('table').hide();
    $('#footer').hide();
    $('#main').fadeIn(800);
    $('#banner').fadeIn(800);
    $('.container').fadeIn(800);
    $('table').slideDown(500);
    $('#footer').fadeIn(800);
}

$(document).ready(main);

$(document).ready(function(){
    
        $(window).scroll(function() {
            const $text = $('#text');
            $text.hidden();
            var wScroll = $(this).scrollTop();
            if(wScroll > 1710) {
                $text.fadeIn(800);
            }
            
    
            console.log(wScroll);
        })
    })