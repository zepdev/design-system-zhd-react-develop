import { HeaderLongComponent } from "../header-long-component";
import { Layout } from "../layout";
import { MediaTextComponent } from "../media-text-component/MediaTextComponent";
import { MediaTextComponentPatternProps } from "./media-textcomponent-pattern.interfce";

export const MediaTextComponentPattern: React.FC<MediaTextComponentPatternProps> = ({ items, ...props }) => {
  return (
    <Layout data-testid="zep-mediatext-pattern">
      <div className="zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4 xl:zep-mb-5">
        {props.headline && <HeaderLongComponent headline={props.headline} {...props} />}
      </div>
      <div className="zep-inline-grid md:zep-grid zep-gap-3 sm:zep-gap-4 xl:zep-gap-5">
        {items.map((item, index) => (
          <MediaTextComponent key={index} {...item} />
        ))}
      </div>
    </Layout>
  );
}