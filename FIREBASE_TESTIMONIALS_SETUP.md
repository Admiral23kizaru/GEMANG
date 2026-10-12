# Turn on real client testimonials

The portfolio has a client-proof page at `/reviews/`. It intentionally shows only Firestore documents whose `status` is `approved`.

## 1. Create or use a Firebase project

1. Open the Firebase console and create a project.
2. Add a **Web app**.
3. Create a **Cloud Firestore** database in Production mode.
4. In Firestore Rules, replace the default rules with the contents of [`firestore.rules`](./firestore.rules), then publish the rules.

## 2. Add the web configuration locally

Copy `.env.example` to `.env.local` and use the Firebase web configuration values:

```text
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_APP_ID=...
```

Do not commit `.env.local`.

## 3. Deploy

Run:

```powershell
npm run deploy
```

## 4. Moderate submissions

Client submissions appear in the `testimonials` collection with `status: "pending"`.

In Firestore, inspect each one and change only legitimate submissions to:

```text
status: "approved"
```

Approved feedback appears on the public Client proof page. Leave unverified or spam submissions as `pending`.

## Important safety note

The rules block public update and delete actions, so a visitor cannot publish, alter, or remove testimonials. Enable Firebase App Check before sharing the public form widely to reduce automated spam.
