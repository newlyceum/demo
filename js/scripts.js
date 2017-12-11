$(document).ready(function(){
    console.log('js working');
    $('.container h1').on('click', function() {
        $('.container p').show();
    })
})