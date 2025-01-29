// Sample data structure for elements
const elements = {
    // Row 1 (3 elements)
    '0,0': { name: '', symbol: 'Ju', atomicNumber: 1, massNumber: 1, color: '#ff9999' },
    '0,1': { name: '', symbol: 'W', atomicNumber: 4, massNumber: 2, color: '#99ff99' },
    '0,7': { name: '', symbol: 'Cq', atomicNumber: 6, massNumber: 3, color: '#9999ff' },
    
    // Row 2 (4 elements)
    '1,0': { name: '', symbol: 'Af', atomicNumber: 7, massNumber: 4, color: '#ffff99' },
    '1,1': { name: '', symbol: 'Xl', atomicNumber: 11, massNumber: 5, color: '#ff99ff' },
    '1,6': { name: '', symbol: 'Pq', atomicNumber: 13, massNumber: 6, color: '#99ffff' },
    '1,7': { name: '', symbol: 'Zz', atomicNumber: 13, massNumber: 7, color: '#ffa07a' },
    
    // Row 3 (5 elements)
    '2,0': { name: '', symbol: 'Dx', atomicNumber: 15, massNumber: 8, color: '#98fb98' },
    '2,1': { name: '', symbol: 'Pm', atomicNumber: 19, massNumber: 9, color: '#dda0dd' },
    '2,2': { name: '', symbol: 'M', atomicNumber: 23, massNumber: 10, color: '#f0e68c' },
    '2,6': { name: '', symbol: 'Fw', atomicNumber: 25, massNumber: 11, color: '#87ceeb' },
    '2,7': { name: '', symbol: 'Pt', atomicNumber: 25, massNumber: 12, color: '#deb887' },
    
    // Row 4 (4 elements)
    '3,0': { name: '', symbol: 'S', atomicNumber: 25, massNumber: 13, color: '#d8bfd8' },
    '3,1': { name: '', symbol: 'Zq', atomicNumber: 32, massNumber: 14, color: '#ff7f50' },
    '3,2': { name: '', symbol: 'Xc', atomicNumber: 34, massNumber: 15, color: '#6495ed' },
    '3,7': { name: '', symbol: 'Gy', atomicNumber: 34, massNumber: 16, color: '#ffa500' },
    
    // Row 5 (8 elements)
    '4,0': { name: '', symbol: 'D', atomicNumber: 37, massNumber: 17, color: '#40e0d0' },
    '4,1': { name: '', symbol: 'Fj', atomicNumber: 37, massNumber: 18, color: '#ee82ee' },
    '4,2': { name: '', symbol: 'O', atomicNumber: 38, massNumber: 19, color: '#f0fff0' },
    '4,3': { name: '', symbol: 'C', atomicNumber: 39, massNumber: 20, color: '#ffdead' },
    '4,4': { name: '', symbol: 'E', atomicNumber: 41, massNumber: 21, color: '#b8860b' },
    '4,5': { name: '', symbol: 'A', atomicNumber: 42, massNumber: 22, color: '#daa520' },
    '4,6': { name: '', symbol: 'Aw', atomicNumber: 50, massNumber: 23, color: '#cd853f' },
    '4,7': { name: '', symbol: 'Oc', atomicNumber: 51, massNumber: 24, color: '#d2691e' },
    
    // Row 6 (5 elements)
    '5,0': { name: '', symbol: 'Nb', atomicNumber: 54, massNumber: 25, color: '#8b4513' },
    '5,1': { name: '', symbol: 'Xk', atomicNumber: 55, massNumber: 26, color: '#a0522d' },
    '5,5': { name: '', symbol: 'Ic', atomicNumber: 56, massNumber: 27, color: '#6b8e23' },
    '5,6': { name: '', symbol: 'Yp', atomicNumber: 57, massNumber: 28, color: '#9acd32' },
    '5,7': { name: '', symbol: 'Jx', atomicNumber: 58, massNumber: 29, color: '#556b2f' },
    
    // Row 7 (8 elements)
    '6,0': { name: '', symbol: 'Hb', atomicNumber: 57, massNumber: 30, color: '#66cdaa' },
    '6,1': { name: '', symbol: 'At', atomicNumber: 61, massNumber: 31, color: '#8fbc8f' },
    '6,2': { name: '', symbol: 'Ny', atomicNumber: 63, massNumber: 32, color: '#20b2aa' },
    '6,3': { name: '', symbol: 'Pw', atomicNumber: 71, massNumber: 33, color: '#008b8b' },
    '6,4': { name: '', symbol: 'Gk', atomicNumber: 74, massNumber: 34, color: '#5f9ea0' },
    '6,5': { name: '', symbol: 'Qi', atomicNumber: 74, massNumber: 35, color: '#4682b4' },
    '6,6': { name: '', symbol: 'Xy', atomicNumber: 76, massNumber: 36, color: '#b0c4de' },
    '6,7': { name: '', symbol: 'Gq', atomicNumber: 80, massNumber: 37, color: '#4169e1' },
    
    // Row 8 (5 elements)
    '7,0': { name: '', symbol: 'Bt', atomicNumber: 81, massNumber: 38, color: '#0000cd' },
    '7,4': { name: '', symbol: 'H', atomicNumber: 82, massNumber: 39, color: '#00008b' },
    '7,5': { name: '', symbol: 'U', atomicNumber: 83, massNumber: 40, color: '#483d8b' },
    '7,6': { name: '', symbol: 'Sq', atomicNumber: 84, massNumber: 41, color: '#6a5acd' },
    '7,7': { name: '', symbol: 'Ua', atomicNumber: 85, massNumber: 42, color: '#7b68ee' }
};

