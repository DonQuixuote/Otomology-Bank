// Replace the random color function with a static color mapping
const elementColors = {
    // Row 1 (11 elements)
    'Sr': '#FFB3BA', // Soft pink
    'Ei': '#BAE1FF', // Soft blue
    'As': '#BAFFC9', // Soft green
    'Dz': '#FFE4BA', // Soft orange
    'Gj': '#E8BAFF', // Soft purple
    'Vi': '#FFBAF2', // Soft magenta
    'Ct': '#BAFFFE', // Soft cyan
    'T':  '#FFFFBA', // Soft yellow
    'Xj': '#D4BAFF', // Soft lavender
    'Eb': '#FFCBA4', // Soft peach
    'P':  '#B3E6CC', // Soft mint

    // Row 2 (5 elements)
    'Ro': '#FFD1DC', // Light rose
    'Cl': '#C1FFC1', // Light mint green
    'Yu': '#CAE1FF', // Light steel blue
    'Nd': '#FFF0F5', // Light lavender pink
    'K':  '#98FF98', // Light mint

    // Row 3 (10 elements)
    'Mt': '#DDA0DD', // Light plum
    'Lu': '#F0E68C', // Light khaki
    'Dx': '#E6E6FA', // Light periwinkle
    'Gd': '#FFA07A', // Light salmon
    'V':  '#87CEEB', // Light sky blue
    'Uq': '#98FB98', // Light pale green
    'Pb': '#DEB887', // Light wood
    'Wy': '#F08080', // Light coral
    'L':  '#E0FFFF', // Light cyan
    'Ux': '#FFDAB9', // Light peach

    // Row 4 (13 elements)
    'Pg': '#B0C4DE', // Light steel blue
    'Qe': '#FFB6C1', // Light pink
    'C':  '#FFA500', // Light orange
    'Ns': '#98FB98', // Light mint
    'Ai': '#DDA0DD', // Light purple
    'F':  '#87CEFA', // Light sky blue
    'Gy': '#F0E68C', // Light khaki
    'Kk': '#E6E6FA', // Light lavender
    'Yv': '#FFA07A', // Light salmon
    'Cj': '#20B2AA', // Light sea green
    'Iu': '#FF69B4', // Light hot pink
    'D':  '#CD853F', // Light peru
    'Co': '#BA55D3', // Light orchid

    // Row 5 (9 elements)
    'W':  '#FF69B4', // Light hot pink
    'Lx': '#4682B4', // Light steel blue
    'N':  '#6B8E23', // Light olive
    'U':  '#CD5C5C', // Light indian red
    'Vl': '#9370DB', // Light purple
    'Se': '#3CB371', // Light sea green
    'Nm': '#FF7F50', // Light coral
    'Dd': '#6495ED', // Light cornflower
    'Ok': '#DA70D6', // Light orchid

    // Row 6 (10 elements)
    'Da': '#FF8C00', // Light dark orange
    'S':  '#8FBC8F', // Light dark sea green
    'Z':  '#E9967A', // Light dark salmon
    'Cv': '#9932CC', // Light dark orchid
    'Vt': '#8B0000', // Light dark red
    'Ek': '#556B2F', // Light dark olive
    'Ji': '#483D8B', // Light dark slate blue
    'Aw': '#2F4F4F', // Light dark slate gray
    'Kn': '#800000', // Light maroon
    'Ha': '#4B0082', // Light indigo

    // Row 7 (1 element)
    'Ax': '#8B4513'  // Light saddle brown
};

