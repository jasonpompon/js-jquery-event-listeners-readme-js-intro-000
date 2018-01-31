//define functions here

$(document).ready(function(){

// call functions here
fucntion getIt() {
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
