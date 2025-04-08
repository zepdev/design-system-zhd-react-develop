import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface MediaTextSmallProps {
    headline: string;
    orderedLists?: string[];
    content?: BlocksContent;
    imageSrc: string;
    imageAlt?: string;
}