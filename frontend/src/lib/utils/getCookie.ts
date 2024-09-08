// utils/cookieUtils.js

export function getCookie(name: string): string | null {
  if (typeof window === "undefined") {
    return null; // Return null if running on the server side
  }

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const lastPart = parts.pop();
    return lastPart ? lastPart.split(";").shift() || null : null;
  }
  return null;
}

//   export function setCookie(name, value, days) {
//     let expires = "";
//     if (days) {
//       const date = new Date();
//       date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//       expires = `; expires=${date.toUTCString()}`;
//     }
//     document.cookie = `${name}=${value || ""}${expires}; path=/`;
//   }

//   export function deleteCookie(name) {
//     document.cookie = `${name}=; Max-Age=-99999999;`;
//   }
