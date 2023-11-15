export function getCookie(cookieName: string, cookies?: string) {
  if (!cookies) {
    cookies = document.cookie;
  }

  const cookieArray = cookies.split('; ');

  for (let i = 0; i < cookieArray.length; i++) {
    const [name, value] = cookieArray[i].split('=');

    const cleanedName = name.trim();

    if (cleanedName === cookieName) {
      return decodeURIComponent(value);
    }
  }

  return null;
}
