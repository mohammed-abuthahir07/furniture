import { useEffect } from 'react';

/**
 * Robust, high-performance IntersectionObserver hook with automatic
 * re-observation on dynamic DOM changes (filtering, language switch).
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const revealElements = () => {
      const elements = document.querySelectorAll(
        '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade'
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 50 && rect.bottom > -50) {
          el.classList.add('is-visible');
        }
      });
    };

    revealElements();

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade').forEach((el) => {
        el.classList.add('is-visible');
      });
      return;
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.05,
    });

    const elements = document.querySelectorAll(
      '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade'
    );

    elements.forEach((el) => {
      if (!el.classList.contains('is-visible')) {
        observer.observe(el);
      }
    });

    // Re-scan only once per frame when cards are filtered or the language changes
    let scanQueued = false;
    const queueScan = () => {
      if (scanQueued) return;
      scanQueued = true;
      requestAnimationFrame(() => {
        scanQueued = false;
        revealElements();
        document.querySelectorAll(
          '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade'
        ).forEach((el) => {
          if (!el.classList.contains('is-visible')) {
            observer.observe(el);
          }
        });
      });
    };

    const mutationObserver = new MutationObserver(queueScan);

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
