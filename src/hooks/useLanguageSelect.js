import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

// A reusable hook to manage language selection UI and i18n changes.
// - Persists selection in localStorage under `lang`.
// - Exposes `languages`, `currentLanguage`, `isOpen`, and control handlers.
export default function useLanguageSelect() {
  const { i18n } = useTranslation();

  const languages = useMemo(
    () => [
      { code: "ar", name: "العربية", flag: "https://flagcdn.com/w20/sa.png" },
      { code: "tr", name: "Türkçe", flag: "https://flagcdn.com/w20/tr.png" },
      { code: "en", name: "English", flag: "https://flagcdn.com/w20/us.png" },
      { code: "de", name: "Deutsch", flag: "https://flagcdn.com/w20/de.png" },
    ],
    []
  );

  const findLanguage = useCallback(
    (code) => languages.find((l) => l.code === code) || languages[0],
    [languages]
  );

  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("lang");
    const code = stored || i18n.language || "ar";
    return findLanguage(code);
  });

  useEffect(() => {
    // keep i18n in sync if currentLanguage changes externally
    if (currentLanguage?.code && i18n.language !== currentLanguage.code) {
      i18n.changeLanguage(currentLanguage.code);
    }
  }, [currentLanguage, i18n]);

  useEffect(() => {
    // initialize from i18n if present and not matching state
    const code = i18n.language;
    if (code && code !== currentLanguage.code) {
      setCurrentLanguage(findLanguage(code));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = useCallback(() => setIsOpen((v) => !v), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const selectLanguage = useCallback(
    (code) => {
      const lang = findLanguage(code);
      setCurrentLanguage(lang);
      try {
        localStorage.setItem("lang", lang.code);
      } catch {
        // ignore write errors (private/incognito or disabled storage)
      }
      i18n.changeLanguage(lang.code);
      close();
    },
    [findLanguage, i18n, close]
  );

  return {
    languages,
    currentLanguage,
    isOpen,
    toggle,
    open,
    close,
    selectLanguage,
  };
}
