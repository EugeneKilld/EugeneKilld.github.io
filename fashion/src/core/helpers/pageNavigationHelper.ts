import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export const ScrollToTop = () => window.scrollTo(0, 0)

export const ScrollToTopOnPageReload = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}