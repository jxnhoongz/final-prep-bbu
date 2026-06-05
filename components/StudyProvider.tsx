"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type StudyCtx = {
  kmOn: boolean;
  toggleKm: () => void;
  reveal: () => void;
  hide: () => void;
  revealNonce: number;
  hideNonce: number;
};

const Ctx = createContext<StudyCtx | null>(null);

export function StudyProvider({ children }: { children: ReactNode }) {
  const [kmOn, setKmOn] = useState(false);
  const [revealNonce, setRevealNonce] = useState(0);
  const [hideNonce, setHideNonce] = useState(0);

  useEffect(() => {
    document.body.classList.toggle("km-on", kmOn);
  }, [kmOn]);

  const toggleKm = useCallback(() => setKmOn((v) => !v), []);
  const reveal = useCallback(() => setRevealNonce((n) => n + 1), []);
  const hide = useCallback(() => setHideNonce((n) => n + 1), []);

  return (
    <Ctx.Provider value={{ kmOn, toggleKm, reveal, hide, revealNonce, hideNonce }}>
      {children}
    </Ctx.Provider>
  );
}

export function useStudy() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useStudy must be used inside <StudyProvider>");
  return v;
}
