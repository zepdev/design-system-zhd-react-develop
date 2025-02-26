import ReactPlayer from 'react-player';
import play from '../../assets/play.svg';

interface ResponsivePlayerProps {
  url: string;
  thumbnail: string;
}

const ResponsivePlayer = ({ url, thumbnail }: ResponsivePlayerProps) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        margin: '0 auto',
        aspectRatio: '16 / 9',
      }}
    >
      <ReactPlayer
        playing
        controls
        playIcon={
          <img
            alt="play"
            className="zep-max-w-[48px] zep-max-h-[48px] md:zep-max-w-[100px] md:zep-max-h-[100px]"
            src={play}
          ></img>
        }
        light={thumbnail}
        url={url}
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
        config={{
          file: { attributes: { style: { objectFit: 'cover' } } },
        }}
      />
    </div>
  );
};

export default ResponsivePlayer;
