// Central Asset Registry for all local furniture imagery
import bed2 from './Bedroom Furniture/bed2.avif';
import bed3 from './Bedroom Furniture/bed3.jpg';
import bed4 from './Bedroom Furniture/bed4.avif';
import bed5 from './Bedroom Furniture/bed5.jpg';

import coffee2 from './Coffee Tables/coffee2.jpg';
import coffee5 from './Coffee Tables/coffee5.jpg';

import sofa3 from './Living Room Sofas/sofa3.jpg';
import sofa5 from './Living Room Sofas/sofa5.webp';
import sofa6 from './Living Room Sofas/sofa6.jpg';


import outdoor1 from './Outdoor/outdoor1.jpg';
import outdoor3 from './Outdoor/outdoor3.avif';

import side4 from './Side Tables/side4.jpg';

import study1 from './Study Tables/study1.webp';
import study3 from './Study Tables/study3.jpg';

import wall1 from './Wall Art/wall1.webp';
import wall2 from './Wall Art/wall2.jpg';
import wall3 from './Wall Art/wall3.webp';

export const IMAGES = {
  hero: sofa5,
  heroSecondary: bed5,
  about: bed5,
  aboutSecondary: coffee5,
  editorialShowcase: outdoor3,
  traditionSplit: bed4,
  customSection: sofa3,
  
  beds: {
    regalTeak: bed5,
    minimalCanopy: bed4,
    heritageCarved: bed2,
    artisanPlank: bed3,
  },
  sofas: {
    grandLounger: sofa6,
    classicTuxedo: sofa3,
  },
  coffeeTables: {
    sculptedWalnut: coffee5,
    minimalistTeak: coffee2,
  },
  outdoor: {
    patioLounger: outdoor3,
    verandaSet: outdoor1,
  },
  study: {
    executiveDesk: study3,
    compactStudy: study1,
  },
  sideTables: {
    flutedEndTable: side4,
  },
  wallArt: {
    botanicalCarving: wall3,
    geometricPanel: wall1,
    heritagePanel: wall2,
  }
};
