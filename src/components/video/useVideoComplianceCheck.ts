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

  // Maybe add 1:1, 3:1
  const canPlay = !!params2.get('groups')?.includes('2:1') || !!params2.get('groups')?.includes('4:1');

  return { canPlay };
};

export default useVideoCookieCheck;
