// Get DOM elements
const container = document.getElementById('container');
const resetBtn = document.getElementById('reset-btn');

// Initial grid size
const INITIAL_SIZE = 16;

// Function to create grid
function createGrid(size) {
    // Clear existing grid
    container.innerHTML = '';
    
    // Calculate square size
    const squareSize = 960 / size;
    
    // Create new grid
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        // Add hover effect
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = '#000';
        });
        
        container.appendChild(square);
    }
}

// Function to reset grid
function resetGrid() {
    let newSize = prompt('Enter number of squares per side (max 100):');
    
    // Validate input
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize < 1) {
        alert('Please enter a valid number');
        return;
    }
    if (newSize > 100) {
        alert('Maximum size is 100');
        return;
    }
    
    createGrid(newSize);
}

// Add event listener to button
resetBtn.addEventListener('click', resetGrid);

// Create initial grid
createGrid(INITIAL_SIZE);