const isotopeEquations = {
    'Ju': [
        { number: 1, isotope: 'Ju-1', equation: 'Mineable', energy: '' },
        { number: 2, isotope: 'Ju-2', equation: 'Mineable', energy: '' },
        { number: 3, isotope: 'Ju-3', equation: 'Mineable', energy: '' }
    ],
    'W': [
        { number: 4, isotope: 'W-4', equation: 'Mineable', energy: '' },
        { number: 5, isotope: 'W-5', equation: 'Mineable', energy: '' }
    ],
    'Cq': [
        { number: 5, isotope: 'Cq-5', equation: 'Mineable', energy: '' },
        { number: 6, isotope: 'Cq-6', equation: 'Mineable', energy: '' },
        { number: 7, isotope: 'Cq-7', equation: 'Mineable', energy: '' }
    ],
    'Af': [
        { number: 7, isotope: 'Af-7', equation: 'Mineable', energy: '' },
        { number: 8, isotope: 'Af-8', equation: 'Mineable', energy: '' },
        { number: 9, isotope: 'Af-9', equation: 'Mineable', energy: '' },
        { number: 10, isotope: 'Af-10', equation: 'Dx19', energy: '810' }
    ],
    'Xl': [
        { number: 9, isotope: 'Xl-9', equation: 'Mineable', energy: '' },
        { number: 10, isotope: 'Xl-10', equation: 'Mineable', energy: '' },
        { number: 11, isotope: 'Xl-11', equation: 'Mineable', energy: '' },
        { number: 12, isotope: 'Xl-12', equation: 'M23', energy: '1240' }
    ],
    'Pq': [
        { number: 10, isotope: 'Pq-10', equation: 'Mineable', energy: '' },
        { number: 11, isotope: 'Pq-11', equation: 'Fw21', energy: '1300' },
        { number: 12, isotope: 'Pq-12', equation: 'Mineable', energy: '' },
        { number: 13, isotope: 'Pq-13', equation: 'Mineable', energy: '' },
        { number: 14, isotope: 'Pq-14', equation: 'Mineable', energy: '' },
        { number: 15, isotope: 'Pq-15', equation: 'Mineable', energy: '' }
    ],
    'Zz': [
        { number: 13, isotope: 'Zz-13', equation: 'Mineable', energy: '' },
        { number: 14, isotope: 'Zz-14', equation: 'Mineable', energy: '' },
        { number: 15, isotope: 'Zz-15', equation: 'Mineable', energy: '' },
        { number: 16, isotope: 'Zz-16', equation: 'Xc34', energy: '2500' }
    ],
    'Dx': [
        { number: 14, isotope: 'Dx-14', equation: 'Zq26', energy: '1450' },
        { number: 15, isotope: 'Dx-15', equation: 'Mineable', energy: '' },
        { number: 16, isotope: 'Dx-16', equation: 'Mineable', energy: '' },
        { number: 17, isotope: 'Dx-17', equation: 'Mineable', energy: '' },
        { number: 18, isotope: 'Dx-18', equation: 'Xc34', energy: '2600' },
        { number: 19, isotope: 'Dx-19', equation: 'Pm18', energy: '3150' }
    ],
    'Pm': [
        { number: 17, isotope: 'Pm-17', equation: 'Mineable', energy: '' },
        { number: 18, isotope: 'Pm-18', equation: 'Mineable', energy: '' },
        { number: 19, isotope: 'Pm-19', equation: 'Mineable', energy: '' },
        { number: 20, isotope: 'Pm-20', equation: 'C44', energy: '3600' },
        { number: 21, isotope: 'Pm-21', equation: 'C45', energy: '3600' }
    ],
    'M': [
        { number: 19, isotope: 'M-19', equation: 'Af9+Pq10', energy: '500' },
        { number: 20, isotope: 'M-20', equation: 'Mineable', energy: '' },
        { number: 21, isotope: 'M-21', equation: 'Cq7+Zz14', energy: '700' },
        { number: 22, isotope: 'M-22', equation: 'Mineable', energy: '' },
        { number: 23, isotope: 'M-23', equation: 'Mineable', energy: '' }
    ],
    'Fw': [
        { number: 21, isotope: 'Fw-21', equation: 'Cq6+Dx15', energy: '700' },
        { number: 22, isotope: 'Fw-22', equation: 'Af7+Dx15', energy: '600' },
        { number: 23, isotope: 'Fw-23', equation: 'Mineable', energy: '' },
        { number: 24, isotope: 'Fw-24', equation: 'Cq7+Dx17', energy: '1050' },
        { number: 25, isotope: 'Fw-25', equation: 'Mineable', energy: '' },
        { number: 26, isotope: 'Fw-26', equation: 'E48', energy: '4000' }
    ],
    'Pt': [
        { number: 22, isotope: 'Pt-22', equation: 'Nb47', energy: '3687' },
        { number: 23, isotope: 'Pt-23', equation: 'Xl10+Zz13', energy: '582' },
        { number: 24, isotope: 'Pt-24', equation: 'Mineable', energy: '' },
        { number: 25, isotope: 'Pt-25', equation: 'Mineable', energy: '' },
        { number: 26, isotope: 'Pt-26', equation: 'Mineable', energy: '' },
        { number: 27, isotope: 'Pt-27', equation: 'Aw50', energy: '4600' },
        { number: 28, isotope: 'Pt-28', equation: 'Aw52', energy: '4400' }
    ],
    'S': [
        { number: 24, isotope: 'S-24', equation: 'Pq10+Dx14', energy: '518' },
        { number: 25, isotope: 'S-25', equation: 'Mineable', energy: '' },
        { number: 26, isotope: 'S-26', equation: 'Mineable', energy: '' },
        { number: 27, isotope: 'S-27', equation: 'Af9+Pm18', energy: '900' },
        { number: 28, isotope: 'S-28', equation: 'W5+M23', energy: '850' },
        { number: 29, isotope: 'S-29', equation: 'Nb54', energy: '4900' },
        { number: 30, isotope: 'S-30', equation: 'Pq14+Zz16', energy: '1950' }
    ],
    'Zq': [
        { number: 26, isotope: 'Zq-26', equation: 'Hb57', energy: '5000' },
        { number: 27, isotope: 'Zq-27', equation: 'Ju1+S26', energy: '750' },
        { number: 28, isotope: 'Zq-28', equation: 'Xl11+Pm17', energy: '950' },
        { number: 29, isotope: 'Zq-29', equation: 'Ju3+S26', energy: '850' },
        { number: 30, isotope: 'Zq-30', equation: 'Xl11+Pm19', energy: '1450' },
        { number: 31, isotope: 'Zq-31', equation: 'Cq6+Fw25', energy: '900' },
        { number: 32, isotope: 'Zq-32', equation: 'Mineable', energy: '' }
    ],
    'Xc': [
        { number: 28, isotope: 'Xc-28', equation: 'Ic52', energy: '4530' },
        { number: 29, isotope: 'Xc-29', equation: 'Zz14+Dx15', energy: '800' },
        { number: 30, isotope: 'Xc-30', equation: 'Mineable', energy: '' },
        { number: 31, isotope: 'Xc-31', equation: 'Mineable', energy: '' },
        { number: 32, isotope: 'Xc-32', equation: 'Mineable', energy: '' },
        { number: 33, isotope: 'Xc-33', equation: 'Pq15+Pm18', energy: '800' },
        { number: 34, isotope: 'Xc-34', equation: 'Mineable', energy: '' }
    ],
    'Gy': [
        { number: 30, isotope: 'Gy-30', equation: 'Gk65', energy: '5779' },
        { number: 31, isotope: 'Gy-31', equation: 'Ju1+Xc30', energy: '1050' },
        { number: 32, isotope: 'Gy-32', equation: 'Ju1+Xc31', energy: '825' },
        { number: 33, isotope: 'Gy-33', equation: 'Ju2+Xc31', energy: '900' },
        { number: 34, isotope: 'Gy-34', equation: 'Mineable', energy: '' },
        { number: 35, isotope: 'Gy-35', equation: 'Ju1+Xc34', energy: '850' },
        { number: 36, isotope: 'Gy-36', equation: 'Ju2+Xc34', energy: '900' }
    ],
    'D': [
        { number: 32, isotope: 'D-32', equation: 'Af7+S25', energy: '700' },
        { number: 33, isotope: 'D-33', equation: 'Zz13+M20', energy: '1300' },
        { number: 34, isotope: 'D-34', equation: 'Xl10+Pt24', energy: '1200' },
        { number: 35, isotope: 'D-35', equation: 'Ju1+Gy34', energy: '1100' },
        { number: 36, isotope: 'D-36', equation: 'Ju2+Gy34', energy: '1200' },
        { number: 37, isotope: 'D-37', equation: 'Mineable', energy: '' },
        { number: 38, isotope: 'D-38', equation: 'Cq6+Zq32', energy: '1100' },
        { number: 39, isotope: 'D-39', equation: 'Pq14+Fw25', energy: '1100' }
    ],
    'Fj': [
        { number: 34, isotope: 'Fj-34', equation: 'Pm17+Pm17', energy: '1000' },
        { number: 35, isotope: 'Fj-35', equation: 'Pm17+Pm18', energy: '1050' },
        { number: 36, isotope: 'Fj-36', equation: 'Pm18+Pm18', energy: '1100' },
        { number: 37, isotope: 'Fj-37', equation: 'Mineable', energy: '' },
        { number: 38, isotope: 'Fj-38', equation: 'Pm19+Pm19', energy: '2000' },
        { number: 39, isotope: 'Fj-39', equation: 'Ju2+D37', energy: '940' },
        { number: 40, isotope: 'Fj-40', equation: 'Ju3+D37', energy: '1000' },
        { number: 41, isotope: 'Fj-41', equation: 'Af9+Zq32', energy: '1200' }
    ],
    'O': [
        { number: 36, isotope: 'O-36', equation: 'Qi67', energy: '6000' },
        { number: 37, isotope: 'O-37', equation: 'Pm17+M20', energy: '1500' },
        { number: 38, isotope: 'O-38', equation: 'Pm18+M20', energy: '1600' },
        { number: 39, isotope: 'O-39', equation: 'Ju2+Fj37', energy: '1000' },
        { number: 40, isotope: 'O-40', equation: 'Ju3+Fj37', energy: '1000' },
        { number: 41, isotope: 'O-41', equation: 'Pq15+S26', energy: '1000' },
        { number: 42, isotope: 'O-42', equation: 'Pm19+M23', energy: '1700' },
        { number: 43, isotope: 'O-43', equation: 'Af9+Xc34', energy: '1300' }
    ],
    'C': [
        { number: 38, isotope: 'C-38', equation: 'Ju1+O37', energy: '900' },
        { number: 39, isotope: 'C-39', equation: 'Dx15+Pt24', energy: '1500' },
        { number: 40, isotope: 'C-40', equation: 'M20+M20', energy: '2350' },
        { number: 41, isotope: 'C-41', equation: 'W4+Fj37', energy: '1100' },
        { number: 42, isotope: 'C-42', equation: 'Cq5+D37', energy: '750' },
        { number: 43, isotope: 'C-43', equation: 'Pm18+Fw25', energy: '1250' },
        { number: 44, isotope: 'C-44', equation: 'M22+M22', energy: '2450' },
        { number: 45, isotope: 'C-45', equation: 'Xl11+Xc34', energy: '1400' }
    ],
    'E': [
        { number: 40, isotope: 'E-40', equation: 'Dx15+O37', energy: '2100' },
        { number: 41, isotope: 'E-41', equation: 'Pm17+Pt24', energy: '1600' },
        { number: 42, isotope: 'E-42', equation: 'Cq5+Fj37', energy: '750' },
        { number: 43, isotope: 'E-43', equation: 'Pm18+Pt24', energy: '1700' },
        { number: 44, isotope: 'E-44', equation: 'Pm19+Pt24', energy: '1800' },
        { number: 45, isotope: 'E-45', equation: 'Pm19+Pt25', energy: '1900' },
        { number: 46, isotope: 'E-46', equation: 'D37+Xl11', energy: '1100' },
        { number: 47, isotope: 'E-47', equation: 'D38+Xl11', energy: '1200' },
        { number: 48, isotope: 'E-48', equation: 'M23+Pt25', energy: '1400' }
    ],
    'A': [
        { number: 42, isotope: 'A-42', equation: 'S25+Pm17', energy: '1200' },
        { number: 43, isotope: 'A-43', equation: 'S25+Pm18', energy: '1350' },
        { number: 44, isotope: 'A-44', equation: 'Af7+Fj37', energy: '900' },
        { number: 45, isotope: 'A-45', equation: 'Af8+Fj37', energy: '1300' },
        { number: 46, isotope: 'A-46', equation: 'D37+Xl9', energy: '1100' },
        { number: 47, isotope: 'A-47', equation: 'D37+Xl10', energy: '1200' },
        { number: 48, isotope: 'A-48', equation: 'D37+Xl11', energy: '1300' },
        { number: 49, isotope: 'A-49', equation: 'M23+Pt26', energy: '2050' },
        { number: 50, isotope: 'A-50', equation: 'D39+Xl11', energy: '1400' }
    ],
    'Aw': [
        { number: 44, isotope: 'Aw-44', equation: 'Dx15+O37', energy: '1750' },
        { number: 45, isotope: 'Aw-45', equation: 'Dx15+O38', energy: '1800' },
        { number: 46, isotope: 'Aw-46', equation: 'Dx16+O38', energy: '1900' },
        { number: 47, isotope: 'Aw-47', equation: 'Dx17+O38', energy: '2000' },
        { number: 48, isotope: 'Aw-48', equation: 'Dx17+O39', energy: '2100' },
        { number: 49, isotope: 'Aw-49', equation: 'Dx18+O39', energy: '2200' },
        { number: 50, isotope: 'Aw-50', equation: 'Mineable', energy: '' },
        { number: 51, isotope: 'Aw-51', equation: 'Dx19+O40', energy: '2400' },
        { number: 52, isotope: 'Aw-52', equation: 'Dx19+O41', energy: '2500' }
    ],
    'Oc': [
        { number: 46, isotope: 'Oc-46', equation: 'Ju1+Aw45', energy: '1100' },
        { number: 47, isotope: 'Oc-47', equation: 'Ju2+Aw45', energy: '1200' },
        { number: 48, isotope: 'Oc-48', equation: 'Ju2+Aw46', energy: '1300' },
        { number: 49, isotope: 'Oc-49', equation: 'Ju3+Aw46', energy: '1400' },
        { number: 50, isotope: 'Oc-50', equation: 'Pt25+Pt25', energy: '1650' },
        { number: 51, isotope: 'Oc-51', equation: 'Cq5+Oc46', energy: '786' },
        { number: 52, isotope: 'Oc-52', equation: 'Cq6+Oc46', energy: '800' },
        { number: 53, isotope: 'Oc-53', equation: 'Cq6+Oc47', energy: '850' },
        { number: 54, isotope: 'Oc-54', equation: 'Cq7+Oc47', energy: '900' }
    ],
    'Nb': [
        { number: 47, isotope: 'Nb-47', equation: 'Zz13+Fj34', energy: '1250' },
        { number: 48, isotope: 'Nb-48', equation: 'Zz14+Fj34', energy: '1300' },
        { number: 49, isotope: 'Nb-49', equation: 'Zz14+Fj35', energy: '1350' },
        { number: 50, isotope: 'Nb-50', equation: 'Zz15+Fj35', energy: '1400' },
        { number: 51, isotope: 'Nb-51', equation: 'S25+S26', energy: '1600' },
        { number: 52, isotope: 'Nb-52', equation: 'S25+S27', energy: '1700' },
        { number: 53, isotope: 'Nb-53', equation: 'S26+S27', energy: '1800' },
        { number: 54, isotope: 'Nb-54', equation: 'Mineable', energy: '' },
        { number: 55, isotope: 'Nb-55', equation: 'M23+Xc32', energy: '' },
        { number: 56, isotope: 'Nb-56', equation: 'M22+Xc34', energy: '' }
    ],
    'Xk': [
        { number: 50, isotope: 'Xk-50', equation: 'S25+S25', energy: '1600' },
        { number: 51, isotope: 'Xk-51', equation: 'S25+S26', energy: '1600' },
        { number: 52, isotope: 'Xk-52', equation: 'S26+S26', energy: '1750' },
        { number: 53, isotope: 'Xk-53', equation: 'Dx16+Fj37', energy: '2000' },
        { number: 54, isotope: 'Xk-54', equation: 'Dx17+Fj37', energy: '2200' },
        { number: 55, isotope: 'Xk-55', equation: 'Cq5+Aw50', energy: '910' },
        { number: 56, isotope: 'Xk-56', equation: 'Pm19+D37', energy: '2300' },
        { number: 57, isotope: 'Xk-57', equation: 'Cq7+Aw50', energy: '1500' },
        { number: 58, isotope: 'Xk-58', equation: 'Pt26+Zq32', energy: '2400' },
        { number: 59, isotope: 'Xk-59', equation: 'Fw25+Xc34', energy: '1750' }
    ],
    'Ic': [
        { number: 51, isotope: 'Ic-51', equation: 'Cq5+Oc46', energy: '786' },
        { number: 52, isotope: 'Ic-52', equation: 'M20+D32', energy: '2250' },
        { number: 53, isotope: 'Ic-53', equation: 'S26+Zq27', energy: '1800' },
        { number: 54, isotope: 'Ic-54', equation: 'Pt24+Xc30', energy: '3100' },
        { number: 55, isotope: 'Ic-55', equation: 'Pt25+Xc30', energy: '2400' },
        { number: 56, isotope: 'Ic-56', equation: 'Pt25+Xc31', energy: '1950' },
        { number: 57, isotope: 'Ic-57', equation: 'Af7+Aw50', energy: '1090' },
        { number: 58, isotope: 'Ic-58', equation: 'S26+Zq32', energy: '1800' },
        { number: 59, isotope: 'Ic-59', equation: 'Af9+Aw50', energy: '1620' },
        { number: 60, isotope: 'Ic-60', equation: 'M23+D37', energy: '1800' },
        { number: 61, isotope: 'Ic-61', equation: 'M23+D38', energy: '1850' }
    ],
    'Yp': [
        { number: 54, isotope: 'Yp-54', equation: 'M20+Fj34', energy: '2200' },
        { number: 55, isotope: 'Yp-55', equation: 'S25+Xc30', energy: '2350' },
        { number: 56, isotope: 'Yp-56', equation: 'S25+Xc31', energy: '1900' },
        { number: 57, isotope: 'Yp-57', equation: 'M20+Fj37', energy: '2500' },
        { number: 58, isotope: 'Yp-58', equation: 'Pt24+Gy34', energy: '3200' },
        { number: 59, isotope: 'Yp-59', equation: 'M22+Fj37', energy: '2550' },
        { number: 60, isotope: 'Yp-60', equation: 'S26+Xc34', energy: '1950' },
        { number: 61, isotope: 'Yp-61', equation: 'Cq7+Nb54', energy: '1650' },
        { number: 62, isotope: 'Yp-62', equation: 'Fw25+D37', energy: '1950' },
        { number: 63, isotope: 'Yp-63', equation: 'Fw25+D38', energy: '2000' }
    ],
    'Jx': [
        { number: 56, isotope: 'Jx-56', equation: 'S25+Gy31', energy: '1900' },
        { number: 57, isotope: 'Jx-57', equation: 'S26+Gy31', energy: '2000' },
        { number: 58, isotope: 'Jx-58', equation: 'S25+Gy33', energy: '2500' },
        { number: 59, isotope: 'Jx-59', equation: 'S25+Gy34', energy: '2500' },
        { number: 60, isotope: 'Jx-60', equation: 'Pq10+Aw50', energy: '1100' },
        { number: 61, isotope: 'Jx-61', equation: 'Pt24+D37', energy: '2550' },
        { number: 62, isotope: 'Jx-62', equation: 'Pt25+D37', energy: '2050' },
        { number: 63, isotope: 'Jx-63', equation: 'Pq13+Aw50', energy: '2100' },
        { number: 64, isotope: 'Jx-64', equation: 'Pq14+Aw50', energy: '1750' },
        { number: 65, isotope: 'Jx-65', equation: 'Pq15+Aw50', energy: '1500' }
    ],
    'Hb': [
        { number: 57, isotope: 'Hb-57', equation: 'S25+D32', energy: '1900' },
        { number: 58, isotope: 'Hb-58', equation: 'S26+D32', energy: '2000' },
        { number: 59, isotope: 'Hb-59', equation: 'Dx15+A44', energy: '1800' },
        { number: 60, isotope: 'Hb-60', equation: 'Xc30+Xc30', energy: '3600' },
        { number: 61, isotope: 'Hb-61', equation: 'Xc30+Xc31', energy: '2900' },
        { number: 62, isotope: 'Hb-62', equation: 'Xc31+Xc31', energy: '2300' },
        { number: 63, isotope: 'Hb-63', equation: 'Zz13+Aw50', energy: '1700' },
        { number: 64, isotope: 'Hb-64', equation: 'Zz14+Aw50', energy: '1700' },
        { number: 65, isotope: 'Hb-65', equation: 'Xc31+Xc34', energy: '2300' },
        { number: 66, isotope: 'Hb-66', equation: 'Zq32+Xc34', energy: '2100' },
        { number: 67, isotope: 'Hb-67', equation: 'Xc33+Xc34', energy: '2400' }
    ],
    'At': [
        { number: 60, isotope: 'At-60', equation: 'Xl9+Ic51', energy: '1187' },
        { number: 61, isotope: 'At-61', equation: 'S26+Fj35', energy: '2000' },
        { number: 62, isotope: 'At-62', equation: 'S25+Fj37', energy: '2000' },
        { number: 63, isotope: 'At-63', equation: 'S26+Fj37', energy: '2200' },
        { number: 64, isotope: 'At-64', equation: 'Pq10+Nb54', energy: '1150' },
        { number: 65, isotope: 'At-65', equation: 'Dx15+Aw50', energy: '1850' },
        { number: 66, isotope: 'At-66', equation: 'Dx16+Aw50', energy: '2500' },
        { number: 67, isotope: 'At-67', equation: 'Dx17+Aw50', energy: '2550' },
        { number: 68, isotope: 'At-68', equation: 'Xc34+Xc34', energy: '2300' },
        { number: 69, isotope: 'At-69', equation: 'Pq15+Nb54', energy: '1500' }
    ],
    'Ny': [
        { number: 61, isotope: 'Ny-61', equation: 'Pq10+Ic51', energy: '1040' },
        { number: 62, isotope: 'Ny-62', equation: 'Cq5+Hb57', energy: '900' },
        { number: 63, isotope: 'Ny-63', equation: 'Xc30+D33', energy: '2900' },
        { number: 64, isotope: 'Ny-64', equation: 'Zq27+Fj37', energy: '2200' },
        { number: 65, isotope: 'Ny-65', equation: 'Xc30+D35', energy: '3000' },
        { number: 66, isotope: 'Ny-66', equation: 'Pt25+C41', energy: '2300' },
        { number: 67, isotope: 'Ny-67', equation: 'Xc30+D37', energy: '3050' },
        { number: 68, isotope: 'Ny-68', equation: 'Xc31+D37', energy: '2400' },
        { number: 69, isotope: 'Ny-69', equation: 'Pm19+Aw50', energy: '2800' },
        { number: 70, isotope: 'Ny-70', equation: 'Gy34+Gy36', energy: '3050' },
        { number: 71, isotope: 'Ny-71', equation: 'D37+Xc34', energy: '2350' },
        { number: 72, isotope: 'Ny-72', equation: 'Ju3+At69', energy: '1600' }
    ],
    'Pw': [
        { number: 64, isotope: 'Pw-64', equation: 'Af7+Hb57', energy: '1400' },
        { number: 65, isotope: 'Pw-65', equation: 'Xc31+Fj34', energy: '2250' },
        { number: 66, isotope: 'Pw-66', equation: 'Pt26+E40', energy: '2700' },
        { number: 67, isotope: 'Pw-67', equation: 'Xc30+Fj37', energy: '3050' },
        { number: 68, isotope: 'Pw-68', equation: 'Xc31+Fj37', energy: '2400' },
        { number: 69, isotope: 'Pw-69', equation: 'Dx15+Nb54', energy: '1850' },
        { number: 70, isotope: 'Pw-70', equation: 'Dx16+Nb54', energy: '2500' },
        { number: 71, isotope: 'Pw-71', equation: 'Dx17+Nb54', energy: '2600' },
        { number: 72, isotope: 'Pw-72', equation: 'M22+Aw50', energy: '3050' },
        { number: 73, isotope: 'Pw-73', equation: 'M23+Aw50', energy: '2250' },
        { number: 74, isotope: 'Pw-74', equation: 'Xc34+Fj40', energy: '3200' }
    ],
    'Gk': [
        { number: 65, isotope: 'Gk-65', equation: 'Dx14+Ic51', energy: '1443' },
        { number: 66, isotope: 'Gk-66', equation: 'Xl9+Hb57', energy: '1300' },
        { number: 67, isotope: 'Gk-67', equation: 'S25+E42', energy: '2200' },
        { number: 68, isotope: 'Gk-68', equation: 'Gy34+Fj34', energy: '3000' },
        { number: 69, isotope: 'Gk-69', equation: 'D32+Fj37', energy: '2350' },
        { number: 70, isotope: 'Gk-70', equation: 'Pt26+A44', energy: '3100' },
        { number: 71, isotope: 'Gk-71', equation: 'Gy34+Fj37', energy: '3200' },
        { number: 72, isotope: 'Gk-72', equation: 'Pm18+Nb54', energy: '2100' },
        { number: 73, isotope: 'Gk-73', equation: 'Pm19+Nb54', energy: '2900' },
        { number: 74, isotope: 'Gk-74', equation: 'D37+D37', energy: '2550' },
        { number: 75, isotope: 'Gk-75', equation: 'Fw25+Aw50', energy: '2400' },
        { number: 76, isotope: 'Gk-76', equation: 'D37+D39', energy: '2550' }
    ],
    'Qi': [
        { number: 67, isotope: 'Qi-67', equation: 'Pq10+Hb57', energy: '1200' },
        { number: 68, isotope: 'Qi-68', equation: 'Fj34+Fj34', energy: '2250' },
        { number: 69, isotope: 'Qi-69', equation: 'Fj34+Fj35', energy: '2350' },
        { number: 70, isotope: 'Qi-70', equation: 'S26+A44', energy: '2400' },
        { number: 71, isotope: 'Qi-71', equation: 'D37+Fj34', energy: '2350' },
        { number: 72, isotope: 'Qi-72', equation: 'Gy34+O38', energy: '3200' },
        { number: 73, isotope: 'Qi-73', equation: 'Zq32+E41', energy: '2350' },
        { number: 74, isotope: 'Qi-74', equation: 'M20+Nb54', energy: '3000' },
        { number: 75, isotope: 'Qi-75', equation: 'Pt25+Aw50', energy: '2550' },
        { number: 76, isotope: 'Qi-76', equation: 'M22+Nb54', energy: '3100' },
        { number: 77, isotope: 'Qi-77', equation: 'M23+Nb55', energy: '2213' }
    ],
    'Xy': [
        { number: 69, isotope: 'Xy-69', equation: 'Pt22+Nb47', energy: '2040' },
        { number: 70, isotope: 'Xy-70', equation: 'Zz13+Hb57', energy: '1600' },
        { number: 71, isotope: 'Xy-71', equation: 'Xc29+A42', energy: '2400' },
        { number: 72, isotope: 'Xy-72', equation: 'Xc29+A43', energy: '2600' },
        { number: 73, isotope: 'Xy-73', equation: 'Xc32+E41', energy: '2600' },
        { number: 74, isotope: 'Xy-74', equation: 'Fj37+Fj37', energy: '2300' },
        { number: 75, isotope: 'Xy-75', equation: 'S25+Aw50', energy: '2500' },
        { number: 76, isotope: 'Xy-76', equation: 'S26+Aw50', energy: '2500' },
        { number: 77, isotope: 'Xy-77', equation: 'Fw23+Nb54', energy: '3050' },
        { number: 78, isotope: 'Xy-78', equation: 'Fw24+Nb54', energy: '2500' },
        { number: 79, isotope: 'Xy-79', equation: 'Fw25+Nb54', energy: '2400' }
    ],
    'Gq': [
        { number: 72, isotope: 'Gq-72', equation: 'Dx15+Hb57', energy: '1750' },
        { number: 73, isotope: 'Gq-73', equation: 'Dx16+Hb57', energy: '2550' },
        { number: 74, isotope: 'Gq-74', equation: 'Xc30+A44', energy: '3450' },
        { number: 75, isotope: 'Gq-75', equation: 'Xc31+A44', energy: '2800' },
        { number: 76, isotope: 'Gq-76', equation: 'Xc31+A45', energy: '2800' },
        { number: 77, isotope: 'Gq-77', equation: 'Pt23+Nb54', energy: '2350' },
        { number: 78, isotope: 'Gq-78', equation: 'Pt24+Nb54', energy: '3200' },
        { number: 79, isotope: 'Gq-79', equation: 'Pt25+Nb54', energy: '2550' },
        { number: 80, isotope: 'Gq-80', equation: 'Pt26+Nb54', energy: '3300' }
    ],
    'Bt': [
        { number: 73, isotope: 'Bt-73', equation: 'Pt22+Ic51', energy: '2083' },
        { number: 74, isotope: 'Bt-74', equation: 'Pm17+Hb57', energy: '2050' },
        { number: 75, isotope: 'Bt-75', equation: 'Xc29+Oc46', energy: '2600' },
        { number: 76, isotope: 'Bt-76', equation: 'Gy34+A42', energy: '3400' },
        { number: 77, isotope: 'Bt-77', equation: 'Pt26+Xk51', energy: '3200' },
        { number: 78, isotope: 'Bt-78', equation: 'Gy34+A44', energy: '3650' },
        { number: 79, isotope: 'Bt-79', equation: 'S25+Nb54', energy: '2400' },
        { number: 80, isotope: 'Bt-80', equation: 'Xc30+Aw50', energy: '3600' },
        { number: 81, isotope: 'Bt-81', equation: 'Xc31+Aw50', energy: '2950' }
    ],
    'H': [
        { number: 75, isotope: 'H-75', equation: 'Xc28+Nb47', energy: '2310' },
        { number: 76, isotope: 'H-76', equation: 'M19+Hb57', energy: '2200' },
        { number: 77, isotope: 'H-77', equation: 'M20+Hb57', energy: '3000' },
        { number: 78, isotope: 'H-78', equation: 'Fj37+E41', energy: '2750' },
        { number: 79, isotope: 'H-79', equation: 'Fj37+E42', energy: '2800' },
        { number: 80, isotope: 'H-80', equation: 'S25+Xk55', energy: '2600' },
        { number: 81, isotope: 'H-81', equation: 'Zq27+Nb54', energy: '2650' },
        { number: 82, isotope: 'H-82', equation: 'Xc32+Oc50', energy: '2850' }
    ],
    'U': [
        { number: 78, isotope: 'U-78', equation: 'Fw21+Hb57', energy: '2300' },
        { number: 79, isotope: 'U-79', equation: 'Fj37+A42', energy: '2800' },
        { number: 80, isotope: 'U-80', equation: 'Pt25+Yp55', energy: '2650' },
        { number: 81, isotope: 'U-81', equation: 'O40+E41', energy: '2900' },
        { number: 82, isotope: 'U-82', equation: 'D32+Aw50', energy: '2850' },
        { number: 83, isotope: 'U-83', equation: 'Xc29+Nb54', energy: '2800' }
    ],
    'Sq': [
        { number: 79, isotope: 'Sq-79', equation: 'Pt22+Hb57', energy: '2250' },
        { number: 80, isotope: 'Sq-80', equation: 'Xc30+Xk50', energy: '3400' },
        { number: 81, isotope: 'Sq-81', equation: 'Xc30+Xk51', energy: '3600' },
        { number: 82, isotope: 'Sq-82', equation: 'Xc31+Xk51', energy: '2900' },
        { number: 83, isotope: 'Sq-83', equation: 'Fw25+Hb58', energy: '2500' },
        { number: 84, isotope: 'Sq-84', equation: 'Fj34+Aw50', energy: '2850' }
    ],
    'Ua': [
        { number: 83, isotope: 'Ua-83', equation: 'Ju1+Sq82', energy: '1800' },
        { number: 84, isotope: 'Ua-84', equation: 'Ju2+Sq82', energy: '1900' },
        { number: 85, isotope: 'Ua-85', equation: 'S26+Jx59', energy: '2750' }
    ]
};

