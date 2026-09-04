import { useEffect, useRef, useState } from "react";

const defaultOptions = {};

export function useInView(options = defaultOptions) {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1, ...options }
        );

        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [options]);

    return { ref, isInView };
}

