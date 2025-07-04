import { CookieLayer } from '@/components/cookie-layer/CookieLayer';
import ReactPlayer from 'react-player';
import play from '../../assets/play.svg';
import useVideoCookieCheck from './useVideoComplianceCheck';

interface ResponsivePlayerProps {
  url: string;
  thumbnail: string;
  thumbnailAlt: string;
  label?: string;
  description?: string;
}

export type OneTrustType = {
  ToggleInfoDisplay: () => void;
  OnConsentChanged: (callback: () => void) => void;
};
const ResponsivePlayer = ({ url, thumbnail, label, description }: ResponsivePlayerProps) => {
  const { canPlay } = useVideoCookieCheck();

  const resetCookies = () => {
    if (
      typeof window !== 'undefined' &&
      typeof (window as Window & typeof globalThis & { OneTrust: OneTrustType }).OneTrust !== 'undefined'
    ) {
      const OneTrust = (window as Window & typeof globalThis & { OneTrust: OneTrustType }).OneTrust;
      OneTrust?.OnConsentChanged(() => {
        window.location.reload();
      });
      OneTrust?.ToggleInfoDisplay();
    }
  };
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        margin: '0 auto',
        aspectRatio: '16 / 9',
        // height: '100%',
      }}
    >
      {!canPlay ? (
        <CookieLayer label={label} description={description} onClickCookies={resetCookies} />
      ) : (
        <ReactPlayer
          controls
          playIcon={
            <img
              alt="play"
              className="zep-max-w-[48px] zep-max-h-[48px] md:zep-max-w-[100px] md:zep-max-h-[100px]"
              src={play}
            />
          }
          volume={0.7}
          // light={<img src={thumbnail} alt={thumbnailAlt} />}
          light={thumbnail}
          url={url}
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
          config={{
            file: { attributes: { style: { objectFit: 'cover', width: '100%' } } },
          }}
        ></ReactPlayer>
      )}
    </div>
  );
};

export default ResponsivePlayer;
