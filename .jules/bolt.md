## 2024-05-18 - [Lazy Loading Testing]
**Learning:** [When implementing lazy loading with React.lazy, testing library queries targeting the lazily loaded components must be updated to async versions like `findBy` to account for the rendering delay, otherwise synchronous tests will fail.]
**Action:** [Update tests utilizing `getBy` or `queryBy` to `await findBy` when the target component is switched to dynamic import.]
