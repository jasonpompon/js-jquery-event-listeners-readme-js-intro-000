//define functions here

$(document).ready(function(){

// call functions here
funntion getIt() {
    $('p').on('click', function() {
        alert("Hey!")
    });
}

function frameIt() {
    $('img').on('load', function() {
        addClass('tasty')
    });
}

});