// Helper function to generate isotope ranges
function generateIsotopes(element, start, end) {
    const isotopes = [];
    for (let i = start; i <= end; i++) {
        isotopes.push({
            isotope: `${element}-${i}`,
            equation: `Combination for ${element}-${i}`,
            energy: `${i * 2} MW`  // Placeholder energy value
        });
    }
    return isotopes;
}

// Show element details in modal
function showElementDetails(elementSymbol, elementColor) {
    const modal = document.getElementById('elementModal');
    const isotopes = isotopeEquations[elementSymbol] || [];
    
    // Calculate total energy for this element's isotopes
    const totalEnergy = isotopes.reduce((sum, isotope) => 
        sum + (Number(isotope.energy) || 0), 0);

    // Create isotopes table content
    const isotopesContent = `
        <table class="isotope-table">
            <tr>
                <th>Isotope</th>
                <th>Equation</th>
                <th>Energy</th>
            </tr>
            ${isotopes.map(isotope => `
                <tr>
                    <td>${isotope.isotope}</td>
                    <td>${isotope.equation}</td>
                    <td>${isotope.energy}</td>
                </tr>
            `).join('')}
        </table>
        <div class="energy-total">
            Total Energy Required: ${totalEnergy.toLocaleString()}
        </div>
    `;

    modal.innerHTML = `
        <div class="modal-content" style="background-color: ${elementColor.replace('rgb', 'rgba').replace(')', ', 0.4)')}">
            <span class="close">&times;</span>
            <h2>${elementSymbol}</h2>
            <div class="isotope-info">
                ${isotopesContent}
            </div>
        </div>
    `;

    modal.style.display = "block";

    // Add close button functionality
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Create periodic table
function createPeriodicTable() {
    const periodicTable = document.getElementById('periodicTable');
    
    // Define empty spaces pattern (true means show element, false means empty)
    const gridPattern = [
        [1,1,0,0,0,0,0,1], // Row 1
        [1,1,0,0,0,0,1,1], // Row 2
        [1,1,1,0,0,0,1,1], // Row 3
        [1,1,1,0,0,0,0,1], // Row 4
        [1,1,1,1,1,1,1,1], // Row 5
        [1,1,0,0,0,1,1,1], // Row 6
        [1,1,1,1,1,1,1,1], // Row 7
        [1,0,0,0,1,1,1,1]  // Row 8
    ];

    // Create the grid
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const cell = document.createElement('div');
            
            if (gridPattern[row][col]) {
                const elementKey = `${row},${col}`;
                const elementData = elements[elementKey] || 
                                  { name: 'Unknown', symbol: '??', atomicNumber: '?', massNumber: '?', color: '#gray' };
                
                cell.className = 'element';
                cell.style.backgroundColor = elementData.color;
                cell.innerHTML = `
                    <div class="atomic-number">${elementData.atomicNumber}</div>
                    <div class="symbol">${elementData.symbol}</div>
                    <div class="mass-number">${elementData.massNumber}</div>
                    <div class="name">${elementData.name}</div>
                `;
                
                // Add click event listener directly to the element
                cell.addEventListener('click', () => {
                    showElementDetails(elementData.symbol, elementData.color);
                });
            } else {
                cell.className = 'empty';
            }
            
            periodicTable.appendChild(cell);
        }
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('elementModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Initialize the periodic table when the page loads
document.addEventListener('DOMContentLoaded', createPeriodicTable);

// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const slideMenu = document.querySelector('.slide-menu');
    const menuClose = document.querySelector('.menu-close');

    menuToggle.addEventListener('click', () => {
        slideMenu.classList.add('active');
    });

    menuClose.addEventListener('click', () => {
        slideMenu.classList.remove('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!slideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            slideMenu.classList.remove('active');
        }
    });

    const roadmapBtn = document.getElementById('roadmapBtn');
    const roadmapModal = document.getElementById('roadmapModal');
    const closeButtons = document.querySelectorAll('.close');

    document.getElementById('roadmapBtn').addEventListener('click', function() {
        const popup = document.createElement('div');
        popup.className = 'popup';
        
        // Analyze the isotope equations data
        const mineableElements = new Set();
        const step2Elements = new Set();
        const mineableIsotopes = new Map(); // Store which isotopes are mineable
        const step2Isotopes = new Map(); // Store which isotopes can be made from mineable ones
        const mineableUsage = new Map(); // Track usage of each mineable isotope
        const step2Usage = new Map(); // Track usage of Step 2 isotopes

        // First pass: identify mineable elements and their isotopes
        for (const [element, isotopes] of Object.entries(isotopeEquations)) {
            isotopes.forEach(isotope => {
                if (isotope.equation === 'Mineable') {
                    mineableElements.add(element);
                    if (!mineableIsotopes.has(element)) {
                        mineableIsotopes.set(element, []);
                    }
                    mineableIsotopes.get(element).push(isotope.isotope);
                    mineableUsage.set(isotope.isotope, 0); // Initialize usage count
                }
            });
        }

        // Second pass: identify Step 2 isotopes
        for (const [element, isotopes] of Object.entries(isotopeEquations)) {
            if (!mineableElements.has(element)) {
                isotopes.forEach(isotope => {
                    if (isotope.equation && isotope.equation !== 'Mineable') {
                        const components = isotope.equation.split('+');
                        const allComponentsMineable = components.every(comp => {
                            const match = comp.match(/([A-Z][a-z]*)(\d+)/);
                            if (match) {
                                const [_, elementSymbol, number] = match;
                                if (mineableElements.has(elementSymbol)) {
                                    const fullIsotope = `${elementSymbol}-${number}`;
                                    return mineableIsotopes.get(elementSymbol).includes(fullIsotope);
                                }
                            }
                            return false;
                        });

                        if (allComponentsMineable) {
                            step2Elements.add(element);
                            if (!step2Isotopes.has(element)) {
                                step2Isotopes.set(element, []);
                                step2Usage.set(element, new Map());
                            }
                            step2Isotopes.get(element).push(isotope.isotope);
                            step2Usage.get(element).set(isotope.isotope, 0); // Initialize usage count
                        }
                    }
                });
            }
        }

        // Third pass: count usage of both mineable and Step 2 isotopes
        for (const [element, isotopes] of Object.entries(isotopeEquations)) {
            isotopes.forEach(isotope => {
                if (isotope.equation && isotope.equation !== 'Mineable') {
                    const components = isotope.equation.split('+');
                    components.forEach(comp => {
                        const match = comp.match(/([A-Z][a-z]*)(\d+)/);
                        if (match) {
                            const [_, elementSymbol, number] = match;
                            const fullIsotope = `${elementSymbol}-${number}`;
                            
                            // Count mineable isotope usage
                            if (mineableElements.has(elementSymbol) && 
                                mineableIsotopes.get(elementSymbol).includes(fullIsotope)) {
                                mineableUsage.set(fullIsotope, (mineableUsage.get(fullIsotope) || 0) + 1);
                            }
                            
                            // Count Step 2 isotope usage
                            if (step2Elements.has(elementSymbol) && 
                                step2Isotopes.get(elementSymbol).includes(fullIsotope)) {
                                const elementUsageMap = step2Usage.get(elementSymbol);
                                if (elementUsageMap) {
                                    elementUsageMap.set(fullIsotope, (elementUsageMap.get(fullIsotope) || 0) + 1);
                                }
                            }
                        }
                    });
                }
            });
        }

        // Sort elements by total usage
        const getTotalUsage = (element, usageMap) => {
            let total = 0;
            if (mineableElements.has(element)) {
                mineableIsotopes.get(element).forEach(isotope => {
                    total += mineableUsage.get(isotope) || 0;
                });
            } else {
                step2Isotopes.get(element)?.forEach(isotope => {
                    total += step2Usage.get(element).get(isotope) || 0;
                });
            }
            return total;
        };

        const sortedMineable = Array.from(mineableElements)
            .sort((a, b) => getTotalUsage(b, mineableUsage) - getTotalUsage(a, mineableUsage));
        const sortedStep2 = Array.from(step2Elements)
            .sort((a, b) => getTotalUsage(b, step2Usage) - getTotalUsage(a, step2Usage));

        // Generate cards for mineable elements
        const generateMineableCards = (elements) => elements.map(element => {
            const isotopes = mineableIsotopes.get(element);
            const isotopeList = isotopes.map(isotope => 
                `${isotope} (${mineableUsage.get(isotope) || 0} uses)`
            ).join(', ');
            const totalUses = getTotalUsage(element, mineableUsage);
            const maxUses = Math.max(...Array.from(mineableUsage.values()));
            
            return `
                <div class="element-card">
                    <div class="element-name">${element}</div>
                    <div class="element-stats">
                        Total uses: ${totalUses}
                        <div class="mineable-isotopes">
                            Mineable: ${isotopeList}
                        </div>
                    </div>
                    <div class="usage-bar">
                        <div class="usage-fill" style="width: ${Math.min((totalUses / maxUses) * 100, 100)}%"></div>
                    </div>
                </div>
            `;
        }).join('');

        // Generate cards for Step 2 elements
        const generateStep2Cards = (elements) => elements.map(element => {
            const isotopes = step2Isotopes.get(element);
            const isotopeList = isotopes.map(isotope => 
                `${isotope} (${step2Usage.get(element).get(isotope) || 0} uses)`
            ).join(', ');
            const totalUses = getTotalUsage(element, step2Usage);
            const maxUses = Math.max(...Array.from(step2Elements).map(e => getTotalUsage(e, step2Usage)));
            
            return `
                <div class="element-card">
                    <div class="element-name">${element}</div>
                    <div class="element-stats">
                        Total uses: ${totalUses}
                        <div class="mineable-isotopes">
                            Created from mineable: ${isotopeList}
                        </div>
                    </div>
                    <div class="usage-bar">
                        <div class="usage-fill" style="width: ${Math.min((totalUses / maxUses) * 100, 100)}%"></div>
                    </div>
                </div>
            `;
        }).join('');

        const roadmapContent = `
            <style>
                .popup {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }

                .roadmap-container {
                    max-width: 1200px;
                    margin: 20px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 20px;
                    padding: 20px;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                    background: #1a1a1a;
                    border-radius: 15px;
                }

                .element-card {
                    background: #2a2a2a;
                    border-radius: 10px;
                    padding: 20px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    transition: transform 0.2s;
                }

                .element-card:hover {
                    transform: translateY(-5px);
                }

                .step-title {
                    width: 100%;
                    grid-column: 1 / -1;
                    color: #4CAF50;
                    font-size: 24px;
                    margin: 20px 0;
                    padding-bottom: 10px;
                    border-bottom: 2px solid #4CAF50;
                }

                .element-name {
                    font-size: 20px;
                    color: #4CAF50;
                    margin-bottom: 10px;
                }

                .element-stats {
                    font-size: 14px;
                    color: #bbb;
                    margin-bottom: 15px;
                    line-height: 1.5;
                }

                .mineable-isotopes {
                    margin-top: 5px;
                    font-style: italic;
                }

                .usage-bar {
                    height: 6px;
                    background: #444;
                    border-radius: 3px;
                    margin-top: 10px;
                }

                .usage-fill {
                    height: 100%;
                    background: #4CAF50;
                    border-radius: 3px;
                    transition: width 0.3s ease;
                }

                .close-btn {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: none;
                    border: none;
                    color: #fff;
                    font-size: 24px;
                    cursor: pointer;
                    z-index: 1001;
                }
            </style>
            <div class="roadmap-container">
                <button class="close-btn">×</button>
                
                <div class="step-title">Step 1: Mineable Elements</div>
                ${generateMineableCards(sortedMineable)}

                <div class="step-title">Step 2: Elements from Mineable Components</div>
                ${generateStep2Cards(sortedStep2)}
            </div>
        `;

        popup.innerHTML = roadmapContent;
        document.body.appendChild(popup);

        // Close button functionality
        popup.querySelector('.close-btn').addEventListener('click', function() {
            popup.remove();
        });

        // Close on click outside
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                popup.remove();
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            roadmapModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === roadmapModal) {
            roadmapModal.style.display = 'none';
        }
    });

    // Add submit changes button
    const submitButton = document.createElement('a');
    submitButton.href = 'https://x.com/Donquixuote';
    submitButton.target = '_blank';
    submitButton.className = 'submit-changes-btn';
    submitButton.innerHTML = `
        Submit Changes
        <div class="subtitle">via X</div>
    `;
    
    // Add the button to the slide menu
    slideMenu.appendChild(submitButton);

    // Add the CSS for the button
    const style = document.createElement('style');
    style.textContent = `
        .submit-changes-btn {
            display: block;
            margin: 10px;
            padding: 8px 15px;
            background: #1DA1F2;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            text-align: center;
            transition: background-color 0.2s;
            cursor: pointer;
            font-size: 14px;
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% - 40px);
            max-width: 200px;
        }

        .submit-changes-btn:hover {
            background: #0d8ed9;
        }

        .submit-changes-btn .subtitle {
            font-size: 10px;
            opacity: 0.8;
            margin-top: 2px;
        }
    `;
    document.head.appendChild(style);
}); 