function autoAdjustHeight(textarea) {
    // Reset the textarea's height to default to correctly calculate the scrollHeight
    textarea.style.height = "auto";

    // Set the textarea height to its scrollHeight (auto-adjust)
    textarea.style.height = textarea.scrollHeight + "px";

    // Move the textareas below according to the size of the one above
    var autoAdjustTextareas = document.getElementsByClassName('auto-adjust');
    for (var i = 1; i < autoAdjustTextareas.length; i++) {
        autoAdjustTextareas[i].style.top = autoAdjustTextareas[i - 1].offsetTop + autoAdjustTextareas[i - 1].offsetHeight + 'px';
    }
}

var loadFile = function(event) {
    var output = document.getElementById('banner');
    var label = document.querySelector('.file-input-label');
    var span = document.querySelector('.file-input-container')
    // Hide the label
    label.style.display = 'none';
    span.style.background="transparent";
    // Display the selected image
    output.src = URL.createObjectURL(event.target.files[0]);
    output.style.display = 'block';

    output.onload = function() {
        URL.revokeObjectURL(output.src); // free memory
    };
};

var loadFileBottom = function(event) {
    var output = document.getElementById('uploadedImage-1');
    var label = document.querySelector('.file-input-label-bottom');
    var span = document.querySelector('.file-input-container')
    // Hide the label
    label.style.display = 'none';
    span.style.background="transparent";
    // Display the selected image
    output.src = URL.createObjectURL(event.target.files[0]);
    output.style.display = 'block';

    output.onload = function() {
        URL.revokeObjectURL(output.src); // free memory
    };
};
