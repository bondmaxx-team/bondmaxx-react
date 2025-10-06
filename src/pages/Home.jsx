import { useEffect } from "react";
import MainSection from "../components/MainSection";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (id) {
      // ensure DOM is painted
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 0);
    }
  }, [location.state]);

  // Set document direction based on language
  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n.language, i18n]);

  return <MainSection />;
}
