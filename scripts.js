const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Load theme from localStorage if present
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeIcon.src = 'moon.png';
}

// Toggle theme on click
themeIcon.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');

  themeIcon.src = isDark ? 'moon.png' : 'sun.png';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});