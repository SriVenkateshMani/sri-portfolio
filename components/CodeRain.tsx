"use client";

import { useEffect, useRef, useState } from "react";

const CHARS =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}[]<>/?|~";

function randomString(len: number) {
  let out = "";
  for (let i = 0; i < len; i++) {
    out += CHARS[Math.floor(Math.random() * CHARS.length)];
  }
  return out;
}

type Line = {
  id: number;
  top: number;
  left: number;
  speed: number;
  text: string;
  opacity: number;
};

export default function CodeRain() {
  const [lines, setLines] = useState<Line[]>([]);
  const [scanX, setScanX] = useState<number | null>(null);
  const scanRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scanAnimRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    let id = 0;

    const spawn = setInterval(() => {
      setLines((prev) => {
        if (prev.length >= 40) return prev;
        return [
          ...prev,
          {
            id: id++,
            top: 20 + Math.random() * (window.innerHeight - 40),
            left: -600,
            speed: 3 + Math.random() * 4,
            text: randomString(32 + Math.floor(Math.random() * 20)),
            opacity: 0.75 + Math.random() * 0.2,
          },
        ];
      });
    }, 300);

    const move = setInterval(() => {
      setLines((prev) =>
        prev
          .map((l) => ({ ...l, left: l.left + l.speed }))
          .filter((l) => l.left < window.innerWidth + 600)
      );
    }, 30);

    // Scan line: sweeps left to right
    const triggerScan = () => {
      setScanX(-200);
      let x = -200;
      const w = window.innerWidth;
      scanAnimRef.current = setInterval(() => {
        x += 8;
        setScanX(x);
        if (x > w + 200) {
          clearInterval(scanAnimRef.current!);
          setScanX(null);
          const delay = 4000 + Math.random() * 3000;
          scanRef.current = setTimeout(triggerScan, delay);
        }
      }, 16);
    };

    scanRef.current = setTimeout(triggerScan, 1500);

    return () => {
      clearInterval(spawn);
      clearInterval(move);
      if (scanRef.current) clearTimeout(scanRef.current);
      if (scanAnimRef.current) clearInterval(scanAnimRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {lines.map((line) => (
        <div
          key={line.id}
          className="absolute font-mono text-teal-400 whitespace-nowrap"
          style={{
            top: line.top,
            left: line.left,
            opacity: line.opacity,
            textShadow: "0 0 10px rgba(45,212,191,0.9), 0 0 20px rgba(45,212,191,0.4)",
            fontSize: "13px",
            letterSpacing: "0.05em",
          }}
        >
          {line.text}
        </div>
      ))}

      {/* Scan line — left to right */}
      {scanX !== null && (
        <div
          className="absolute top-0 h-full pointer-events-none"
          style={{
            left: scanX,
            width: "180px",
            background:
              "linear-gradient(to right, transparent 0%, rgba(45,212,191,0.04) 20%, rgba(45,212,191,0.14) 45%, rgba(99,179,237,0.22) 50%, rgba(45,212,191,0.14) 55%, rgba(45,212,191,0.04) 80%, transparent 100%)",
            boxShadow: "0 0 50px rgba(45,212,191,0.2)",
          }}
        />
      )}
    </div>
  );
}
