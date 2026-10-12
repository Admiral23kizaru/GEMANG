# Turn on real client feedback

The portfolio uses two Firestore collections so a client’s Gmail is never exposed publicly.

| Collection | Who can read it | Purpose |
| --- | --- | --- |
| `testimonialSubmissions` | Only you in Firebase Console | Private Gmail and feedback waiting for review |
| `testimonials` | Everyone | Only the approved display name, optional organization, and feedback |

## Setup

1. Create a Firebase project and add a Web app.
2. Create Cloud Firestore in Production mode.
3. Paste the content of [`firestore.rules`](./firestore.rules) into Firestore Rules and publish them.
4. Copy `.env.example` to `.env.local` and enter your Firebase **web app** configuration.
5. Run `npm run deploy` only after the configuration is present.

Never add `.env.local` to GitHub. Do not share a service-account key or Admin SDK JSON.

## Publishing a checked review

1. Open the private `testimonialSubmissions` collection in Firebase Console.
2. Verify the submitter using the stored Gmail.
3. Create a document in `testimonials` containing only:

```text
displayName: "Client name"     // optional; blank becomes “Verified client”
organization: "Company"        // optional
message: "Approved feedback"
createdAt: <Firestore timestamp>
```

The public review wall updates immediately. Do not copy the Gmail into `testimonials`.

## Spam protection

Public visitors cannot read, edit, delete, or self-publish submissions. Enable Firebase App Check before sharing the form broadly to reduce automated spam.
