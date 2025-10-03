import { useEffect } from "react";
import MainSection from "../components/MainSection";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

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
  return <MainSection />;
}
