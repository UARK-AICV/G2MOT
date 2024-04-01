document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.zoomable').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', (event) => {
            openLightbox(event.currentTarget.src);
        });
    });
});

function openLightbox(imgSrc) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.display = 'flex';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.zIndex = '1000';
    lightbox.style.cursor = 'zoom-out';
    document.body.appendChild(lightbox);

    const lightboxImg = document.createElement('img');
    lightboxImg.src = imgSrc;
    lightboxImg.style.maxWidth = '90%';
    lightboxImg.style.maxHeight = '90%';
    lightbox.appendChild(lightboxImg);

    let scale = 1;
    const ZOOM_SPEED = 0.001;

    lightboxImg.addEventListener('wheel', (e) => {
        e.preventDefault();
        let deltaY = e.deltaY || e.wheelDeltaY || -e.detail;
        scale += -deltaY * ZOOM_SPEED;
        scale = Math.max(0.1, scale); // Set a minimum scale
        lightboxImg.style.transform = `scale(${scale})`;
    });

    lightbox.addEventListener('click', () => {
        lightbox.remove();
    });
}