const container = document.querySelector('.container');
const cursor = document.querySelector('.custom-cursor');
const targets = document.querySelectorAll('.hover-target');

targets.forEach(target => {
  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
  });

  container.addEventListener('mouseleave', () => {
    cursor.style.top = `0px`;
    cursor.style.left = `0px`;
  });
});

document.addEventListener('mousedown', () => {
  cursor.classList.add('click');
});
document.addEventListener('mouseup', () => {
  cursor.classList.remove('click');
});