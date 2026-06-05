# Product

## Register

product

## Users

Final-year university students at BBU preparing for a handwritten final exam on
17 June 2026, across three subjects (Internetworking II, Cyber Security, Mobile
Programming II). The owner plus classmates — some of whom read Khmer more
comfortably than English. Context of use: cramming alone, often the night before,
frequently on a phone, sometimes on a laptop, occasionally printing to paper for
handwriting practice. Many are starting from near-zero ("never listened in class")
and are stressed.

The job to be done: **drill the material until it can be recalled cold and written
by hand**, not just recognized.

## Product Purpose

A bilingual (English / Khmer) active-recall study tool. Each subject is a long
review sheet built from concept boxes (the mental model) and recall drills
(question shown, answer hidden until clicked). Success = a student who failed to
recognize a topic can, after a few passes, produce the answer from memory and
write it on paper. The app exists to make retrieval the path of least resistance
and to remove every excuse not to study (language barrier, no materials, can't
print).

## Brand Personality

Calm, focused, quietly confident. Voice: a patient tutor explaining to the
student who tuned out all semester — plain, concrete, never condescending,
never hype. Three words: **calm, clear, trustworthy.** The interface should
lower exam anxiety, not add to it.

## Anti-references

- **Generic AI SaaS landing pages** — gradient heroes, cream/beige backgrounds,
  identical icon+heading+text cards, marketing buzzwords. The "AI made this" look.
- **Cluttered dashboards** — many competing colors and widgets fighting for
  attention. The content is the only thing that should compete for attention.
- **Childish / gamified study apps** — mascots, badges, confetti, cartoon styling.
  This is a serious exam two weeks out; gamification undermines that.

## Design Principles

1. **Retrieval over recognition.** Every interaction defaults to the active-recall
   loop: see the question, answer it yourself, then reveal. The UI must make
   covering-and-recalling easier than passively reading.
2. **Content is the interface.** The review text is the product. Chrome (nav,
   buttons, panels) stays quiet and recedes so the material reads cleanly.
3. **Calm under pressure.** Reduce cognitive load and visual noise. A stressed
   student at 1am should feel steadied, not overstimulated.
4. **Bilingual parity.** Khmer and English are both first-class. Neither is an
   overlay or afterthought; each reads natively, with type tuned per script.
5. **Phone-and-paper friendly.** Excellent on a small screen for reading, and
   prints clean (answers revealed) for offline handwriting practice.

## Accessibility & Inclusion

- Target **WCAG AA and above** for contrast — readable on cheap screens in poor
  light during late-night study. Body text bumped toward ink, not light-gray
  "for elegance."
- **Bi-script legibility is a first-class requirement.** Khmer needs a real
  webfont (Noto Sans Khmer), larger effective size, and more line-height than
  Latin; English and Khmer must both read cleanly at body size.
- **Respect `prefers-reduced-motion`.** Any motion has a reduced/instant
  alternative; nothing distracts while reading.
- Keyboard-navigable drills and visible focus states.
