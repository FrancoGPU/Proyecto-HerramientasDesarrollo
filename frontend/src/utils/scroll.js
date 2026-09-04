export const scrollToTop = (smooth = false) => {
  if (process.env.NODE_ENV !== 'test') {
    if (smooth) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    }
  }
};
