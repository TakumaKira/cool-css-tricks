const cursor = document.querySelector('.custom-cursor');
const targets = document.querySelectorAll('.hover-target');

targets.forEach(target => {
  target.addEventListener('mousemove', (e) => {
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    cursor.style.transform = `translate(-50%, -50%) translate(${e.clientX}px, ${e.clientY}px) scale(1.5)`;
  });

  target.addEventListener('mouseleave', () => {
    cursor.style.transform = `translate(-50%, -50%) scale(1)`;
  });
});

document.addEventListener('mousedown', () => {
  cursor.classList.add('click');
});
document.addEventListener('mouseup', () => {
  cursor.classList.remove('click');
});