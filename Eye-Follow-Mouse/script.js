document.addEventListener('mousemove', function(e) {
  const eye = document.querySelector('.eye');
  const pupil = document.querySelector('.pupil');

  const eyeRect = eye.getBoundingClientRect();
  const eyeX = eyeRect.left + eyeRect.width / 2;
  const eyeY = eyeRect.top + eyeRect.height / 2;

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Moving the eye
  const maxEyeMove = 10;  // 眼睛的移动范围，可以根据需要调整
  const eyeDeltaX = (mouseX - eyeX) / eyeX * maxEyeMove;
  const eyeDeltaY = (mouseY - eyeY) / eyeY * maxEyeMove;
  eye.style.transform = `translate(${eyeDeltaX}px, ${eyeDeltaY}px)`;

  // Moving the pupil
  const deltaX = mouseX - eyeX;
  const deltaY = mouseY - eyeY;
  const angle = Math.atan2(deltaY, deltaX);
  const maxDist = eyeRect.width / 10; // 增大瞳孔的移动半径
  const pupilX = maxDist * Math.cos(angle);
  const pupilY = maxDist * Math.sin(angle);
  pupil.style.transform = `translate(0%, 0%) translate(${pupilX}px, ${pupilY}px)`;
});