// Update the elements object to use the static colors
const elements = {
    // Row 1 (11 elements)
    '0,0': { symbol: 'Sr', atomicNumber: 1, massNumber: 2, color: elementColors['Sr'] },
    '0,1': { symbol: 'Ei', atomicNumber: 2, massNumber: 4, color: elementColors['Ei'] },
    '0,2': { symbol: 'As', atomicNumber: 3, massNumber: 7, color: elementColors['As'] },
    '0,3': { symbol: 'Dz', atomicNumber: 4, massNumber: 7, color: elementColors['Dz'] },
    '0,4': { symbol: 'Gj', atomicNumber: 5, massNumber: 10, color: elementColors['Gj'] },
    '0,5': { symbol: 'Vi', atomicNumber: 6, massNumber: 10, color: elementColors['Vi'] },
    '0,6': { symbol: 'Ct', atomicNumber: 7, massNumber: 13, color: elementColors['Ct'] },
    '0,7': { symbol: 'T', atomicNumber: 8, massNumber: 16, color: elementColors['T'] },
    '0,8': { symbol: 'Xj', atomicNumber: 9, massNumber: 18, color: elementColors['Xj'] },
    '0,11': { symbol: 'Eb', atomicNumber: 10, massNumber: 19, color: elementColors['Eb'] },
    '0,12': { symbol: 'P', atomicNumber: 11, massNumber: 22, color: elementColors['P'] },

    // Row 2 (5 elements)
    '1,0': { symbol: 'Ro', atomicNumber: 12, massNumber: 25, color: elementColors['Ro'] },
    '1,1': { symbol: 'Cl', atomicNumber: 13, massNumber: 25, color: elementColors['Cl'] },
    '1,10': { symbol: 'Yu', atomicNumber: 14, massNumber: 29, color: elementColors['Yu'] },
    '1,11': { symbol: 'Nd', atomicNumber: 15, massNumber: 32, color: elementColors['Nd'] },
    '1,12': { symbol: 'K', atomicNumber: 16, massNumber: 31, color: elementColors['K'] },

    // Row 3 (10 elements)
    '2,0': { symbol: 'Mt', atomicNumber: 17, massNumber: 33, color: elementColors['Mt'] },
    '2,1': { symbol: 'Lu', atomicNumber: 18, massNumber: 37, color: elementColors['Lu'] },
    '2,2': { symbol: 'Dx', atomicNumber: 19, massNumber: 39, color: elementColors['Dx'] },
    '2,3': { symbol: 'Gd', atomicNumber: 20, massNumber: 40, color: elementColors['Gd'] },
    '2,4': { symbol: 'V', atomicNumber: 21, massNumber: 43, color: elementColors['V'] },
    '2,8': { symbol: 'Uq', atomicNumber: 22, massNumber: 45, color: elementColors['Uq'] },
    '2,9': { symbol: 'Pb', atomicNumber: 23, massNumber: 48, color: elementColors['Pb'] },
    '2,10': { symbol: 'Wy', atomicNumber: 24, massNumber: 47, color: elementColors['Wy'] },
    '2,11': { symbol: 'L', atomicNumber: 25, massNumber: 50, color: elementColors['L'] },
    '2,12': { symbol: 'Ux', atomicNumber: 26, massNumber: 51, color: elementColors['Ux'] },

    // Row 4 (all 13 elements)
    '3,0': { symbol: 'Pg', atomicNumber: 27, massNumber: 53, color: elementColors['Pg'] },
    '3,1': { symbol: 'Qe', atomicNumber: 28, massNumber: 58, color: elementColors['Qe'] },
    '3,2': { symbol: 'C', atomicNumber: 29, massNumber: 61, color: elementColors['C'] },
    '3,3': { symbol: 'Ns', atomicNumber: 30, massNumber: 62, color: elementColors['Ns'] },
    '3,4': { symbol: 'Ai', atomicNumber: 31, massNumber: 67, color: elementColors['Ai'] },
    '3,5': { symbol: 'F', atomicNumber: 32, massNumber: 65, color: elementColors['F'] },
    '3,6': { symbol: 'Gy', atomicNumber: 33, massNumber: 67, color: elementColors['Gy'] },
    '3,7': { symbol: 'Kk', atomicNumber: 34, massNumber: 71, color: elementColors['Kk'] },
    '3,8': { symbol: 'Yv', atomicNumber: 35, massNumber: 74, color: elementColors['Yv'] },
    '3,9': { symbol: 'Cj', atomicNumber: 36, massNumber: 74, color: elementColors['Cj'] },
    '3,10': { symbol: 'Iu', atomicNumber: 37, massNumber: 75, color: elementColors['Iu'] },
    '3,11': { symbol: 'D', atomicNumber: 38, massNumber: 79, color: elementColors['D'] },
    '3,12': { symbol: 'Co', atomicNumber: 39, massNumber: 80, color: elementColors['Co'] },

    // Row 5 (9 elements)
    '4,0': { symbol: 'W', atomicNumber: 40, massNumber: 81, color: elementColors['W'] },
    '4,1': { symbol: 'Lx', atomicNumber: 41, massNumber: 81, color: elementColors['Lx'] },
    '4,2': { symbol: 'N', atomicNumber: 42, massNumber: 86, color: elementColors['N'] },
    '4,7': { symbol: 'U', atomicNumber: 43, massNumber: 87, color: elementColors['U'] },
    '4,8': { symbol: 'Vl', atomicNumber: 44, massNumber: 89, color: elementColors['Vl'] },
    '4,9': { symbol: 'Se', atomicNumber: 45, massNumber: 91, color: elementColors['Se'] },
    '4,10': { symbol: 'Nm', atomicNumber: 46, massNumber: 98, color: elementColors['Nm'] },
    '4,11': { symbol: 'Dd', atomicNumber: 47, massNumber: 100, color: elementColors['Dd'] },
    '4,12': { symbol: 'Ok', atomicNumber: 48, massNumber: 92, color: elementColors['Ok'] },

    // Row 6 (10 elements)
    '5,0': { symbol: 'Da', atomicNumber: 49, massNumber: 104, color: elementColors['Da'] },
    '5,1': { symbol: 'S', atomicNumber: 50, massNumber: 102, color: elementColors['S'] },
    '5,2': { symbol: 'Z', atomicNumber: 51, massNumber: 104, color: elementColors['Z'] },
    '5,6': { symbol: 'Cv', atomicNumber: 52, massNumber: 104, color: elementColors['Cv'] },
    '5,7': { symbol: 'Vt', atomicNumber: 53, massNumber: 102, color: elementColors['Vt'] },
    '5,8': { symbol: 'Ek', atomicNumber: 54, massNumber: 111, color: elementColors['Ek'] },
    '5,9': { symbol: 'Ji', atomicNumber: 55, massNumber: 103, color: elementColors['Ji'] },
    '5,10': { symbol: 'Aw', atomicNumber: 56, massNumber: 112, color: elementColors['Aw'] },
    '5,11': { symbol: 'Kn', atomicNumber: 57, massNumber: 108, color: elementColors['Kn'] },
    '5,12': { symbol: 'Ha', atomicNumber: 58, massNumber: 117, color: elementColors['Ha'] },

    // Row 7 (1 element)
    '6,0': { symbol: 'Ax', atomicNumber: 59, massNumber: 109, color: elementColors['Ax'] }
};

