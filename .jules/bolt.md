## 2026-09-07 - [Code Splitting with React.lazy]
**Learning:** Implementing React.lazy for non-critical routes (About, Services, Contact) significantly splits the main bundle into smaller chunks, improving Time to Interactive (TTI) and initial load performance. The main JS bundle decreased by ~2kB (gzip) while creating targeted chunks for other pages.
**Action:** Use React.lazy and Suspense by default for route-level components in React applications to maintain a lean main bundle.
