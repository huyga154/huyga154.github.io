function displayRandomImages() {
    var images = document.querySelectorAll('.image-container img');
    var outputDivs = document.querySelectorAll('.output-container div');

    var randomIndices = [];

    // Generate 3 unique random indices
    while (randomIndices.length < 3) {
        var randomIndex = Math.floor(Math.random() * images.length);
        if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
        }
    }

    // Display random images in output divs
    randomIndices.forEach(function (index, i) {
        outputDivs[i].textContent = images[index].alt;
        outputDivs[i].style.backgroundImage = 'url(' + images[index].src + ')';

    });
}
