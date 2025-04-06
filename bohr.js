// Add this at the very top of bohr.js
const allowedAddresses = [
    '0x72fe3c398c9a030b9b2be1fe1ff07701167571d4',
    '0x9c54a9c609212d2fd034b55cf3b42ba99af52880',
    '0xccb4e229fc4ebe2c8034960ca9a4b3ae5ef3a7bb',
    '0x3ba3245300d0a4f0deb84073572a97ff09659f83',
    '0xa4ac3321fd639a7e2b53da62897955d920c97012',
    '0x620051b8553a724b742ae6ae9cc3585d29f49848',
    '0x13c942e3f8be4faf966ef03e6038b33d000db22f',
    '0x35002a946eadb3de275b01e12e15ccd8ca807dd2',
    '0xf8d0c9f300d0649861963ebae0bb568533619448',
    '0xb6734417db6a724c4ff398699c69eff23c64a6db'
];

async function checkWalletAccess() {
    try {
        // First check if MetaMask is installed
        if (typeof window.ethereum === 'undefined') {
            console.log('MetaMask not detected');
            alert('Please install MetaMask to access this page');
            window.location.href = 'index.html';
            return false;
        }

        console.log('Requesting accounts...');
        const accounts = await window.ethereum.request({ 
            method: 'eth_requestAccounts' 
        });
        
        // Convert both the user's address and allowed addresses to lowercase for comparison
        const userAddress = accounts[0].toLowerCase();
        const allowedAddressesLower = allowedAddresses.map(addr => addr.toLowerCase());
        
        // Log for debugging
        console.log('Connected address:', userAddress);
        console.log('Is address allowed:', allowedAddressesLower.includes(userAddress));

        if (!allowedAddressesLower.includes(userAddress)) {
            console.log('Access denied for address:', userAddress);
            alert('Access denied. Your wallet is not on the allowlist.');
            window.location.href = 'index.html';
            return false;
        }

        // If access granted, show the page content
        console.log('Access granted');
        
        // Make sure body exists and wait for it to be ready
        if (document.readyState === 'loading') {
            await new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve));
        }

        // Now safely set visibility
        if (document.body) {
            document.body.style.visibility = 'visible';
            return true;
        } else {
            throw new Error('Document body not found');
        }

    } catch (error) {
        console.error('Error in checkWalletAccess:', error);
        alert('Error connecting to wallet: ' + error.message);
        return false;
    }
}

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
    'Ax': '#8B4513',  // Light saddle brown
    'I': '#8B4513',  // Similar brown shade
    'Jb': '#CD853F', // Light brown
    'Go': '#DEB887', // Light beige
    'X': '#D2691E',  // Chocolate brown
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
    '6,0': { symbol: 'Ax', atomicNumber: 59, massNumber: 109, color: elementColors['Ax'] },
    '6,1': { symbol: 'I', atomicNumber: 60, massNumber: 115, color: elementColors['I'] },
    '6,2': { symbol: 'Jb', atomicNumber: 61, massNumber: 116, color: elementColors['Jb'] },
    '6,3': { symbol: 'Go', atomicNumber: 62, massNumber: 118, color: elementColors['Go'] },
    '6,4': { symbol: 'X', atomicNumber: 63, massNumber: 119, color: elementColors['X'] },
    '6,6': { symbol: 'Eh', atomicNumber: 64, massNumber: 124, color: '#9370DB' }, // Eh in position 7
    '6,10': { symbol: 'Ys', atomicNumber: 65, massNumber: 125, color: '#FF69B4' }  // Ys in position 11
};

