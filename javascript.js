// Sample image data with URLs, captions, and favorite status
const imageData = [
    {
        url: 'https://source.unsplash.com/random/800x600/?nature',
        caption: 'Beautiful nature landscape',
        isFavorite: true
    },
    {
        url: 'https://source.unsplash.com/random/800x600/?city',
        caption: 'Urban cityscape',
        isFavorite: false
    },
    {
        url: 'https://source.unsplash.com/random/800x600/?food',
        caption: 'Delicious cuisine',
        isFavorite: true
    },
    {
        url: 'https://source.unsplash.com/random/800x600/?animals',
        caption: 'Wildlife photography',
        isFavorite: false
    },
    {
        url: 'https://source.unsplash.com/random/800x600/?technology',
        caption: 'Modern technology',
        isFavorite: true
    },
    {
        url: 'https://source.unsplash.com/random/800x600/?architecture',
        caption: 'Impressive architecture',
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
