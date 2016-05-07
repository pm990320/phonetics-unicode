// function operates on button that was clicked to put the character into the text box
function putChar(target) {
    $('#textbox').val( $('#textbox').val() + $(target).text() );
}