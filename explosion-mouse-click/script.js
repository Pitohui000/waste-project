document.addEventListener('click', function(e) {
    // Create the image container
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('circle');

    // Adjust these offsets to half the width/height of the image container
    const offsetX = 100 / 2; // Assuming the image container is 100px wide
    const offsetY = 100 / 2; // Assuming the image container is 100px tall

    imageContainer.style.left = (e.pageX - offsetX) + 'px';
    imageContainer.style.top = (e.pageY - offsetY) + 'px';

    // Append it to the body
    document.body.appendChild(imageContainer);

    // Set a timeout to remove the image after animation
    setTimeout(() => {
        imageContainer.remove();
    }, 1000); // Adjust time as needed
});