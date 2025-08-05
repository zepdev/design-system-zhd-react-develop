import { useEffect, useState } from 'react';

const useVideoCookieCheck = () => {
  const [hasCookie, setHasCookie] = useState(false);
  const [updatedCookie, setUpdatedCookie] = useState<string | null>(null);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const cookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith('OptanonConsent='))
        ?.replace('OptanonConsent=', '');

      if (!cookie) {
        const checkCookie = () => {
          const updatedCookie = document.cookie
            .split('; ')
            .find((row) => row.startsWith('OptanonConsent='))
            ?.replace('OptanonConsent=', '');

          if (updatedCookie) {
            setHasCookie(true);
            setUpdatedCookie(updatedCookie);
          } else {
            setTimeout(checkCookie, 1000);
          }
        };

        checkCookie();
      } else {
        setUpdatedCookie(cookie);
        setHasCookie(true);
      }
    }
  }, []);

  if (!hasCookie) return { canPlay: false };

  const params2 = new URLSearchParams(updatedCookie || '');

  /*
  * OneTrust Cookie Groups IDs
  * C0001 - Strictly Necessary Cookies
  * C0002 - Performance Cookies
  * C0003 - Functional Cookies
  * C0004 - Targeting/Marketing Cookies
  * C0005 - Social Media Cookies
  * */

  // Only C0004 (Targeting/Marketing Cookies) are needed to watch videos and see instagram posts
  const canPlay = !!params2.get('groups')?.includes('4:1');

  return { canPlay };
};

export default useVideoCookieCheck;