// Update createPeriodicTable function to use coordinate system
function createPeriodicTable() {
    const periodicTable = document.getElementById('periodicTable');
    periodicTable.className = 'periodic-table';
    
    // Create the table without adding titles
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    
    for (let row = 0; row < 7; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < 13; col++) {
            const key = `${row},${col}`;
            const td = document.createElement('td');
            
            if (elements[key]) {
                const element = elements[key];
                td.innerHTML = `
                    <div class="element" 
                         data-symbol="${element.symbol}"
                         style="background-color: ${element.color}">
                        <span class="symbol">${element.symbol}</span>
                        <span class="mass-number">${element.massNumber}</span>
                    </div>`;
            } else {
                td.className = 'empty';
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    
    table.appendChild(tbody);
    periodicTable.innerHTML = ''; // Clear existing content
    periodicTable.appendChild(table);
}

// Add this after createPeriodicTable function
function addElementClickHandlers() {
    document.querySelectorAll('.element').forEach(element => {
        element.addEventListener('click', () => {
            const symbol = element.getAttribute('data-symbol');
            if (symbol) {
                const elementModal = document.getElementById('elementModal');
                const elementName = document.getElementById('elementName');
                const elementData = Object.values(elements).find(el => el.symbol === symbol);
                
                if (elementData) {
                    elementName.textContent = `${symbol} (${elementData.atomicNumber})`;
                    elementModal.style.display = 'block';
                }
            }
        });
    });
}

// Add this after your existing code but before any DOMContentLoaded events
const userCollection = {
    init() {
        if (!localStorage.getItem('isotopeCollection')) {
            localStorage.setItem('isotopeCollection', JSON.stringify({}));
        }
    },

    toggleIsotope(elementSymbol, isotopeName) {
        const collection = JSON.parse(localStorage.getItem('isotopeCollection'));
        if (!collection[elementSymbol]) {
            collection[elementSymbol] = [];
        }
        
        const index = collection[elementSymbol].indexOf(isotopeName);
        if (index === -1) {
            collection[elementSymbol].push(isotopeName);
        } else {
            collection[elementSymbol].splice(index, 1);
        }
        
        localStorage.setItem('isotopeCollection', JSON.stringify(collection));
        
        // Check if all isotopes for this element are collected
        const elementIsotopes = isotopeEquations[elementSymbol] || [];
        const isComplete = elementIsotopes.length === collection[elementSymbol].length;
        
        // Find the element on the periodic table using data attribute
        const elements = document.querySelectorAll('.element');
        elements.forEach(element => {
            const symbol = element.querySelector('.symbol');
            if (symbol && symbol.textContent === elementSymbol) {
                if (isComplete) {
                    element.classList.add('completed');
                } else {
                    element.classList.remove('completed');
                }
            }
        });
        
        this.updateProgress();
    },

    updateProgress() {
        const collection = JSON.parse(localStorage.getItem('isotopeCollection'));
        let totalCollected = 0;
        let totalIsotopes = 0;

        // Calculate totals
        Object.keys(isotopeEquations).forEach(element => {
            const elementIsotopes = isotopeEquations[element] || [];
            const collectedIsotopes = collection[element] || [];
            totalCollected += collectedIsotopes.length;
            totalIsotopes += elementIsotopes.length;
        });

        // Update the progress circle
        const percentage = document.querySelector('.percentage');
        const label = document.querySelector('.label');
        const progressPath = document.querySelector('.progress');
        
        if (percentage && label && progressPath) {
            const percentValue = (totalCollected / totalIsotopes) * 100;
            percentage.textContent = `${percentValue.toFixed(1)}%`;
            label.textContent = `${totalCollected}/${totalIsotopes} Isotopes`;
            
            // Calculate the SVG path for the circle
            const radius = 15.9155; // This matches your SVG path
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (percentValue / 100) * circumference;
            progressPath.style.strokeDasharray = `${circumference} ${circumference}`;
            progressPath.style.strokeDashoffset = offset;
        }
    }
};

// Update your existing DOMContentLoaded event listener to include these initializations
document.addEventListener('DOMContentLoaded', () => {
    // Apply dark mode immediately if it's enabled in localStorage
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
    
    createPeriodicTable();
    addElementClickHandlers();
    setupEventListeners();
    
    // Initialize userCollection
    userCollection.init();
    
    // Check initial state of all elements
    const collection = JSON.parse(localStorage.getItem('isotopeCollection'));
    Object.keys(isotopeEquations).forEach(elementSymbol => {
        const elementIsotopes = isotopeEquations[elementSymbol] || [];
        const collectedIsotopes = collection[elementSymbol] || [];
        const isComplete = elementIsotopes.length === collectedIsotopes.length;
        
        const elements = document.querySelectorAll('.element');
        elements.forEach(element => {
            const symbol = element.querySelector('.symbol');
            if (symbol && symbol.textContent === elementSymbol) {
                if (isComplete) {
                    element.classList.add('completed');
                } else {
                    element.classList.remove('completed');
                }
            }
        });
    });
    
    userCollection.updateProgress();
});

function setupEventListeners() {
    // Menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const slideMenu = document.querySelector('.slide-menu');
    const menuClose = document.querySelector('.menu-close');

    menuToggle.addEventListener('click', () => {
        slideMenu.classList.add('active');
    });

    menuClose.addEventListener('click', () => {
        slideMenu.classList.remove('active');
    });

    // Add click outside listener to close menu
    document.addEventListener('click', (e) => {
        if (!slideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            slideMenu.classList.remove('active');
        }
    });

    // Dark mode toggle with sync
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check for saved dark mode preference and apply it immediately
    if (localStorage.getItem('darkMode') === 'true') {
        body.classList.add('dark-mode');
        if (darkModeToggle) darkModeToggle.checked = true;
    } else {
        body.classList.remove('dark-mode');
        if (darkModeToggle) darkModeToggle.checked = false;
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    });

    // Element click handlers
    const elementModal = document.getElementById('elementModal');
    const closeButton = elementModal.querySelector('.close');

    // Close modal when clicking the X button
    closeButton.addEventListener('click', () => {
        elementModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === elementModal) {
            elementModal.style.display = 'none';
        }
    });
}

