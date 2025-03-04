import { HTMLAttributes } from 'react';

export interface CardSquareProps extends HTMLAttributes<HTMLDivElement> {
    imageSrc: string;
    imageAlt: string;
    headline: string;
    description?: string;
    cardListsLength?: number | undefined;
}
//# sourceMappingURL=card-square.interface.d.ts.map