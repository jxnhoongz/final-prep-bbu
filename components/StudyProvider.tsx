"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

type StudyCtx = {
  reveal: () => void;
  hide: () => void;
  revealNonce: number;
  hideNonce: number;
};

const Ctx = createContext<StudyCtx | null>(null);

export function StudyProvider({ children }: { children: ReactNode }) {
  const [revealNonce, setRevealNonce] = useState(0);
  const [hideNonce, setHideNonce] = useState(0);

  const reveal = useCallback(() => setRevealNonce((n) => n + 1), []);
  const hide = useCallback(() => setHideNonce((n) => n + 1), []);

  return (
    <Ctx.Provider value={{ reveal, hide, revealNonce, hideNonce }}>
      {children}
    </Ctx.Provider>
  );
}

export function useStudy() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useStudy must be used inside <StudyProvider>");
  return v;
}