function showElementDetails(symbol) {
    const elementModal = document.getElementById('elementModal');
    const elementName = document.getElementById('elementName');
    const element = Object.entries(elements).find(([sym]) => sym === symbol)[1];
    
    elementName.textContent = `${symbol} (${element.atomicNumber})`;
    elementModal.style.display = 'block';
    
    // Clear previous content
    document.getElementById('isotopes').innerHTML = '';
    document.getElementById('combinations').innerHTML = '';
    document.getElementById('reactionResult').innerHTML = '';
}

// Add roadmap and reaction log modal handlers
document.addEventListener('DOMContentLoaded', () => {
    const roadmapBtn = document.getElementById('roadmapBtn');
    const reactionLogBtn = document.getElementById('reactionLogBtn');
    const roadmapModal = document.getElementById('roadmapModal');
    const reactionLogModal = document.getElementById('reactionLogModal');

    // Roadmap modal
    roadmapBtn.addEventListener('click', () => {
        roadmapModal.style.display = 'block';
    });

    // Reaction log modal
    reactionLogBtn.addEventListener('click', () => {
        reactionLogModal.style.display = 'block';
    });

    // Close buttons for both modals
    document.querySelectorAll('.modal .close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            closeBtn.closest('.modal').style.display = 'none';
        });
    });

    // Click outside to close modals
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
});

