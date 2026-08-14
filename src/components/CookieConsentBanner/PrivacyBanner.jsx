import { useEffect, useState } from 'react';
import { getStoredConsent, saveConsent, defaultPreferences } from '../../utils/privacyPreferences';
import './PrivacyBanner.css';

export default function PrivacyBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [preferences, setPreferences] = useState(defaultPreferences);

  useEffect(() => {
    const stored = getStoredConsent();

    if (!stored) {
      setIsVisible(true);
    } else {
      setPreferences(stored);
    }

    function handleOpenSettings() {
      setPreferences(getStoredConsent() || defaultPreferences);
      setIsExpanded(true);
      setIsVisible(true);
    }

    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  function close() {
    setIsVisible(false);
    setIsExpanded(false);
  }

  function acceptAll() {
    saveConsent({ analytics: true, marketing: true });
    close();
  }

  function rejectAll() {
    saveConsent({ analytics: false, marketing: false });
    close();
  }

  function saveCustom() {
    saveConsent(preferences);
    close();
  }

  function toggle(key) {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  if (!isVisible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Postavke kolačića">
      <div className="cookie-banner-inner">
        {!isExpanded ? (
          <>
            <div className="cookie-banner-text">
              <p className="cookie-banner-title">Poštujemo vašu privatnost</p>
              <p className="cookie-banner-description">
                Koristimo kolačiće za nužno funkcioniranje stranice, analitiku posjećenosti i
                prilagođeno oglašavanje. Prihvatite sve, odbijte sve koji nisu nužni, ili
                prilagodite izbor po kategorijama. Više u{' '}
                <a href="/postavke-kolacica">postavkama kolačića</a>.
              </p>
            </div>

            <div className="cookie-banner-actions">
              <button className="cookie-btn cookie-btn-ghost" onClick={() => setIsExpanded(true)}>
                Prilagodi
              </button>
              <button className="cookie-btn cookie-btn-outline" onClick={rejectAll}>
                Odbij sve
              </button>
              <button className="cookie-btn cookie-btn-primary" onClick={acceptAll}>
                Prihvati sve
              </button>
            </div>
          </>
        ) : (
          <div className="cookie-banner-preferences">
            <p className="cookie-banner-title">Prilagodite postavke kolačića</p>

            <div className="cookie-category">
              <div className="cookie-category-header">
                <span className="cookie-category-name">Nužni kolačići</span>
                <span className="cookie-category-badge">Uvijek aktivno</span>
              </div>
              <p className="cookie-category-text">
                Potrebni su za osnovno funkcioniranje stranice (npr. navigacija, sigurnost). Ne
                mogu se isključiti.
              </p>
            </div>

            <div className="cookie-category">
              <div className="cookie-category-header">
                <span className="cookie-category-name">Analitički kolačići</span>
                <label className="cookie-switch">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => toggle('analytics')}
                  />
                  <span className="cookie-switch-track"></span>
                </label>
              </div>
              <p className="cookie-category-text">
                Google Analytics — pomaže nam razumjeti kako posjetitelji koriste stranicu, radi
                njenog poboljšanja.
              </p>
            </div>

            <div className="cookie-category">
              <div className="cookie-category-header">
                <span className="cookie-category-name">Marketinški kolačići</span>
                <label className="cookie-switch">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={() => toggle('marketing')}
                  />
                  <span className="cookie-switch-track"></span>
                </label>
              </div>
              <p className="cookie-category-text">
                Google Ads i Facebook Pixel — koriste se za mjerenje učinkovitosti oglasa i
                prikaz relevantnih oglasa na drugim stranicama.
              </p>
            </div>

            <div className="cookie-banner-actions">
              <button className="cookie-btn cookie-btn-outline" onClick={rejectAll}>
                Odbij sve
              </button>
              <button className="cookie-btn cookie-btn-primary" onClick={saveCustom}>
                Spremi izbor
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}