// Replace the entire isotopeEquations object with this updated version
const isotopeEquations = {
    'Sr': [
        { number: 1, isotope: 'Sr-1', equation: 'Mineable', energy: '' },
        { number: 2, isotope: 'Sr-2', equation: 'Mineable', energy: '' },
        { number: 3, isotope: 'Sr-3', equation: 'Mineable', energy: '' }
    ],
    'Ei': [
        { number: 4, isotope: 'Ei-4', equation: 'Mineable', energy: '' },
        { number: 5, isotope: 'Ei-5', equation: 'Mineable', energy: '' }
    ],
    'As': [
        { number: 5, isotope: 'As-5', equation: 'Mineable', energy: '' },
        { number: 6, isotope: 'As-6', equation: 'Mineable', energy: '' },
        { number: 7, isotope: 'As-7', equation: 'Mineable', energy: '' }
    ],
    'Dz': [
        { number: 7, isotope: 'Dz-7', equation: 'Mineable', energy: '' },
        { number: 8, isotope: 'Dz-8', equation: 'Mineable', energy: '' },
        { number: 9, isotope: 'Dz-9', equation: 'Mineable', energy: '' },
        { number: 10, isotope: 'Dz-10', equation: 'Xj21', energy: '' }
    ],
    'Gj': [
        { number: 9, isotope: 'Gj-9', equation: 'Eb19', energy: '730' },
        { number: 10, isotope: 'Gj-10', equation: 'Eb19', energy: '730' },
        { number: 11, isotope: 'Gj-11', equation: 'Mineable', energy: '' }
    ],
    'Vi': [
        { number: 10, isotope: 'Vi-10', equation: 'Mineable', energy: '' },
        { number: 11, isotope: 'Vi-11', equation: 'Mineable', energy: '' },
        { number: 12, isotope: 'Vi-12', equation: 'Dz9+Sr3', energy: '' },
        { number: 13, isotope: 'Vi-13', equation: 'Dz8+As5', energy: '' },
        { number: 14, isotope: 'Vi-14', equation: 'Yu31', energy: '' }
    ],
    'Ct': [
        { number: 13, isotope: 'Ct-13', equation: 'Mineable', energy: '' },
        { number: 14, isotope: 'Ct-14', equation: 'Dz7+As7', energy: '' },
        { number: 15, isotope: 'Ct-15', equation: 'Mineable', energy: '' },
        { number: 16, isotope: 'Ct-16', equation: 'K35', energy: '' },
        { number: 17, isotope: 'Ct-17', equation: 'Mineable', energy: '' }
    ],
    'T': [
        { number: 15, isotope: 'T-15', equation: 'Mineable', energy: '' },
        { number: 16, isotope: 'T-16', equation: 'Mineable', energy: '' },
        { number: 17, isotope: 'T-17', equation: 'Mineable', energy: '' }
    ],
    'Xj': [
        { number: 17, isotope: 'Xj-17', equation: 'Mineable', energy: '' },
        { number: 18, isotope: 'Xj-18', equation: 'Mineable', energy: '' },
        { number: 19, isotope: 'Xj-19', equation: 'Xj17+Sr2', energy: '' },
        { number: 20, isotope: 'Xj-20', equation: 'Mt37', energy: '' },
        { number: 21, isotope: 'Xj-21', equation: 'Gd45', energy: '' }
    ],
    'Eb': [
        { number: 19, isotope: 'Eb-19', equation: 'Mineable', energy: '' },
        { number: 20, isotope: 'Eb-20', equation: 'Mineable', energy: '' },
        { number: 21, isotope: 'Eb-21', equation: 'Mineable', energy: '' },
        { number: 22, isotope: 'Eb-22', equation: 'Mineable', energy: '' }
    ],
    'P': [
        { number: 21, isotope: 'P-21', equation: 'Mineable', energy: '' },
        { number: 22, isotope: 'P-22', equation: '', energy: '' },
        { number: 23, isotope: 'P-23', equation: 'Mineable', energy: '' },
        { number: 24, isotope: 'P-24', equation: 'Ct17+As7', energy: '' }
    ],
    'Ro': [
        { number: 22, isotope: 'Ro-22', equation: 'Mineable', energy: '' },
        { number: 23, isotope: 'Ro-23', equation: 'Mineable', energy: '' },
        { number: 24, isotope: 'Ro-24', equation: 'Mineable', energy: '' },
        { number: 25, isotope: 'Ro-25', equation: 'P23+Sr1', energy: '600' }
    ],
    'Cl': [
        { number: 25, isotope: 'Cl-25', equation: 'Mineable', energy: '' },
        { number: 26, isotope: 'Cl-26', equation: 'Mineable', energy: '' },
        { number: 27, isotope: 'Cl-27', equation: 'Mineable', energy: '' },
        { number: 28, isotope: 'Cl-28', equation: 'Ro24+Sr1', energy: '660' }
    ],
    'Yu': [
        { number: 27, isotope: 'Yu-27', equation: 'Mineable', energy: '' },
        { number: 28, isotope: 'Yu-28', equation: 'Cl26+Sr1', energy: '680' },
        { number: 29, isotope: 'Yu-29', equation: 'Mineable', energy: '' },
        { number: 30, isotope: 'Yu-30', equation: 'Cl27+Sr1', energy: '700' },
        { number: 31, isotope: 'Yu-31', equation: 'Cl28+Sr1', energy: '720' }
    ],
    'Nd': [
        { number: 29, isotope: 'Nd-29', equation: 'Yu27+Sr1', energy: '700' },
        { number: 30, isotope: 'Nd-30', equation: 'Mineable', energy: '' },
        { number: 31, isotope: 'Nd-31', equation: 'Yu29+Sr1', energy: '740' },
        { number: 32, isotope: 'Nd-32', equation: 'Yu29+Yu29 or Sr1+Yu30', energy: '2100' },
        { number: 33, isotope: 'Nd-33', equation: 'Yu30+Sr1', energy: '760' },
        { number: 34, isotope: 'Nd-34', equation: 'Yu31+Sr1', energy: '780' }
    ],
    'K': [
        { number: 31, isotope: 'K-31', equation: 'Mineable', energy: '' },
        { number: 32, isotope: 'K-32', equation: 'Nd29+Sr1', energy: '760' },
        { number: 33, isotope: 'K-33', equation: 'Nd30+Sr1', energy: '780' },
        { number: 34, isotope: 'K-34', equation: 'Mineable', energy: '' },
        { number: 35, isotope: 'K-35', equation: 'Nd32+Sr1', energy: '820' }
    ],
    'Mt': [
        { number: 32, isotope: 'Mt-32', equation: 'Mineable', energy: '' },
        { number: 33, isotope: 'Mt-33', equation: 'K31+K31 or Sr1+K31', energy: '2400' },
        { number: 34, isotope: 'Mt-34', equation: 'Mineable', energy: '' },
        { number: 35, isotope: 'Mt-35', equation: 'Mineable', energy: '' },
        { number: 36, isotope: 'Mt-36', equation: 'K34+Sr1', energy: '860' },
        { number: 37, isotope: 'Mt-37', equation: 'K35+Sr1', energy: '880' }
    ],
    'Lu': [
        { number: 35, isotope: 'Lu-35', equation: 'Mt33+Sr1', energy: '840' },
        { number: 36, isotope: 'Lu-36', equation: 'Mt34+Sr1', energy: '860' },
        { number: 37, isotope: 'Lu-37', equation: 'Mt33+Mt33 or Sr1+Mt35', energy: '2550' },
        { number: 38, isotope: 'Lu-38', equation: 'Lu37+Sr1', energy: '900' },
        { number: 39, isotope: 'Lu-39', equation: 'Lu38+Sr1', energy: '920' },
        { number: 40, isotope: 'Lu-40', equation: 'Lu39+Lu39', energy: '2700' }
    ],
    'Dx': [
        { number: 37, isotope: 'Dx-37', equation: 'Lu35+Sr1', energy: '880' },
        { number: 38, isotope: 'Dx-38', equation: 'Lu36+Sr1', energy: '900' },
        { number: 39, isotope: 'Dx-39', equation: 'Lu37+Lu37 or Sr1+Lu37', energy: '2700' }
    ],
    'Gd': [
        { number: 39, isotope: 'Gd-39', equation: 'Dx37+Sr1', energy: '920' },
        { number: 40, isotope: 'Gd-40', equation: 'Dx39+Dx39', energy: '2850' },
        { number: 41, isotope: 'Gd-41', equation: 'Dx38+Sr1', energy: '940' },
        { number: 42, isotope: 'Gd-42', equation: 'Gd41+Sr1', energy: '960' },
        { number: 43, isotope: 'Gd-43', equation: 'Gd42+Sr1', energy: '980' },
        { number: 44, isotope: 'Gd-44', equation: 'Gd43+Sr1', energy: '1000' },
        { number: 45, isotope: 'Gd-45', equation: 'Gd44+Gd44', energy: '3000' }
    ],
    'V': [
        { number: 41, isotope: 'V-41', equation: 'Gd39+Sr1', energy: '960' },
        { number: 42, isotope: 'V-42', equation: 'Gd40+Sr1', energy: '980' },
        { number: 43, isotope: 'V-43', equation: 'Gd40+Gd40', energy: '3000' },
        { number: 44, isotope: 'V-44', equation: 'V43+Sr1', energy: '1020' },
        { number: 45, isotope: 'V-45', equation: 'V44+Sr1', energy: '1040' },
        { number: 46, isotope: 'V-46', equation: 'V45+V45', energy: '3150' }
    ],
    'Uq': [
        { number: 42, isotope: 'Uq-42', equation: 'V41+Sr1', energy: '1000' },
        { number: 43, isotope: 'Uq-43', equation: 'V42+Sr1', energy: '1020' },
        { number: 44, isotope: 'Uq-44', equation: 'V43+Sr1', energy: '1040' },
        { number: 45, isotope: 'Uq-45', equation: 'V43+V43 or Sr1+V44', energy: '3150' },
        { number: 46, isotope: 'Uq-46', equation: 'Uq45+Sr1', energy: '1080' },
        { number: 47, isotope: 'Uq-47', equation: 'Mineable', energy: '' }
    ],
    'Pb': [
        { number: 44, isotope: 'Pb-44', equation: 'Uq42+Sr1', energy: '1060' },
        { number: 45, isotope: 'Pb-45', equation: 'Uq43+Sr1', energy: '1080' },
        { number: 46, isotope: 'Pb-46', equation: 'Uq44+Sr1', energy: '1100' },
        { number: 47, isotope: 'Pb-47', equation: 'Uq45+Sr1', energy: '1120' },
        { number: 48, isotope: 'Pb-48', equation: 'Mineable', energy: '' },
        { number: 49, isotope: 'Pb-49', equation: 'Pb47+Sr1', energy: '1140' },
        { number: 50, isotope: 'Pb-50', equation: 'Pb48+Sr1', energy: '1160' },
        { number: 51, isotope: 'Pb-51', equation: 'Pb49+Sr1', energy: '1180' }
    ],
    'Wy': [
        { number: 47, isotope: 'Wy-47', equation: 'Pb48+Pb48 or Sr1+Pb46', energy: '3450' },
        { number: 48, isotope: 'Wy-48', equation: 'Pb44+Sr1', energy: '1140' },
        { number: 49, isotope: 'Wy-49', equation: 'Pb45+Sr1', energy: '1160' },
        { number: 50, isotope: 'Wy-50', equation: 'Mineable', energy: '' }
    ],
    'L': [
        { number: 49, isotope: 'L-49', equation: 'Wy47+Sr1', energy: '1520' },
        { number: 50, isotope: 'L-50', equation: 'Wy48+Wy48 or Sr1+Wy48', energy: '3150' },
        { number: 51, isotope: 'L-51', equation: 'Mineable', energy: '' },
        { number: 52, isotope: 'L-52', equation: 'Wy50+Sr1', energy: '1560' }
    ],
    'Ux': [
        { number: 50, isotope: 'Ux-50', equation: 'L49+Sr1', energy: '1580' },
        { number: 51, isotope: 'Ux-51', equation: 'L50+L50 or Sr1+L50', energy: '3300' },
        { number: 52, isotope: 'Ux-52', equation: 'L51+Sr1', energy: '1600' },
        { number: 53, isotope: 'Ux-53', equation: 'L52+Sr1', energy: '1620' }
    ],
    'Pg': [
        { number: 53, isotope: 'Pg-53', equation: 'Ux51+Ux51 or Sr1+Ux51', energy: '3450' },
        { number: 54, isotope: 'Pg-54', equation: 'Ux52+Sr1', energy: '1640' },
        { number: 55, isotope: 'Pg-55', equation: 'Ux53+Sr1', energy: '1660' },
        { number: 56, isotope: 'Pg-56', equation: 'Ux54+Sr1', energy: '1680' }
    ],
    'Qe': [
        { number: 54, isotope: 'Qe-54', equation: 'Pg53+Sr1', energy: '1700' },
        { number: 55, isotope: 'Qe-55', equation: 'Pg54+Sr1', energy: '1720' },
        { number: 56, isotope: 'Qe-56', equation: 'Pg55+Sr1', energy: '1740' },
        { number: 57, isotope: 'Qe-57', equation: 'Pg56+Sr1', energy: '1760' },
        { number: 58, isotope: 'Qe-58', equation: 'Pg57+Pg57 or Sr1+Pg57', energy: '3600' }
    ],
    'C': [
        { number: 58, isotope: 'C-58', equation: 'Qe54+Sr1', energy: '1780' },
        { number: 59, isotope: 'C-59', equation: 'Qe55+Sr1', energy: '1800' },
        { number: 60, isotope: 'C-60', equation: 'Qe56+Sr1', energy: '1820' },
        { number: 61, isotope: 'C-61', equation: 'Qe58+Qe58 or Sr1+Qe58', energy: '3750' },
        { number: 55, isotope: 'C-55', equation: 'C54+Sr1', energy: '1740' },
        { number: 56, isotope: 'C-56', equation: 'C55+Sr1', energy: '1760' },
        { number: 57, isotope: 'C-57', equation: 'C56+Sr1', energy: '1780' },
        { number: 58, isotope: 'C-58', equation: 'C57+Sr1', energy: '1800' },
        { number: 59, isotope: 'C-59', equation: 'C58+Sr1', energy: '1820' },
        { number: 60, isotope: 'C-60', equation: 'C59+Sr1', energy: '1840' },
        { number: 61, isotope: 'C-61', equation: 'C60+Sr1', energy: '1860' },
        { number: 62, isotope: 'C-62', equation: 'C61+Sr1', energy: '1880' },
        { number: 63, isotope: 'C-63', equation: 'C62+Sr1', energy: '1900' },
        { number: 64, isotope: 'C-64', equation: 'C63+C63', energy: '3900' }
    ],
    'Ns': [
        { number: 58, isotope: 'Ns-58', equation: 'C58+Sr1', energy: '1840' },
        { number: 59, isotope: 'Ns-59', equation: 'C59+Sr1', energy: '1860' },
        { number: 60, isotope: 'Ns-60', equation: 'C60+Sr1', energy: '1880' },
        { number: 61, isotope: 'Ns-61', equation: 'C61+Sr1', energy: '1900' },
        { number: 62, isotope: 'Ns-62', equation: 'C61+C61 or Sr1+C61', energy: '3900' }
    ],
    'Ai': [
        { number: 61, isotope: 'Ai-61', equation: 'Ns58+Sr1', energy: '1920' },
        { number: 62, isotope: 'Ai-62', equation: 'Ns59+Sr1', energy: '1940' },
        { number: 63, isotope: 'Ai-63', equation: 'Ns60+Sr1', energy: '1960' },
        { number: 64, isotope: 'Ai-64', equation: 'Ns61+Sr1', energy: '1980' },
        { number: 67, isotope: 'Ai-67', equation: 'Ns62+Ns62 or Sr1+Ns62', energy: '4050' }
    ],
    'F': [
        { number: 62, isotope: 'F-62', equation: 'Ai61+Sr1', energy: '2000' },
        { number: 63, isotope: 'F-63', equation: 'Ai62+Sr1', energy: '2020' },
        { number: 64, isotope: 'F-64', equation: 'Ai63+Sr1', energy: '2040' },
        { number: 65, isotope: 'F-65', equation: 'Ai67+Ai67 or Sr1+Ai64', energy: '4200' },
        { number: 66, isotope: 'F-66', equation: 'Ai64+Sr1', energy: '2060' }
    ],
    'Gy': [
        { number: 65, isotope: 'Gy-65', equation: 'F62+Sr1', energy: '2080' },
        { number: 66, isotope: 'Gy-66', equation: 'F63+Sr1', energy: '2100' },
        { number: 67, isotope: 'Gy-67', equation: 'Mineable', energy: '' },
        { number: 68, isotope: 'Gy-68', equation: 'F64+Sr1', energy: '2120' },
        { number: 69, isotope: 'Gy-69', equation: 'F65+Sr1', energy: '2140' }
    ],
    'Kk': [
        { number: 67, isotope: 'Kk-67', equation: 'Gy65+Sr1', energy: '2160' },
        { number: 68, isotope: 'Kk-68', equation: 'Gy66+Sr1', energy: '2180' },
        { number: 69, isotope: 'Kk-69', equation: 'Gy67+Sr1', energy: '2200' },
        { number: 70, isotope: 'Kk-70', equation: 'Mineable', energy: '' },
        { number: 71, isotope: 'Kk-71', equation: 'Mineable', energy: '' },
        { number: 72, isotope: 'Kk-72', equation: 'Kk71+Kk71 or Sr1+Gy68', energy: '4500' }
    ],
    'Yv': [
        { number: 70, isotope: 'Yv-70', equation: 'Kk67+Sr1', energy: '2240' },
        { number: 71, isotope: 'Yv-71', equation: 'Kk68+Sr1', energy: '2260' },
        { number: 72, isotope: 'Yv-72', equation: 'Mineable', energy: '' },
        { number: 73, isotope: 'Yv-73', equation: 'Kk70+Sr1', energy: '2300' },
        { number: 74, isotope: 'Yv-74', equation: 'Kk71+Kk71 or Sr1+Kk71', energy: '4650' }
    ],
    'Cj': [
        { number: 72, isotope: 'Cj-72', equation: 'Yv70+Sr1', energy: '2320' },
        { number: 73, isotope: 'Cj-73', equation: 'Yv71+Sr1', energy: '2340' },
        { number: 74, isotope: 'Cj-74', equation: 'Yv74+Yv74 or Sr1+Yv72', energy: '4800' },
        { number: 75, isotope: 'Cj-75', equation: 'Yv72+Sr1', energy: '2360' },
        { number: 76, isotope: 'Cj-76', equation: 'Yv73+Sr1', energy: '2380' }
    ],
    'Iu': [
        { number: 74, isotope: 'Iu-74', equation: 'Cj72+Sr1', energy: '2400' },
        { number: 75, isotope: 'Iu-75', equation: 'Cj74+Cj74 or Sr1+Cj73', energy: '4950' },
        { number: 76, isotope: 'Iu-76', equation: 'Cj73+Sr1', energy: '2420' },
        { number: 77, isotope: 'Iu-77', equation: 'Cj74+Sr1', energy: '2440' },
        { number: 78, isotope: 'Iu-78', equation: 'Cj75+Sr1', energy: '2460' }
    ],
    'D': [
        { number: 76, isotope: 'D-76', equation: 'Iu74+Sr1', energy: '2480' },
        { number: 77, isotope: 'D-77', equation: 'Iu75+Sr1', energy: '2500' },
        { number: 78, isotope: 'D-78', equation: 'Iu76+Sr1', energy: '2520' },
        { number: 79, isotope: 'D-79', equation: 'Iu77+Sr1', energy: '2540' },
        { number: 80, isotope: 'D-80', equation: 'Iu75+Iu75 or Sr1+Iu78', energy: '5100' }
    ],
    'Co': [
        { number: 78, isotope: 'Co-78', equation: 'D76+Sr1', energy: '2560' },
        { number: 79, isotope: 'Co-79', equation: 'D77+Sr1', energy: '2580' },
        { number: 80, isotope: 'Co-80', equation: 'D78+Sr1', energy: '2600' },
        { number: 81, isotope: 'Co-81', equation: 'D79+Sr1', energy: '2620' },
        { number: 82, isotope: 'Co-82', equation: 'D80+D80 or Sr1+D80', energy: '5250' }
    ],
    'W': [
        { number: 80, isotope: 'W-80', equation: 'Co78+Sr1', energy: '2640' },
        { number: 81, isotope: 'W-81', equation: 'Co79+Sr1', energy: '2660' },
        { number: 82, isotope: 'W-82', equation: 'Co80+Sr1', energy: '2680' },
        { number: 83, isotope: 'W-83', equation: 'Co81+Sr1', energy: '2700' },
        { number: 84, isotope: 'W-84', equation: 'Co82+Co82 or Sr1+Co82', energy: '5400' }
    ],
    'Lx': [
        { number: 81, isotope: 'Lx-81', equation: 'W80+Sr1', energy: '2720' },
        { number: 82, isotope: 'Lx-82', equation: 'W81+Sr1', energy: '2740' },
        { number: 83, isotope: 'Lx-83', equation: 'W82+Sr1', energy: '2760' },
        { number: 84, isotope: 'Lx-84', equation: 'W83+Sr1', energy: '2780' },
        { number: 85, isotope: 'Lx-85', equation: 'W84+W84 or Sr1+W84', energy: '5550' }
    ],
    'N': [
        { number: 84, isotope: 'N-84', equation: 'Lx81+Sr1', energy: '2800' },
        { number: 85, isotope: 'N-85', equation: 'Lx82+Sr1', energy: '2820' },
        { number: 86, isotope: 'N-86', equation: 'Lx83+Sr1', energy: '2840' },
        { number: 87, isotope: 'N-87', equation: 'Lx84+Sr1', energy: '2860' },
        { number: 88, isotope: 'N-88', equation: 'Lx85+Lx85 or Sr1+Lx85', energy: '5700' }
    ],
    'U': [
        { number: 84, isotope: 'U-84', equation: 'N84+Sr1', energy: '2880' },
        { number: 85, isotope: 'U-85', equation: 'N85+Sr1', energy: '2900' },
        { number: 86, isotope: 'U-86', equation: 'N86+Sr1', energy: '2920' },
        { number: 87, isotope: 'U-87', equation: 'N88+N88 or Sr1+N87', energy: '5850' }
    ],
    'Vl': [
        { number: 87, isotope: 'Vl-87', equation: 'U84+Sr1', energy: '2940' },
        { number: 88, isotope: 'Vl-88', equation: 'U85+Sr1', energy: '2960' },
        { number: 89, isotope: 'Vl-89', equation: 'U87+U87 or Sr1+U86', energy: '6000' },
        { number: 90, isotope: 'Vl-90', equation: 'U86+Sr1', energy: '2980' }
    ],
    'Se': [
        { number: 89, isotope: 'Se-89', equation: 'Vl87+Sr1', energy: '3000' },
        { number: 90, isotope: 'Se-90', equation: 'Vl88+Sr1', energy: '3020' },
        { number: 91, isotope: 'Se-91', equation: 'Vl89+Vl89 or Sr1+Vl89', energy: '6150' },
        { number: 92, isotope: 'Se-92', equation: 'Vl90+Sr1', energy: '3040' }
    ],
    'Nm': [
        { number: 89, isotope: 'Nm-89', equation: 'Nm88+Sr1', energy: '3060' },
        { number: 90, isotope: 'Nm-90', equation: 'Nm89+Sr1', energy: '3080' },
        { number: 91, isotope: 'Nm-91', equation: 'Nm90+Sr1', energy: '3100' },
        { number: 92, isotope: 'Nm-92', equation: 'Nm91+Sr1', energy: '3120' },
        { number: 93, isotope: 'Nm-93', equation: 'Nm92+Sr1', energy: '3140' },
        { number: 94, isotope: 'Nm-94', equation: 'Nm93+Sr1', energy: '3160' },
        { number: 95, isotope: 'Nm-95', equation: 'Nm94+Sr1', energy: '3180' },
        { number: 96, isotope: 'Nm-96', equation: 'Se89+Sr1', energy: '3200' },
        { number: 97, isotope: 'Nm-97', equation: 'Se90+Sr1', energy: '3220' },
        { number: 98, isotope: 'Nm-98', equation: 'Se91+Se91 or Sr1+Se91', energy: '6300' },
        { number: 99, isotope: 'Nm-99', equation: 'Se92+Sr1', energy: '3260' },
        { number: 100, isotope: 'Nm-100', equation: 'Nm99+Nm99', energy: '6600' }
    ],
    'Dd': [
        { number: 88, isotope: 'Dd-88', equation: 'Undefined', energy: '3280' },
        { number: 89, isotope: 'Dd-89', equation: 'Dd88+Sr1', energy: '3280' },
        { number: 90, isotope: 'Dd-90', equation: 'Dd89+Sr1', energy: '3300' },
        { number: 91, isotope: 'Dd-91', equation: 'Dd90+Sr1', energy: '3320' },
        { number: 92, isotope: 'Dd-92', equation: 'Dd91+Sr1', energy: '3340' },
        { number: 93, isotope: 'Dd-93', equation: 'Dd92+Sr1', energy: '3360' },
        { number: 94, isotope: 'Dd-94', equation: 'Dd93+Sr1', energy: '3380' },
        { number: 95, isotope: 'Dd-95', equation: 'Dd94+Sr1', energy: '3400' },
        { number: 96, isotope: 'Dd-96', equation: 'Dd95+Sr1', energy: '3420' },
        { number: 97, isotope: 'Dd-97', equation: 'Dd96+Sr1', energy: '3440' },
        { number: 98, isotope: 'Dd-98', equation: 'Nm96+Sr1', energy: '3460' },
        { number: 99, isotope: 'Dd-99', equation: 'Nm97+Sr1', energy: '3480' },
        { number: 100, isotope: 'Dd-100', equation: 'Nm98+Nm98 or Sr1+Nm98', energy: '6800' },
        { number: 101, isotope: 'Dd-101', equation: 'Nm99+Sr1', energy: '3160' }
    ],
    'Ok': [
        { number: 89, isotope: 'Ok-89', equation: 'Ok88+Sr1', energy: '3500' },
        { number: 90, isotope: 'Ok-90', equation: 'Dd98+Sr1', energy: '3520' },
        { number: 91, isotope: 'Ok-91', equation: 'Dd99+Sr1', energy: '3540' },
        { number: 92, isotope: 'Ok-92', equation: 'Dd100+Dd100 or Sr1+Dd100', energy: '7000' },
        { number: 93, isotope: 'Ok-93', equation: 'Dd101+Sr1', energy: '3580' },
        { number: 94, isotope: 'Ok-94', equation: 'Ok93+Sr1', energy: '3600' },
        { number: 95, isotope: 'Ok-95', equation: 'Ok94+Sr1', energy: '3620' },
        { number: 96, isotope: 'Ok-96', equation: 'Ok95+Sr1', energy: '3640' },
        { number: 97, isotope: 'Ok-97', equation: 'Ok96+Sr1', energy: '3660' },
        { number: 98, isotope: 'Ok-98', equation: 'Ok97+Sr1', energy: '3680' },
        { number: 99, isotope: 'Ok-99', equation: 'Ok98+Sr1', energy: '3700' },
        { number: 100, isotope: 'Ok-100', equation: 'Ok99+Sr1', energy: '3720' },
        { number: 101, isotope: 'Ok-101', equation: 'Ok100+Sr1', energy: '3740' },
        { number: 102, isotope: 'Ok-102', equation: 'Ok101+Sr1', energy: '3760' },
        { number: 103, isotope: 'Ok-103', equation: 'Ok102+Ok102', energy: '7000' }
    ],
    'Da': [
        { number: 90, isotope: 'Da-90', equation: 'Ok89+Sr1', energy: '3780' },
        { number: 91, isotope: 'Da-91', equation: 'Ok90+Sr1', energy: '3800' },
        { number: 92, isotope: 'Da-92', equation: 'Ok91+Sr1', energy: '3820' },
        { number: 93, isotope: 'Da-93', equation: 'Da92+Da92 or Sr1+Ok92', energy: '7150' },
        { number: 94, isotope: 'Da-94', equation: 'Da93+Sr1', energy: '3840' },
        { number: 95, isotope: 'Da-95', equation: 'Da94+Sr1', energy: '3860' },
        { number: 96, isotope: 'Da-96', equation: 'Da95+Sr1', energy: '3880' },
        { number: 97, isotope: 'Da-97', equation: 'Da96+Sr1', energy: '3900' },
        { number: 98, isotope: 'Da-98', equation: 'Da97+Sr1', energy: '3920' },
        { number: 99, isotope: 'Da-99', equation: 'Da98+Sr1', energy: '3940' },
        { number: 100, isotope: 'Da-100', equation: 'Da99+Sr1', energy: '3960' },
        { number: 101, isotope: 'Da-101', equation: 'Da100+Sr1', energy: '3980' },
        { number: 102, isotope: 'Da-102', equation: 'Da101+Sr1', energy: '4000' },
        { number: 103, isotope: 'Da-103', equation: 'Da102+Sr1', energy: '4020' },
        { number: 104, isotope: 'Da-104', equation: 'Da103+Da103', energy: '7300' }
    ],
    'S': [
        { number: 94, isotope: 'S-94', equation: 'Da93+Sr1', energy: '4040' },
        { number: 95, isotope: 'S-95', equation: 'Da94+Sr1', energy: '4060' },
        { number: 96, isotope: 'S-96', equation: 'S95+S95 or Sr1+Da95', energy: '7450' },
        { number: 97, isotope: 'S-97', equation: 'S96+Sr1', energy: '4080' },
        { number: 98, isotope: 'S-98', equation: 'S97+Sr1', energy: '4100' },
        { number: 99, isotope: 'S-99', equation: 'S98+Sr1', energy: '4120' },
        { number: 100, isotope: 'S-100', equation: 'S99+Sr1', energy: '4140' },
        { number: 101, isotope: 'S-101', equation: 'S100+Sr1', energy: '4160' },
        { number: 102, isotope: 'S-102', equation: 'Mineable', energy: '' }
    ],
    'Z': [
        { number: 95, isotope: 'Z-95', equation: 'S94+Sr1', energy: '4180' },
        { number: 96, isotope: 'Z-96', equation: 'S95+Sr1', energy: '4200' },
        { number: 97, isotope: 'Z-97', equation: 'S96+Sr1', energy: '4220' },
        { number: 98, isotope: 'Z-98', equation: 'Z97+Z97 or Sr1+S97', energy: '7750' },
        { number: 99, isotope: 'Z-99', equation: 'Z98+Sr1', energy: '4240' },
        { number: 100, isotope: 'Z-100', equation: 'Z99+Sr1', energy: '4260' },
        { number: 101, isotope: 'Z-101', equation: 'Z100+Sr1', energy: '4280' },
        { number: 102, isotope: 'Z-102', equation: 'Z101+Sr1', energy: '4300' },
        { number: 103, isotope: 'Z-103', equation: 'Z102+Sr1', energy: '4320' },
        { number: 104, isotope: 'Z-104', equation: 'Z103+Sr1', energy: '4340' },
        { number: 105, isotope: 'Z-105', equation: 'Z104+Sr1', energy: '4360' },
        { number: 106, isotope: 'Z-106', equation: 'Z105+Z105', energy: '7900' }
    ],
    'Cv': [
        { number: 97, isotope: 'Cv-97', equation: 'Z96+Sr1', energy: '4380' },
        { number: 98, isotope: 'Cv-98', equation: 'Z97+Sr1', energy: '4400' },
        { number: 99, isotope: 'Cv-99', equation: 'Z98+Sr1', energy: '4420' },
        { number: 100, isotope: 'Cv-100', equation: 'Cv99+Cv99 or Sr1+Z99', energy: '8050' },
        { number: 101, isotope: 'Cv-101', equation: 'Cv100+Sr1', energy: '4440' },
        { number: 102, isotope: 'Cv-102', equation: 'Cv101+Sr1', energy: '4460' },
        { number: 103, isotope: 'Cv-103', equation: 'Cv102+Sr1', energy: '4480' },
        { number: 104, isotope: 'Cv-104', equation: 'Cv103+Sr1', energy: '4500' },
        { number: 105, isotope: 'Cv-105', equation: 'Cv104+Sr1', energy: '4520' },
        { number: 106, isotope: 'Cv-106', equation: 'Cv105+Sr1', energy: '4540' },
        { number: 107, isotope: 'Cv-107', equation: 'Cv106+Sr1', energy: '4560' },
        { number: 108, isotope: 'Cv-108', equation: 'Cv107+Sr1', energy: '4580' },
        { number: 109, isotope: 'Cv-109', equation: 'Cv108+Sr1', energy: '4600' },
        { number: 110, isotope: 'Cv-110', equation: 'Cv109+Cv109', energy: '8200' }
    ],
    'Vt': [
        { number: 98, isotope: 'Vt-98', equation: 'Cv97+Sr1', energy: '4620' },
        { number: 99, isotope: 'Vt-99', equation: 'Cv98+Sr1', energy: '4640' },
        { number: 100, isotope: 'Vt-100', equation: 'Cv99+Sr1', energy: '4660' },
        { number: 101, isotope: 'Vt-101', equation: 'Cv100+Sr1', energy: '4680' },
        { number: 102, isotope: 'Vt-102', equation: 'Vt101+Vt101 or Sr1+Cv101', energy: '8350' },
        { number: 103, isotope: 'Vt-103', equation: 'Vt102+Sr1', energy: '4700' },
        { number: 104, isotope: 'Vt-104', equation: 'Vt103+Sr1', energy: '4720' },
        { number: 105, isotope: 'Vt-105', equation: 'Vt104+Sr1', energy: '4740' },
        { number: 106, isotope: 'Vt-106', equation: 'Vt105+Sr1', energy: '4760' },
        { number: 107, isotope: 'Vt-107', equation: 'Vt106+Sr1', energy: '4780' },
        { number: 108, isotope: 'Vt-108', equation: 'Vt107+Sr1', energy: '4800' },
        { number: 109, isotope: 'Vt-109', equation: 'Vt108+Sr1', energy: '4820' },
        { number: 110, isotope: 'Vt-110', equation: 'Vt109+Sr1', energy: '4840' },
        { number: 111, isotope: 'Vt-111', equation: 'Vt110+Sr1', energy: '4860' },
        { number: 112, isotope: 'Vt-112', equation: 'Vt111+Vt111', energy: '8500' }
    ],
    'Ek': [
        { number: 99, isotope: 'Ek-99', equation: 'Vt98+Sr1', energy: '4880' },
        { number: 100, isotope: 'Ek-100', equation: 'Vt99+Sr1', energy: '4900' },
        { number: 101, isotope: 'Ek-101', equation: 'Vt100+Sr1', energy: '4920' },
        { number: 102, isotope: 'Ek-102', equation: 'Vt101+Sr1', energy: '4940' },
        { number: 103, isotope: 'Ek-103', equation: 'Ek102+Ek102 or Sr1+Vt102', energy: '8650' },
        { number: 104, isotope: 'Ek-104', equation: 'Ek103+Sr1', energy: '4960' },
        { number: 105, isotope: 'Ek-105', equation: 'Ek104+Sr1', energy: '4980' },
        { number: 106, isotope: 'Ek-106', equation: 'Ek105+Sr1', energy: '5000' },
        { number: 107, isotope: 'Ek-107', equation: 'Ek106+Sr1', energy: '5020' },
        { number: 108, isotope: 'Ek-108', equation: 'Ek107+Sr1', energy: '5040' },
        { number: 109, isotope: 'Ek-109', equation: 'Ek108+Sr1', energy: '5060' },
        { number: 110, isotope: 'Ek-110', equation: 'Ek109+Sr1', energy: '5080' },
        { number: 111, isotope: 'Ek-111', equation: 'Ek110+Sr1', energy: '5100' },
        { number: 112, isotope: 'Ek-112', equation: 'Ek111+Ek111', energy: '8800' }
    ],
    'Ji': [
        { number: 103, isotope: 'Ji-103', equation: 'Ek102+Sr1', energy: '5120' },
        { number: 104, isotope: 'Ji-104', equation: 'Ek103+Sr1', energy: '5140' },
        { number: 105, isotope: 'Ji-105', equation: 'Ek104+Sr1', energy: '5160' },
        { number: 106, isotope: 'Ji-106', equation: 'Ji105+Ji105 or Sr1+Ek105', energy: '8950' },
        { number: 107, isotope: 'Ji-107', equation: 'Ji106+Sr1', energy: '5180' },
        { number: 108, isotope: 'Ji-108', equation: 'Ji107+Sr1', energy: '5200' },
        { number: 109, isotope: 'Ji-109', equation: 'Ji108+Sr1', energy: '5220' },
        { number: 110, isotope: 'Ji-110', equation: 'Ji109+Sr1', energy: '5240' },
        { number: 111, isotope: 'Ji-111', equation: 'Ji110+Sr1', energy: '5260' },
        { number: 112, isotope: 'Ji-112', equation: 'Ji111+Sr1', energy: '5280' },
        { number: 113, isotope: 'Ji-113', equation: 'Ji112+Sr1', energy: '5300' },
        { number: 114, isotope: 'Ji-114', equation: 'Ji113+Ji113', energy: '9100' }
    ],
    'Aw': [
        { number: 105, isotope: 'Aw-105', equation: 'Ji104+Sr1', energy: '5320' },
        { number: 106, isotope: 'Aw-106', equation: 'Ji105+Sr1', energy: '5340' },
        { number: 107, isotope: 'Aw-107', equation: 'Ji106+Sr1', energy: '5360' },
        { number: 108, isotope: 'Aw-108', equation: 'Ji107+Sr1', energy: '5380' },
        { number: 109, isotope: 'Aw-109', equation: 'Aw108+Aw108 or Sr1+Ji108', energy: '9250' },
        { number: 110, isotope: 'Aw-110', equation: 'Aw109+Sr1', energy: '5400' },
        { number: 111, isotope: 'Aw-111', equation: 'Aw110+Sr1', energy: '5420' },
        { number: 112, isotope: 'Aw-112', equation: 'Aw111+Sr1', energy: '5440' },
        { number: 113, isotope: 'Aw-113', equation: 'Aw112+Sr1', energy: '5460' },
        { number: 114, isotope: 'Aw-114', equation: 'Aw113+Sr1', energy: '5480' },
        { number: 115, isotope: 'Aw-115', equation: 'Aw114+Aw114', energy: '9400' }
    ],
    'Kn': [
        { number: 106, isotope: 'Kn-106', equation: 'Aw105+Sr1', energy: '5500' },
        { number: 107, isotope: 'Kn-107', equation: 'Aw106+Sr1', energy: '5520' },
        { number: 108, isotope: 'Kn-108', equation: 'Aw107+Sr1', energy: '5540' },
        { number: 109, isotope: 'Kn-109', equation: 'Aw108+Sr1', energy: '5560' },
        { number: 110, isotope: 'Kn-110', equation: 'Kn109+Kn109 or Sr1+Aw109', energy: '9550' },
        { number: 111, isotope: 'Kn-111', equation: 'Kn110+Sr1', energy: '5580' },
        { number: 112, isotope: 'Kn-112', equation: 'Kn111+Sr1', energy: '5600' },
        { number: 113, isotope: 'Kn-113', equation: 'Kn112+Sr1', energy: '5620' },
        { number: 114, isotope: 'Kn-114', equation: 'Kn113+Sr1', energy: '5640' },
        { number: 115, isotope: 'Kn-115', equation: 'Kn114+Sr1', energy: '5660' },
        { number: 116, isotope: 'Kn-116', equation: 'Kn115+Kn115', energy: '9700' }
    ],
    'Ha': [
        { number: 108, isotope: 'Ha-108', equation: 'Kn106+Sr1', energy: '5680' },
        { number: 109, isotope: 'Ha-109', equation: 'Kn107+Sr1', energy: '5700' },
        { number: 110, isotope: 'Ha-110', equation: 'Kn108+Sr1', energy: '5720' },
        { number: 111, isotope: 'Ha-111', equation: 'Kn109+Sr1', energy: '5740' },
        { number: 112, isotope: 'Ha-112', equation: 'Ha111+Ha111 or Sr1+Kn110', energy: '9850' },
        { number: 113, isotope: 'Ha-113', equation: 'Ha112+Sr1', energy: '5760' },
        { number: 114, isotope: 'Ha-114', equation: 'Ha113+Sr1', energy: '5780' },
        { number: 115, isotope: 'Ha-115', equation: 'Ha114+Sr1', energy: '5800' },
        { number: 116, isotope: 'Ha-116', equation: 'Ha115+Sr1', energy: '5820' },
        { number: 117, isotope: 'Ha-117', equation: 'Ha116+Ha116', energy: '10000' }
    ],
    'Ax': [
        { number: 109, isotope: 'Ax-109', equation: 'Ha108+Sr1', energy: '5840' },
        { number: 110, isotope: 'Ax-110', equation: 'Ha109+Sr1', energy: '5860' },
        { number: 111, isotope: 'Ax-111', equation: 'Ax110+Ax110 or Sr1+Ha110', energy: '10150' }
    ],
    'I': [
        { number: 115, isotope: 'I-115', equation: 'Ax111+Ax111 or Sr1+Ax111', energy: '10300' }
    ],
    'Jb': [
        { number: 116, isotope: 'Jb-116', equation: 'I115+Sr1', energy: '10450' }
    ],
    'Go': [
        { number: 118, isotope: 'Go-118', equation: 'Jb116+Jb116 or Sr1+Jb116', energy: '10600' }
    ],
    'X': [
        { number: 119, isotope: 'X-119', equation: 'Go118+Sr1', energy: '10750' }
    ],
    'Eh': [
        { number: 124, isotope: 'Eh-124', equation: 'X119+X119 or Sr1+X119', energy: '9000' }
    ],
    'Ys': [
        { number: 125, isotope: 'Ys-125', equation: 'Eh124+Eh124 or Sr1+Eh124', energy: '9150' }
    ]
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
                showElementDetails(symbol);  // This will show all isotope details
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

        // Calculate totals - only count isotopes that are actually in the collection
        Object.keys(isotopeEquations).forEach(element => {
            const elementIsotopes = isotopeEquations[element] || [];
            const collectedIsotopes = collection[element] || [];
            totalCollected += collectedIsotopes.length; // This only counts checked isotopes
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
            const radius = 15.9155;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (percentValue / 100) * circumference;
            progressPath.style.strokeDasharray = `${circumference} ${circumference}`;
            progressPath.style.strokeDashoffset = offset;
        }
    }
};

