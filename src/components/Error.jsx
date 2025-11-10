// src/utils/firebaseErrors.js
export const firebaseErrorMap = {
  // Auth
  "auth/invalid-email": "The email address is not valid. Please check and try again.",
  "auth/user-disabled": "This account has been disabled. Contact support if you think this is a mistake.",
  "auth/user-not-found": "No account found with this email. Please sign up first.",
  "auth/wrong-password": "Incorrect password. Try again or reset your password.",
  "auth/email-already-in-use": "This email is already registered. Try signing in or use another email.",
  "auth/weak-password": "Password is too weak. Use at least 6 characters.",
  "auth/operation-not-allowed": "This authentication method is not enabled. Please contact support.",
  "auth/too-many-requests": "Too many attempts. Please wait a moment and try again.",
  "auth/network-request-failed": "Network error. Check your connection and try again.",
  "auth/popup-closed-by-user": "The sign-in popup was closed. Try signing in again.",
  "auth/cancelled-popup-request": "Popup request cancelled. Try again.",
  // Provider / OAuth
  "auth/account-exists-with-different-credential":
    "An account already exists with the same email but different sign-in method. Try another sign-in method.",
  // Generic (fallback)
  "default": "Something went wrong. Please try again later."
};

export function getFirebaseErrorMessage(error) {
  if (!error) return firebaseErrorMap.default;
  const code = error.code || error?.message || "default";
  return firebaseErrorMap[code] || firebaseErrorMap.default;
}
