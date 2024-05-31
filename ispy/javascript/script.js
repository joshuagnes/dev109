document.addEventListener('DOMContentLoaded', () => {
  const areas = document.querySelectorAll('area');
  const items = document.querySelectorAll('#items li');
  let foundItemsCount = 0;

  areas.forEach(area => {
    area.addEventListener('click', function () {
      foundItem(area.title);
    }, false);
  });

  function foundItem(itemName) {
    const listItem = Array.from(items).find(item => item.textContent === itemName);
    if (listItem && !listItem.style.textDecoration) {
      listItem.style.textDecoration = 'line-through';
      listItem.style.color = 'green';
      foundItemsCount++;

      if (foundItemsCount === items.length) {
        setTimeout(() => {
          if (confirm('Congratulations! You found all items. Do you want to play again?')) {
            location.reload();
          }
        }, 100);
      }
    }
  }
});
