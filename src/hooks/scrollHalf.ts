// import { useEffect, useRef } from "react";

// const useCenteredScroll = (elementId: string) => {
//   const scrollableDivRef = useRef(null);

//   const ref = useRef<HTMLCanvasElement>(null);
//   const scrollRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const p = scrollRef.current?.parentElement!;
//     p.scrollLeft = (p.scrollWidth - p.clientWidth) / 1.99;
//     p.scrollTop = (p.scrollHeight - p.clientHeight) / 2;
//   }, [scrollRef]);

//   return scrollableDivRef;
// };

// export default useCenteredScroll;
