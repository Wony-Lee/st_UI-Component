import { RefObject, useEffect, useState } from "react";

function useIntersetionObserver(
    targetRef: RefObject<Element>,
    options: IntersectionObserverInit = {
        threshold: 0,
        root: null,
        rootMargin: "0px",
    }
): IntersectionObserverEntry | undefined {
    const [entry, setEntry] = useState<IntersectionObserverEntry>();

    const IsIntersecting = entry?.isIntersecting;

    const updateEntry = (entries: IntersectionObserverEntry[]): void => {
        const [entry] = entries;

        setEntry(entry);
    };
    useEffect(() => {
        const target = targetRef.current;
        if (IsIntersecting || !target) return;
        const observer = new IntersectionObserver(updateEntry, options);

        observer.observe(target);

        return () => {
            observer.disconnect();
        };
    }, [
        targetRef,
        options.root,
        options.rootMargin,
        options.threshold,
        IsIntersecting,
    ]);
    return entry;
}

export default useIntersetionObserver;
