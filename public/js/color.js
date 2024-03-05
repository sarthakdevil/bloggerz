document.addEventListener('DOMContentLoaded', function() {
    const bgcolorInput = document.getElementById('bgcolor');
    const fontcolorInput = document.getElementById('color');
    const fontSelect = document.getElementById('font');
    const textareas = document.querySelectorAll('textarea');

    // Add event listeners to both color inputs and font select
    bgcolorInput.addEventListener('input', applyStyles);
    fontcolorInput.addEventListener('input', applyStyles);
    fontSelect.addEventListener('change', applyStyles);

    function applyStyles() {
        const selectedBgColor = bgcolorInput.value;
        const selectedFontColor = fontcolorInput.value;
        const selectedFont = fontSelect.value;
        
        // Apply selected background color
        document.body.style.backgroundColor = selectedBgColor;
        // Apply selected font color
        document.body.style.color = selectedFontColor;

        // Apply selected font family
        document.body.style.fontFamily = selectedFont;
                textareas.forEach(textarea => {
            textarea.style.backgroundColor = selectedBgColor;
            textarea.style.color = selectedFontColor;
            textarea.style.fontFamily = selectedFont;
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior

        // Extract the values of color inputs
        const bgColor = selectedBgColor;
        const fontColor =selectedFontColor;
        const font = selectedFont;
    });
});
function GetSelectedText() {

    if (document.getSelection) {    // all browsers, except IE before version 9
        var sel = document.getSelection();
            // sel is a string in Firefox and Opera, 
            // and a selectionRange object in Google Chrome, Safari and IE from version 9
            // the alert method displays the result of the toString method of the passed object
        alert(sel);
    } 
    else {
        if (document.selection) {   // Internet Explorer before version 9
            var textRange = document.selection.createRange();
            alert(textRange.text);
        }
    }
}

function applyBold() {
    applyStyle('bold');
}

function applyItalic() {
    applyStyle('italic');
}

function applyStyle(style) {
    var textarea = document.activeElement;
    var selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);

    switch (style) {
        case 'bold':
            selectedText = "**" + selectedText + "**"; // Markdown style for bold
            break;
        case 'italic':
            selectedText = "*" + selectedText + "*"; // Markdown style for italic
            break;
    }

    var newText = textarea.value.substring(0, textarea.selectionStart) + selectedText + textarea.value.substring(textarea.selectionEnd);
    textarea.value = newText;

    // Adjust the cursor position to the end of the inserted text
    textarea.selectionStart = textarea.selectionEnd = textarea.selectionStart + selectedText.length;
}


// Usage:
// Call applyStyle('bold') or applyStyle('italic') where appropriate in your code
