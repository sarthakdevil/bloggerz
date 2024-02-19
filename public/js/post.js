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

function loadfile() {
    // Get the file input element
    var input = document.getElementById('file-input');
    
    // Check if any file is selected
    if (input.files && input.files[0]) {
        // Get the selected file
        var file = input.files[0];
        
        // Create a FileReader object
        var reader = new FileReader();
        
        // Set onload event handler
        reader.onload = function(e) {
            // Get the uploaded image element
            var img = document.getElementById('banner-img');
            
            // Set the src attribute of the image element to the data URL
            img.src = e.target.result;
            
            // Make the image visible
            img.style.display = 'block';
        };
        
        // Read the file as Data URL
        reader.readAsDataURL(file);
    }
}

function loadfilebottom() {
    // Get the file input element
    var input = document.getElementById('file-input-bottom');
    
    // Check if any file is selected
    if (input.files && input.files[0]) {
        // Get the selected file
        var file = input.files[0];
        
        // Create a FileReader object
        var reader = new FileReader();
        
        // Set onload event handler
        reader.onload = function(e) {
            // Get the uploaded image element
            var img = document.getElementById('uploadedImage-1');
            
            // Set the src attribute of the image element to the data URL
            img.src = e.target.result;
            
            // Make the image visible
            img.style.display = 'inline-block'; // Change display style to inline-block
        };
        
        // Read the file as Data URL
        reader.readAsDataURL(file);
    }
}

