// Sample image data with URLs, captions, and favorite status
// At the top of your script.js file, add this line
console.log('Script loaded!');

// And update your theme toggle function to log when clicked
function toggleTheme() {
    console.log('Theme toggle clicked!');
    document.body.classList.toggle('dark-mode');
}
// Sample image data with URLs, captions, and favorite status
const imageData = [
    {
        url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        caption: 'Sunset landscape with tree',
        isFavorite: true
    },
    {
        url: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
        caption: 'Night sky with stars',
        isFavorite: false
    },
    {
        url: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg',
        caption: 'Spring flowers bloom',
        isFavorite: true
    },
    {
        url: 'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg',
        caption: 'Mountain landscape panorama',
        isFavorite: false
    },
    {
        url: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg',
        caption: 'Forest road in autumn',
        isFavorite: true
    },
    {
        url: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg',
        caption: 'Tree-lined avenue',
        isFavorite: false
    }
];

// DOM elements
const galleryContainer = document.getElementById('gallery-container');
const themeToggle = document.getElementById('theme-toggle');
const favoritesFilter = document.getElementById('favorites-filter');

// State
let showFavoritesOnly = false;

// Function to render gallery items
function renderGallery(images) {
    // Clear current gallery
    galleryContainer.innerHTML = '';
    
    // Create and append image elements
    images.forEach(image => {
        // Skip non-favorites when filter is active
        if (showFavoritesOnly && !image.isFavorite) {
            return;
        }
        
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.position = 'relative'; // For favorite badge positioning
        
        const img = document.createElement('img');
        img.src = image.url;
        img.alt = image.caption;
        
        const caption = document.createElement('div');
        caption.className = 'gallery-caption';
        caption.textContent = image.caption;
        
        galleryItem.appendChild(img);
        galleryItem.appendChild(caption);
        
        // Add favorite badge if item is a favorite
        if (image.isFavorite) {
            const badge = document.createElement('span');
            badge.className = 'favorite-badge';
            badge.textContent = '★ Favorite';
            galleryItem.appendChild(badge);
        }
        
        galleryContainer.appendChild(galleryItem);
    });
}

// Toggle theme between light and dark
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Toggle favorites filter
function toggleFavoritesFilter() {
    showFavoritesOnly = !showFavoritesOnly;
    
    // Update button text
    favoritesFilter.textContent = showFavoritesOnly 
        ? 'Show All Images' 
        : 'Show Favorites Only';
    
    // Re-render gallery with current filter state
    renderGallery(imageData);
}

// Event listeners
themeToggle.addEventListener('click', toggleTheme);
favoritesFilter.addEventListener('click', toggleFavoritesFilter);

// Initial gallery render
document.addEventListener('DOMContentLoaded', () => {
    renderGallery(imageData);
});
