# Support dashboard

Small React dashboard for a customer-support team. It renders open-ticket stats and
a ticket table; the widgets are intentionally split into small components so a review
can reason about them one at a time.

## Run locally

```bash
npm install
npm run dev
```

## Branches

- `pr/risky` adds dashboard widgets that recreate props on every render.
- `pr/safe` adds the same widgets with memoized props and stable keys.
- `pr/edge` adds an already-optimized list that should pass review cleanly.