// Update your existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', async () => {
    // Hide the body initially
    if (document.body) {
        document.body.style.visibility = 'hidden';
    }

    try {
        // Check wallet access first
        const accessGranted = await checkWalletAccess();
        
        if (!accessGranted) {
            console.log('Wallet access not granted');
            return;
        }

        // Listen for account changes
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', () => {
                checkWalletAccess();
            });
        }
        
        // Apply dark mode immediately if it's enabled in localStorage
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }
        
        // Initialize the page
        createPeriodicTable();
        addElementClickHandlers();
        setupEventListeners();
        
        // Initialize userCollection
        userCollection.init();
        userCollection.updateProgress();
        
    } catch (error) {
        console.error('Error during initialization:', error);
        if (document.body) {
            document.body.style.visibility = 'visible';
        }
    }
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
    const element = Object.values(elements).find(el => el.symbol === symbol);
    
    if (element) {
        const isotopes = isotopeEquations[symbol] || [];
        const totalEnergy = isotopes.reduce((sum, iso) => sum + (parseInt(iso.energy) || 0), 0);

        const isotopesContent = `
            <table class="isotope-table">
                <tr>
                    <th>Isotope</th>
                    <th>Equation</th>
                    <th>Energy</th>
                    <th>Collected</th>
                </tr>
                ${isotopes.map(isotope => {
                    const collection = JSON.parse(localStorage.getItem('isotopeCollection'));
                    const isCollected = collection[symbol]?.includes(isotope.isotope);
                    return `
                        <tr>
                            <td>${isotope.isotope}</td>
                            <td>${isotope.equation}</td>
                            <td>${isotope.energy}</td>
                            <td>
                                <input type="checkbox" 
                                       ${isCollected ? 'checked' : ''}
                                       onclick="userCollection.toggleIsotope('${symbol}', '${isotope.isotope}')">
                            </td>
                        </tr>
                    `;
                }).join('')}
            </table>
            <div class="energy-total">
                Total Energy Required: ${totalEnergy.toLocaleString()}
            </div>
        `;

        elementModal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>${symbol}</h2>
                <div class="element-details">
                    <div class="isotope-info">
                        ${isotopesContent}
                    </div>
                </div>
            </div>
        `;

        elementModal.style.display = "block";

        // Reattach close button event listener
        const closeButton = elementModal.querySelector('.close');
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

    .isotope-item {
        margin: 10px 0;
        padding: 5px;
        border-bottom: 1px solid #eee;
    }

    .isotope-item label {
        margin-left: 10px;
        cursor: pointer;
    }

    .equation {
        margin: 0 10px;
        color: #666;
    }

    .energy {
        color: #4CAF50;
    }

    .dark-mode .isotope-item {
        border-bottom-color: #444;
    }

    .dark-mode .equation {
        color: #999;
    }

    .dark-mode .energy {
        color: #81c784;
    }
`;
document.head.appendChild(style);

// Add this right after your existing style block but before any other code
const modalContentStyle = document.createElement('style');
modalContentStyle.textContent = `
    .modal-content {
        background-color: #E0D0CD !important;
    }
`;
document.head.appendChild(modalContentStyle);

// ... rest of the code from script.js remains the same ... 