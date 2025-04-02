// Add this at the very top of bohr.js
const allowedAddresses = [
    '0x72fe3c398c9a030b9b2be1fe1ff07701167571d4',
    '0x9C54A9C609212D2FD034B55cF3b42ba99AF52880',
    '0xCCb4e229fC4eBE2C8034960cA9a4B3AE5ef3a7bB',
    '0x3ba3245300d0a4f0deb84073572a97ff09659f83',
    '0xa4ac3321fd639a7e2b53da62897955d920c97012',
    '0x620051B8553a724b742ae6ae9cC3585d29F49848',
    '0x13c942e3f8bE4faf966eF03E6038B33d000db22f',
    '0x35002a946EaDB3de275b01E12E15CCD8Ca807Dd2',
    '0xF8d0C9f300D0649861963ebAe0Bb568533619448',
    '0xB6734417dB6a724c4FF398699c69eff23C64a6dB'
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
        
        const userAddress = accounts[0].toLowerCase();
        const allowedAddressesLower = allowedAddresses.map(address => address.toLowerCase());
        
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

// Add isotope equations for each element
const isotopeEquations = {
    'Sr': [
        { number: 1, isotope: 'Sr-1', equation: 'Mineable', energy: '' },
        { number: 2, isotope: 'Sr-2', equation: 'Mineable', energy: '' }
    ],
    'Ei': [
        { number: 3, isotope: 'Ei-3', equation: 'Mineable', energy: '' },
        { number: 4, isotope: 'Ei-4', equation: 'Mineable', energy: '' }
    ],
    'As': [
        { number: 5, isotope: 'As-5', equation: 'Mineable', energy: '' },
        { number: 6, isotope: 'As-6', equation: 'Mineable', energy: '' },
        { number: 7, isotope: 'As-7', equation: 'Sr1', energy: '150' }
    ],
    'Dz': [
        { number: 6, isotope: 'Dz-6', equation: 'Mineable', energy: '' },
        { number: 7, isotope: 'Dz-7', equation: 'Mineable', energy: '' }
    ],
    'Gj': [
        { number: 8, isotope: 'Gj-8', equation: 'Mineable', energy: '' },
        { number: 9, isotope: 'Gj-9', equation: 'Mineable', energy: '' },
        { number: 10, isotope: 'Gj-10', equation: 'As7', energy: '300' }
    ],
    'Vi': [
        { number: 9, isotope: 'Vi-9', equation: 'Mineable', energy: '' },
        { number: 10, isotope: 'Vi-10', equation: 'Mineable', energy: '' }
    ],
    'Ct': [
        { number: 11, isotope: 'Ct-11', equation: 'Mineable', energy: '' },
        { number: 12, isotope: 'Ct-12', equation: 'Mineable', energy: '' },
        { number: 13, isotope: 'Ct-13', equation: 'Gj10', energy: '450' }
    ],
    'T': [
        { number: 14, isotope: 'T-14', equation: 'Mineable', energy: '' },
        { number: 15, isotope: 'T-15', equation: 'Mineable', energy: '' },
        { number: 16, isotope: 'T-16', equation: 'Ct13', energy: '600' }
    ],
    'Xj': [
        { number: 16, isotope: 'Xj-16', equation: 'Mineable', energy: '' },
        { number: 17, isotope: 'Xj-17', equation: 'Mineable', energy: '' },
        { number: 18, isotope: 'Xj-18', equation: 'T16', energy: '750' }
    ],
    'Eb': [
        { number: 18, isotope: 'Eb-18', equation: 'Mineable', energy: '' },
        { number: 19, isotope: 'Eb-19', equation: 'Xj18', energy: '900' }
    ],
    'P': [
        { number: 20, isotope: 'P-20', equation: 'Mineable', energy: '' },
        { number: 21, isotope: 'P-21', equation: 'Mineable', energy: '' },
        { number: 22, isotope: 'P-22', equation: 'Eb19', energy: '1050' }
    ],
    'Ro': [
        { number: 23, isotope: 'Ro-23', equation: 'Mineable', energy: '' },
        { number: 24, isotope: 'Ro-24', equation: 'Mineable', energy: '' },
        { number: 25, isotope: 'Ro-25', equation: 'P22', energy: '1200' }
    ],
    'Cl': [
        { number: 24, isotope: 'Cl-24', equation: 'Mineable', energy: '' },
        { number: 25, isotope: 'Cl-25', equation: 'Ro25', energy: '1350' }
    ],
    'Yu': [
        { number: 27, isotope: 'Yu-27', equation: 'Mineable', energy: '' },
        { number: 28, isotope: 'Yu-28', equation: 'Mineable', energy: '' },
        { number: 29, isotope: 'Yu-29', equation: 'Cl25', energy: '1500' }
    ],
    'Nd': [
        { number: 30, isotope: 'Nd-30', equation: 'Mineable', energy: '' },
        { number: 31, isotope: 'Nd-31', equation: 'Mineable', energy: '' },
        { number: 32, isotope: 'Nd-32', equation: 'Yu29', energy: '1650' }
    ],
    'K': [
        { number: 29, isotope: 'K-29', equation: 'Mineable', energy: '' },
        { number: 30, isotope: 'K-30', equation: 'Mineable', energy: '' },
        { number: 31, isotope: 'K-31', equation: 'Nd32', energy: '1800' }
    ],
    'Mt': [
        { number: 31, isotope: 'Mt-31', equation: 'Mineable', energy: '' },
        { number: 32, isotope: 'Mt-32', equation: 'Mineable', energy: '' },
        { number: 33, isotope: 'Mt-33', equation: 'K31', energy: '1950' }
    ],
    'Lu': [
        { number: 35, isotope: 'Lu-35', equation: 'Mineable', energy: '' },
        { number: 36, isotope: 'Lu-36', equation: 'Mineable', energy: '' },
        { number: 37, isotope: 'Lu-37', equation: 'Mt33', energy: '2100' }
    ],
    'Dx': [
        { number: 37, isotope: 'Dx-37', equation: 'Mineable', energy: '' },
        { number: 38, isotope: 'Dx-38', equation: 'Mineable', energy: '' },
        { number: 39, isotope: 'Dx-39', equation: 'Lu37', energy: '2250' }
    ],
    'Gd': [
        { number: 38, isotope: 'Gd-38', equation: 'Mineable', energy: '' },
        { number: 39, isotope: 'Gd-39', equation: 'Mineable', energy: '' },
        { number: 40, isotope: 'Gd-40', equation: 'Dx39', energy: '2400' }
    ],
    'V': [
        { number: 41, isotope: 'V-41', equation: 'Mineable', energy: '' },
        { number: 42, isotope: 'V-42', equation: 'Mineable', energy: '' },
        { number: 43, isotope: 'V-43', equation: 'Gd40', energy: '2550' }
    ],
    'Uq': [
        { number: 43, isotope: 'Uq-43', equation: 'Mineable', energy: '' },
        { number: 44, isotope: 'Uq-44', equation: 'Mineable', energy: '' },
        { number: 45, isotope: 'Uq-45', equation: 'V43', energy: '2700' }
    ],
    'Pb': [
        { number: 46, isotope: 'Pb-46', equation: 'Mineable', energy: '' },
        { number: 47, isotope: 'Pb-47', equation: 'Mineable', energy: '' },
        { number: 48, isotope: 'Pb-48', equation: 'Uq45', energy: '2850' }
    ],
    'Wy': [
        { number: 45, isotope: 'Wy-45', equation: 'Mineable', energy: '' },
        { number: 46, isotope: 'Wy-46', equation: 'Mineable', energy: '' },
        { number: 47, isotope: 'Wy-47', equation: 'Pb48', energy: '3000' }
    ],
    'L': [
        { number: 48, isotope: 'L-48', equation: 'Mineable', energy: '' },
        { number: 49, isotope: 'L-49', equation: 'Mineable', energy: '' },
        { number: 50, isotope: 'L-50', equation: 'Wy47', energy: '3150' }
    ],
    'Ux': [
        { number: 49, isotope: 'Ux-49', equation: 'Mineable', energy: '' },
        { number: 50, isotope: 'Ux-50', equation: 'Mineable', energy: '' },
        { number: 51, isotope: 'Ux-51', equation: 'L50', energy: '3300' }
    ],
    'Pg': [
        { number: 51, isotope: 'Pg-51', equation: 'Mineable', energy: '' },
        { number: 52, isotope: 'Pg-52', equation: 'Mineable', energy: '' },
        { number: 53, isotope: 'Pg-53', equation: 'Ux51', energy: '3450' }
    ],
    'Qe': [
        { number: 56, isotope: 'Qe-56', equation: 'Mineable', energy: '' },
        { number: 57, isotope: 'Qe-57', equation: 'Mineable', energy: '' },
        { number: 58, isotope: 'Qe-58', equation: 'Pg53', energy: '3600' }
    ],
    'C': [
        { number: 59, isotope: 'C-59', equation: 'Mineable', energy: '' },
        { number: 60, isotope: 'C-60', equation: 'Mineable', energy: '' },
        { number: 61, isotope: 'C-61', equation: 'Qe58', energy: '3750' }
    ],
    'Ns': [
        { number: 60, isotope: 'Ns-60', equation: 'Mineable', energy: '' },
        { number: 61, isotope: 'Ns-61', equation: 'Mineable', energy: '' },
        { number: 62, isotope: 'Ns-62', equation: 'C61', energy: '3900' }
    ],
    'Ai': [
        { number: 65, isotope: 'Ai-65', equation: 'Mineable', energy: '' },
        { number: 66, isotope: 'Ai-66', equation: 'Mineable', energy: '' },
        { number: 67, isotope: 'Ai-67', equation: 'Ns62', energy: '4050' }
    ],
    'F': [
        { number: 63, isotope: 'F-63', equation: 'Mineable', energy: '' },
        { number: 64, isotope: 'F-64', equation: 'Mineable', energy: '' },
        { number: 65, isotope: 'F-65', equation: 'Ai67', energy: '4200' }
    ],
    'Gy': [
        { number: 65, isotope: 'Gy-65', equation: 'Mineable', energy: '' },
        { number: 66, isotope: 'Gy-66', equation: 'Mineable', energy: '' },
        { number: 67, isotope: 'Gy-67', equation: 'F65', energy: '4350' }
    ],
    'Kk': [
        { number: 69, isotope: 'Kk-69', equation: 'Mineable', energy: '' },
        { number: 70, isotope: 'Kk-70', equation: 'Mineable', energy: '' },
        { number: 71, isotope: 'Kk-71', equation: 'Gy67', energy: '4500' }
    ],
    'Yv': [
        { number: 72, isotope: 'Yv-72', equation: 'Mineable', energy: '' },
        { number: 73, isotope: 'Yv-73', equation: 'Mineable', energy: '' },
        { number: 74, isotope: 'Yv-74', equation: 'Kk71', energy: '4650' }
    ],
    'Cj': [
        { number: 72, isotope: 'Cj-72', equation: 'Mineable', energy: '' },
        { number: 73, isotope: 'Cj-73', equation: 'Mineable', energy: '' },
        { number: 74, isotope: 'Cj-74', equation: 'Yv74', energy: '4800' }
    ],
    'Iu': [
        { number: 73, isotope: 'Iu-73', equation: 'Mineable', energy: '' },
        { number: 74, isotope: 'Iu-74', equation: 'Mineable', energy: '' },
        { number: 75, isotope: 'Iu-75', equation: 'Cj74', energy: '4950' }
    ],
    'D': [
        { number: 77, isotope: 'D-77', equation: 'Mineable', energy: '' },
        { number: 78, isotope: 'D-78', equation: 'Mineable', energy: '' },
        { number: 79, isotope: 'D-79', equation: 'Iu75', energy: '5100' }
    ],
    'Co': [
        { number: 78, isotope: 'Co-78', equation: 'Mineable', energy: '' },
        { number: 79, isotope: 'Co-79', equation: 'Mineable', energy: '' },
        { number: 80, isotope: 'Co-80', equation: 'D79', energy: '5250' }
    ],
    'W': [
        { number: 79, isotope: 'W-79', equation: 'Mineable', energy: '' },
        { number: 80, isotope: 'W-80', equation: 'Mineable', energy: '' },
        { number: 81, isotope: 'W-81', equation: 'Co80', energy: '5400' }
    ],
    'Lx': [
        { number: 79, isotope: 'Lx-79', equation: 'Mineable', energy: '' },
        { number: 80, isotope: 'Lx-80', equation: 'Mineable', energy: '' },
        { number: 81, isotope: 'Lx-81', equation: 'W81', energy: '5550' }
    ],
    'N': [
        { number: 84, isotope: 'N-84', equation: 'Mineable', energy: '' },
        { number: 85, isotope: 'N-85', equation: 'Mineable', energy: '' },
        { number: 86, isotope: 'N-86', equation: 'Lx81', energy: '5700' }
    ],
    'U': [
        { number: 85, isotope: 'U-85', equation: 'Mineable', energy: '' },
        { number: 86, isotope: 'U-86', equation: 'Mineable', energy: '' },
        { number: 87, isotope: 'U-87', equation: 'N86', energy: '5850' }
    ],
    'Vl': [
        { number: 87, isotope: 'Vl-87', equation: 'Mineable', energy: '' },
        { number: 88, isotope: 'Vl-88', equation: 'Mineable', energy: '' },
        { number: 89, isotope: 'Vl-89', equation: 'U87', energy: '6000' }
    ],
    'Se': [
        { number: 89, isotope: 'Se-89', equation: 'Mineable', energy: '' },
        { number: 90, isotope: 'Se-90', equation: 'Mineable', energy: '' },
        { number: 91, isotope: 'Se-91', equation: 'Vl89', energy: '6150' }
    ],
    'Nm': [
        { number: 96, isotope: 'Nm-96', equation: 'Mineable', energy: '' },
        { number: 97, isotope: 'Nm-97', equation: 'Mineable', energy: '' },
        { number: 98, isotope: 'Nm-98', equation: 'Se91', energy: '6300' }
    ],
    'Dd': [
        { number: 98, isotope: 'Dd-98', equation: 'Mineable', energy: '' },
        { number: 99, isotope: 'Dd-99', equation: 'Mineable', energy: '' },
        { number: 100, isotope: 'Dd-100', equation: 'Nm98', energy: '6450' }
    ],
    'Ok': [
        { number: 90, isotope: 'Ok-90', equation: 'Mineable', energy: '' },
        { number: 91, isotope: 'Ok-91', equation: 'Mineable', energy: '' },
        { number: 92, isotope: 'Ok-92', equation: 'Dd100', energy: '6600' }
    ],
    'Da': [
        { number: 102, isotope: 'Da-102', equation: 'Mineable', energy: '' },
        { number: 103, isotope: 'Da-103', equation: 'Mineable', energy: '' },
        { number: 104, isotope: 'Da-104', equation: 'Ok92', energy: '6750' }
    ],
    'S': [
        { number: 100, isotope: 'S-100', equation: 'Mineable', energy: '' },
        { number: 101, isotope: 'S-101', equation: 'Mineable', energy: '' },
        { number: 102, isotope: 'S-102', equation: 'Da104', energy: '6900' }
    ],
    'Z': [
        { number: 102, isotope: 'Z-102', equation: 'Mineable', energy: '' },
        { number: 103, isotope: 'Z-103', equation: 'Mineable', energy: '' },
        { number: 104, isotope: 'Z-104', equation: 'S102', energy: '7050' }
    ],
    'Cv': [
        { number: 102, isotope: 'Cv-102', equation: 'Mineable', energy: '' },
        { number: 103, isotope: 'Cv-103', equation: 'Mineable', energy: '' },
        { number: 104, isotope: 'Cv-104', equation: 'Z104', energy: '7200' }
    ],
    'Vt': [
        { number: 100, isotope: 'Vt-100', equation: 'Mineable', energy: '' },
        { number: 101, isotope: 'Vt-101', equation: 'Mineable', energy: '' },
        { number: 102, isotope: 'Vt-102', equation: 'Cv104', energy: '7350' }
    ],
    'Ek': [
        { number: 109, isotope: 'Ek-109', equation: 'Mineable', energy: '' },
        { number: 110, isotope: 'Ek-110', equation: 'Mineable', energy: '' },
        { number: 111, isotope: 'Ek-111', equation: 'Vt102', energy: '7500' }
    ],
    'Ji': [
        { number: 101, isotope: 'Ji-101', equation: 'Mineable', energy: '' },
        { number: 102, isotope: 'Ji-102', equation: 'Mineable', energy: '' },
        { number: 103, isotope: 'Ji-103', equation: 'Ek111', energy: '7650' }
    ],
    'Aw': [
        { number: 110, isotope: 'Aw-110', equation: 'Mineable', energy: '' },
        { number: 111, isotope: 'Aw-111', equation: 'Mineable', energy: '' },
        { number: 112, isotope: 'Aw-112', equation: 'Ji103', energy: '7800' }
    ],
    'Kn': [
        { number: 106, isotope: 'Kn-106', equation: 'Mineable', energy: '' },
        { number: 107, isotope: 'Kn-107', equation: 'Mineable', energy: '' },
        { number: 108, isotope: 'Kn-108', equation: 'Aw112', energy: '7950' }
    ],
    'Ha': [
        { number: 115, isotope: 'Ha-115', equation: 'Mineable', energy: '' },
        { number: 116, isotope: 'Ha-116', equation: 'Mineable', energy: '' },
        { number: 117, isotope: 'Ha-117', equation: 'Kn108', energy: '8100' }
    ],
    'Ax': [
        { number: 107, isotope: 'Ax-107', equation: 'Mineable', energy: '' },
        { number: 108, isotope: 'Ax-108', equation: 'Mineable', energy: '' },
        { number: 109, isotope: 'Ax-109', equation: 'Ha117', energy: '8250' }
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
    const elementName = document.getElementById('elementName');
    const isotopesContainer = document.getElementById('isotopes');
    const element = Object.values(elements).find(el => el.symbol === symbol);
    
    if (element) {
        elementName.textContent = symbol;
        elementModal.style.display = 'block';
        
        // Get isotopes and calculate total energy
        const isotopes = isotopeEquations[symbol] || [];
        const totalEnergy = isotopes.reduce((sum, iso) => sum + (parseInt(iso.energy) || 0), 0);

        // Create the isotope table
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
        
        isotopesContainer.innerHTML = isotopesContent;
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

    .isotope-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    .isotope-table th,
    .isotope-table td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    .isotope-table thead th {
        background-color: #f5f5f5;
        font-weight: bold;
    }

    .dark-mode .isotope-table thead th {
        background-color: #333;
    }

    .dark-mode .isotope-table th,
    .dark-mode .isotope-table td {
        border-bottom-color: #444;
    }

    .isotope-table tbody tr:hover {
        background-color: rgba(148, 79, 79, 0.05);
    }

    .dark-mode .isotope-table tbody tr:hover {
        background-color: rgba(245, 236, 236, 0.05);
    }

    .modal-content {
        background-color: #E0D0CD;
    }

    /* Dark mode styling */
    .dark-mode .modal-content {
        background-color: #2a2a2a;
    }
`;
document.head.appendChild(style);

// Add or update these styles in your style.textContent
const modalStyles = `
    .modal-content {
        background-color: #E0D0CD;
    }

    /* Keep same color for dark mode */
    .dark-mode .modal-content {
        background-color: #E0D0CD;
    }
`;

// Add the modal styles to your existing style element
style.textContent += modalStyles;

// ... rest of the code from script.js remains the same ... 