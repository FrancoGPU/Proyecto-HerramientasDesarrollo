import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from '../utils/scroll';

export default function ScrollToTop() {
  // Obtenemos la ruta actual
  const { pathname } = useLocation();

  useEffect(() => {
    // Usar setTimeout para asegurar que ocurra después del render
    setTimeout(() => {
      scrollToTop();
    }, 0);
  }, [pathname]);

  // Este componente no renderiza nada visualmente
  return null;
}