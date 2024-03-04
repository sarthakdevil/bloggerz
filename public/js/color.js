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
function formatText(style) {
    var textarea = document.activeElement;
    var selectionStart = textarea.selectionStart;
    var selectionEnd = textarea.selectionEnd;
    var selectedText = textarea.value.substring(selectionStart, selectionEnd);

    switch (style) {
        case 'bold':
            selectedText = "<b>" + selectedText + "</b>";
            break;
        case 'italic':
            selectedText = "<i>" + selectedText + "</i>";
            break;
    }

    var newText = textarea.value.substring(0, selectionStart) + selectedText + textarea.value.substring(selectionEnd);
    textarea.value = newText;

    // Preserve selection
    textarea.setSelectionRange(selectionStart, selectionStart + selectedText.length);
}