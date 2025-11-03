import type { ReactNode } from "react";
import { Nav } from "./nav";

type PageProps = {
    children: ReactNode | ReactNode[]
};

export const Page = ({
    children
}: PageProps) => {
    return (
        <div className='flex flex-col'>
            <Nav />
            <div>
                {children}
            </div>
        </div>
    )
}