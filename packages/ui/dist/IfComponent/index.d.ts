import { ReactNode } from 'react';

interface IFProps {
    condition: boolean;
    children: ReactNode;
}
declare function If({ condition, children }: IFProps): JSX.Element;

export { If as default };
