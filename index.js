$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})



document.addEventListener("DOMContentLoaded", function() {
  const searchBar = document.getElementById('search-bar');
  const recipeCards = document.querySelectorAll('.recipe-card');

  searchBar.addEventListener('input', function(event) {
    const searchText = event.target.value.toLowerCase();

    recipeCards.forEach(card => {
      const badges = card.querySelectorAll('.badge');
      let matches = false;

      badges.forEach(badge => {
        if (badge.textContent.toLowerCase().includes(searchText)) {
          matches = true;
        }
      });

      if (matches) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});