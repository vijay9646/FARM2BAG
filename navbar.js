/*nave bar search bar java script start */
    document.addEventListener("DOMContentLoaded", function () {
        const searchInput = document.querySelector('input[name="search"]');
        const gridItems = document.querySelectorAll('.grid-item');

        searchInput.addEventListener('input', function () {
            const searchTerm = searchInput.value.toLowerCase();

            gridItems.forEach(function (item) {
                const fruitName = item.querySelector('h2').innerText.toLowerCase();

                if (fruitName.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

/*nave bar search bar java script end */