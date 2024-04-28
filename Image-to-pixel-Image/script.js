document.getElementById('imageInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = new Image();
      img.onload = function() {
        const originalCanvas = document.getElementById('originalCanvas');
        const pixelatedCanvas = document.getElementById('pixelatedCanvas');
        const ctxO = originalCanvas.getContext('2d');
        const ctxP = pixelatedCanvas.getContext('2d');
        const pixelSize = 10;

        originalCanvas.width = pixelatedCanvas.width = img.width;
        originalCanvas.height = pixelatedCanvas.height = img.height;

        ctxO.drawImage(img, 0, 0, img.width, img.height);
        for (let y = 0; y < img.height; y += pixelSize) {
          for (let x = 0; x < img.width; x += pixelSize) {
            const p = ctxO.getImageData(x, y, 1, 1).data;
            ctxP.fillStyle = `rgba(${p[0]}, ${p[1]}, ${p[2]}, ${p[3] / 255})`;
            ctxP.fillRect(x, y, pixelSize, pixelSize);
          }
        }
    document.getElementById('downloadBtn').style.display = 'block';
      };
      img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
});

document.getElementById('slider').addEventListener('input', function() {
  updateSlider();
});

function updateSlider() {
  const slider = document.getElementById('slider');
  const value = slider.value;
  const pixelatedCanvas = document.getElementById('pixelatedCanvas');
  pixelatedCanvas.style.clipPath = `polygon(0 0, ${value}% 0, ${value}% 100%, 0 100%)`;
}
document.getElementById('downloadBtn').addEventListener('click', function() {
  const canvas = document.getElementById('pixelatedCanvas');
  const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  const link = document.createElement('a');
  link.download = 'pixelated-image.png';
  link.href = image;
  link.click();
});
