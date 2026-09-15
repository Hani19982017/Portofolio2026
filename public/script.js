// Mohamed Hani Mohamed - Portfolio Interactive JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const searchInput = document.getElementById('projectSearch');

  function filterProjects() {
    const activeBtn = document.querySelector('.filter-btn.active');
    const category = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    projectCards.forEach((card) => {
      const cardCategory = card.getAttribute('data-category');
      const textContent = card.innerText.toLowerCase();

      const matchesCategory = category === 'all' || cardCategory === category;
      const matchesQuery = query === '' || textContent.includes(query);

      if (matchesCategory && matchesQuery) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      filterProjects();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', filterProjects);
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