// Update the CSS section
const style = document.createElement('style');
style.textContent = `
    .periodic-table {
        width: 1027px;
        margin: 0 auto;
        border-collapse: separate;
        border-spacing: 2px;
        padding: 8px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;  // Center horizontally
        align-items: center;      // Center vertically
    }
    
    .periodic-table table {
        width: fit-content;       // Allow table to be its natural size
        border-collapse: separate;
        border-spacing: 2px;
        margin: 0 auto;          // Center the table
        padding: 0;
    }
    
    .periodic-table td {
        padding: 0;
        width: 75px;
        height: 75px;
        box-sizing: border-box;
    }
    
    .periodic-table .element {
        width: 75px;
        height: 75px;
        border: 1px solid #ccc;
        position: relative;
        transition: all 0.2s ease;
        background: rgba(255, 255, 255, 0.8);
        box-sizing: border-box;
        margin: 0;
    }
    
    .periodic-table .element:hover {
        transform: scale(1.1);
        z-index: 1;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
    }
    
    .periodic-table .element .symbol {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 22px;
        font-weight: bold;
        color: #000;
    }
    
    .periodic-table .element .mass-number {
        position: absolute;
        top: 4px;
        left: 4px;
        font-size: 12px;
        color: #000;
    }
    
    .periodic-table .empty {
        width: 75px;
        height: 75px;
        box-sizing: border-box;
    }
    
    /* Dark mode styles */
    .dark-mode .periodic-table .element {
        background: rgba(40, 40, 40, 0.8);
        border-color: #444;
    }
    
    .dark-mode .periodic-table .element .symbol {
        color: #000;
    }
    
    .dark-mode .periodic-table .element .mass-number {
        color: #000;
    }

    .periodic-title {
        font-size: 48px;
        text-align: center;
        margin: 20px 0 10px;
        color: #e0e0e0;
    }

    .universe-title {
        font-size: 36px;
        text-align: center;
        margin: 10px 0 30px;
        color: #e0e0e0;
    }

    .dark-mode .periodic-title {
        color: #fff;
    }

    .dark-mode .universe-title {
        color: #ccc;
    }

    /* Progress circle styles */
    .progress-circle {
        position: relative;
    }

    /* Progress text styles */
    .percentage {
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 500;
        color: #333;
    }

    .label {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 400;
        color: #666;
    }

    /* Dark mode text styles */
    body.dark-mode .percentage {
        color: #fff;
    }

    body.dark-mode .label {
        color: #ccc;
    }

    /* Light mode - slightly darker than white background */
    .progress-circle path:first-child {
        stroke: #e0e0e0;  /* Light grey */
    }

    .progress-circle path.progress {
        stroke: #4CAF50;  /* Keep the green progress color */
    }

    /* Dark mode - slightly darker than dark background */
    body.dark-mode .progress-circle path:first-child {
        stroke: #222222;  /* Darker than #2a2a2a background */
    }

    body.dark-mode .progress-circle path.progress {
        stroke: #4CAF50;  /* Keep the green progress color */
    }
`;
document.head.appendChild(style);

// ... rest of the code from script.js remains the same ... 