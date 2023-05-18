import Router, { NextRouter } from "next/router";
import { PropsWithChildren } from "react";
import { RouterContext } from 'next/dist/shared/lib/router-context';


interface Props {
    asPath?: string;
    isReady?: boolean;
    pathname?: string;
    push?: (newPath: string) => void;
    query?: Record<string, string>;
    replace?: (newPath: string) => void;
}

export const MockRouter = ({
    children,
    push = jest.fn().mockResolvedValue(true),
    replace = jest.fn().mockResolvedValue(true),
    pathname = '/',
    query = {},
    isReady = true,
    asPath = pathname,
}: PropsWithChildren<Props>) => {

    const mockRouter = {
        pathname,
        prefetch: jest.fn().mockResolvedValue(jest.fn()),
        push,
        replace,
        query,
        asPath,
        isReady
    } as unknown as NextRouter;

    // @ts-expect-error - Mock Router
    Router.router = mockRouter;

    return <RouterContext.Provider value={mockRouter}>{children}</RouterContext.Provider>;
}