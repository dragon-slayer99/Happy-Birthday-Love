import React, { useEffect, useRef, useState } from "react";
import "./TextCursor.css";





export default function TextCursor({
    emoji = "❤️",
    count = 10,
    size = 24,
    lerpFactor = 0.18, 
    spread = 6,
    hideNative = true,
}) {
    const containerRef = useRef(null);
    const rafRef = useRef(null);


  
    const positionsRef = useRef(
        Array.from({ length: count }).map(() => ({ x: -9999, y: -9999 }))
    );


    const targetRef = useRef({ x: -9999, y: -9999 });


  
    const [, setTick] = useState(0);


    useEffect(() => {
      
        positionsRef.current = Array.from({ length: count }).map(
            (v, i) => positionsRef.current[i] || { x: -9999, y: -9999 }
        );
      
        setTick((t) => t + 1);
    }, [count]);


    useEffect(() => {
        function onMove(e) {
            const x = e.touches ? e.touches[0].clientX : e.clientX;
            const y = e.touches ? e.touches[0].clientY : e.clientY;
            targetRef.current.x = x;
            targetRef.current.y = y;
        }


        window.addEventListener("mousemove", onMove, { passive: true });
        window.addEventListener("touchmove", onMove, { passive: true });


        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("touchmove", onMove);
        };
    }, []);
    useEffect(() => {
        const nodes = [];
        if (!containerRef.current) return;
       
        for (let i = 0; i < count; i++) {
            const el = containerRef.current.querySelector(`.emoji-dot[data-index="${i}"]`);
            nodes.push(el);
        }


        function animate() {
            const pos = positionsRef.current;
            const target = targetRef.current;


            
            for (let i = 0; i < pos.length; i++) {
                const leader = i === 0 ? target : pos[i - 1];
                const dx = leader.x - pos[i].x;
                const dy = leader.y - pos[i].y;
                
                const f = Math.max(0.01, lerpFactor - (i * (lerpFactor / (spread + pos.length))));
                pos[i].x += dx * f;
                pos[i].y += dy * f;


               
                const node = nodes[i];
                if (node) {
                    
                    node.style.transform = `translate3d(${pos[i].x}px, ${pos[i].y}px, 0) translate(-50%, -50%) scale(${1 - i / (pos.length * 1.4)})`;
                    node.style.opacity = `${Math.max(0, 1 - (i / pos.length) * 1.05)}`;
                }
            }


            rafRef.current = requestAnimationFrame(animate);
        }


        rafRef.current = requestAnimationFrame(animate);


        return () => cancelAnimationFrame(rafRef.current);
    }, [count, lerpFactor, spread]);
    const rootClass = hideNative ? "emoji-trail-root hide-native-cursor" : "emoji-trail-root";


    return (
        <div className={rootClass} ref={containerRef} aria-hidden="true">
            {Array.from({ length: count }).map((_, i) => (
                <span
                    key={i}
                    data-index={i}
                    className="emoji-dot"
                    style={{
                        fontSize: `${size}px`,
                        width: `${size * 1.2}px`,
                        height: `${size * 1.2}px`,
                        lineHeight: `${size * 1.2}px`,
                    }}
                >
                    {emoji}
                </span>
            ))}
        </div>
    );
}