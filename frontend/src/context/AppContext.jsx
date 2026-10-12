import React, { useState, useEffect } from 'react';
import { AppContext } from './appContextInstance';
import { translations, collectionTranslations } from '../translations';
import { COLLECTIONS, BRAND } from '../data/furnitureData';

export function AppProvider({ children }) {
  // 1. Language State (Default 'en', persists in localStorage)
  const [language, setLanguageState] = useState(() => {
    try {
      return localStorage.getItem('furniture_language') || 'en';
    } catch {
      return 'en';
    }
  });

  // 2. Theme State (Default 'light', persists in localStorage)
  const [theme, setThemeState] = useState(() => {
    try {
      return localStorage.getItem('furniture_theme') || 'light';
    } catch {
      return 'light';
    }
  });

  const setLanguage = (lang) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('furniture_language', lang);
    } catch {
      // storage fallback
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'ta' : 'en';
    setLanguage(nextLang);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setThemeState(nextTheme);
    try {
      localStorage.setItem('furniture_theme', nextTheme);
    } catch {
      // storage fallback
    }
  };

  // Sync HTML root attributes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-lang', language);
    document.documentElement.setAttribute('lang', language === 'ta' ? 'ta' : 'en');
  }, [theme, language]);

  // Current dictionary
  const t = translations[language] || translations.en;

  // Localized Collections
  const localizedCollections = COLLECTIONS.map((item) => {
    const originalCategory = item.category;
    if (language === 'ta') {
      const tr = collectionTranslations[item.id]?.ta || {};
      return {
        ...item,
        categoryKey: originalCategory,
        category: tr.category || item.category,
        title: tr.title || item.title,
        wood: tr.wood || item.wood,
        dimensions: tr.dimensions || item.dimensions,
        highlight: tr.highlight || item.highlight,
        description: tr.description || item.description,
        tag: tr.tag || item.tag,
      };
    }
    return {
      ...item,
      categoryKey: originalCategory,
    };
  });

  // Localized WhatsApp message helpers
  const getWhatsAppUrl = (customMessage = '') => {
    let message = customMessage;
    if (!message) {
      message = language === 'ta'
        ? `வணக்கம் வர்ணம் பாரம்பரிய மரவேலைப்பாடுகள், நான் உங்கள் வலைத்தளத்தைப் பார்த்துவிட்டு மரப் பொருட்கள் பற்றி அறிய விரும்புகிறேன்.`
        : `Hello Varnam Heritage Woodcraft, I am interested in your handcrafted wooden furniture and would like to learn more.`;
    }
    return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const getItemEnquiryUrl = (item) => {
    let message = '';
    if (language === 'ta') {
      message = `வணக்கம் வர்ணம் பாரம்பரிய மரவேலைப்பாடுகள்,

நான் இந்த மரப்பொருளைப் பற்றி மேலும் அறிய விரும்புகிறேன்:
*பொருள்:* ${item.title}
*மர வகை:* ${item.wood}

இதன் விருப்ப அளவுகள், தயாரிப்பு காலக்கெடு மற்றும் விலை மதிப்பீட்டு விபரங்களைப் பகிருங்கள். நன்றி!`;
    } else {
      message = `Hello Varnam Heritage Woodcraft,

I am interested in learning more about this piece:
*Piece:* ${item.title}
*Category:* ${item.category}
*Wood Type:* ${item.wood}

Could you please share details on custom dimensions, wood finishes, and crafting timelines? Thank you!`;
    }
    return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        theme,
        toggleTheme,
        t,
        collections: localizedCollections,
        getWhatsAppUrl,
        getItemEnquiryUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
