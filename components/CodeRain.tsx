"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    let id = 0;

    const spawn = setInterval(() => {
      setLines((prev) => {
        if (prev.length >= 16) return prev; // fewer streams

        return [
          ...prev,
          {
            id: id++,
            top: 50 + Math.random() * (window.innerHeight - 100),
            left: -400,
            speed: 1.5 + Math.random() * 1.5, // smooth slower speed
            text: randomString(22 + Math.floor(Math.random() * 12)),
            opacity: 0.6 + Math.random() * 0.25, // visible but soft
          },
        ];
      });
    }, 800); // slower spawn rate

    const move = setInterval(() => {
      setLines((prev) =>
        prev
          .map((l) => ({ ...l, left: l.left + l.speed }))
          .filter((l) => l.left < window.innerWidth + 400)
      );
    }, 30); // smooth motion

    return () => {
      clearInterval(spawn);
      clearInterval(move);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {lines.map((line) => (
        <div
          key={line.id}
          className="absolute font-mono text-teal-400 whitespace-nowrap"
          style={{
            top: line.top,
            left: line.left,
            opacity: line.opacity,
          }}
        >
          {line.text}
        </div>
      ))}
    </div>
  );
}
