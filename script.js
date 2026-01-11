document.addEventListener("DOMContentLoaded", function() {
  // Show one page at a time
  function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
  }

  // Recipe titles for random generator
  const recipes = {
    dessert: ["Fruit Tart"],
    savory: ["Chicken Satay", "Ancho Chicken"]
  };

  // Show random recipe title only
  function showRandom(type) {
    const list = recipes[type];
    const index = Math.floor(Math.random() * list.length);
    document.getElementById('recipeOutput').textContent = list[index];
  }

  // Toggle full recipe display for boxes
  function toggleRecipe(recipeId) {
    const element = document.getElementById(recipeId);
    if (element.style.display === 'block') {
      element.style.display = 'none';
    } else {
      element.style.display = 'block';
    }
  }

  // Expose functions globally for buttons
  window.showPage = showPage;
  window.showRandom = showRandom;
  window.toggleRecipe = toggleRecipe;

  // Show home page by default
  showPage('home');
});

