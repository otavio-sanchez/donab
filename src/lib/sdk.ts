import { initSDK } from "@octaverse-sdk/node";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

console.log("[SDK] Firebase config:", {
  apiKey: config.apiKey ? `${config.apiKey.slice(0, 8)}...` : "❌ MISSING",
  authDomain: config.authDomain || "❌ MISSING",
  projectId: config.projectId || "❌ MISSING",
  storageBucket: config.storageBucket || "❌ MISSING",
  messagingSenderId: config.messagingSenderId || "❌ MISSING",
  appId: config.appId ? `${config.appId.slice(0, 12)}...` : "❌ MISSING",
});

initSDK(config);
