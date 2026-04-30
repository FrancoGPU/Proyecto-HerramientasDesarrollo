import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  // Obtenemos la ruta actual
  const { pathname } = useLocation();

  useEffect(() => {
    // Usar setTimeout para asegurar que ocurra después del render
    setTimeout(() => {
      // Hacer scroll en el document.documentElement (html)
      document.documentElement.scrollTop = 0;
      // También en document.body por compatibilidad
      document.body.scrollTop = 0;
      // También usar window.scrollTo como backup
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  // Este componente no renderiza nada visualmente
  return null;
}