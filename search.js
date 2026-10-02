document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search');
    const searchableItems = document.querySelectorAll('.card, .activity-item, tbody tr');

    if (!searchInput) {
        return;
    }

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.trim().toLowerCase();

        searchableItems.forEach(function (item) {
            const matches = item.textContent.toLowerCase().includes(query);
            item.hidden = !matches;
        });
    });
});
