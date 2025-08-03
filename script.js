const portraitScreen = document.getElementById('portrait-screen');
const landscapeScreen = document.getElementById('landscape-screen');

function updateOrientation() {
  const isLandscape = window.innerWidth > window.innerHeight;

  if (isLandscape) {
    portraitScreen.style.opacity = 0;
    setTimeout(() => {
      portraitScreen.style.display = 'none';
      landscapeScreen.style.display = 'block';
      landscapeScreen.style.opacity = 1;

      // Redirect after short delay
      setTimeout(() => {
        window.location.href = 'main.html';
      }, 1000);
    }, 600);
  } else {
    landscapeScreen.style.opacity = 0;
    setTimeout(() => {
      landscapeScreen.style.display = 'none';
      portraitScreen.style.display = 'block';
      portraitScreen.style.opacity = 1;
    }, 600);
  }
}

window.addEventListener('load', () => {
  const video = document.getElementById('rotate-video');
  video.play().catch(() => {
    document.body.addEventListener('click', function resumeVideo() {
      video.play();
      document.body.removeEventListener('click', resumeVideo);
    });
  });

  updateOrientation();
});

window.addEventListener('resize', updateOrientation);
window.addEventListener('orientationchange', updateOrientation);
