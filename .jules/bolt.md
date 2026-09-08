## 2024-05-18 - Route-Level Code Splitting using React.lazy and Suspense

**Learning:** Route-level components in this React frontend (except the critical Home route) should be code-split and loaded asynchronously using `React.lazy` and `Suspense` to minimize the main JavaScript bundle size and improve initial load performance.
**Action:** Always implement code splitting for non-critical routes (e.g., About, Contact, Services) when setting up or modifying frontend routing in this codebase.
