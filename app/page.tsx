import Countdown from "@/components/Countdown";
import { subjects } from "@/lib/subjects";

export default function Home() {
  return (
    <div className="main">
      <h1>Final Exam Prep</h1>
      <p className="sub">
        Three subjects · handwritten exam · active-recall study sheets
      </p>
      <Countdown />

      <div className="cards">
        {subjects.map((s) => (
          <a key={s.slug} className={`card ${s.theme}`} href={s.route}>
            <div className="ic">
              <svg>
                <use href={`#${s.icon}`} />
              </svg>
            </div>
            <h2>{s.title}</h2>
            <p>{s.short}</p>
            <div className="meta">{s.topics.length} topics →</div>
            <ul>
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>

      <div className="panel">
        <h3>How to use these sheets (the method that fixes recall)</h3>
        <ol>
          <li>
            <b>Read the concept box first.</b> Each topic opens with the mental
            model — the <i>why</i> so facts stick.
          </li>
          <li>
            <b>Then close it and retrieve.</b> Each drill shows a question; the
            answer is hidden. Say or write your answer <i>before</i> clicking
            reveal. The struggle to recall is what builds memory — reading the
            answer does almost nothing.
          </li>
          <li>
            <b>Mark misses, repeat tomorrow.</b> The ones you fail are your real
            study list. Re-test them, don’t re-read them.
          </li>
          <li>
            <b>Write the configs/code by hand.</b> Your exam is handwritten —
            practice writing OSPF/Intent/Dart from a blank page, not just
            recognising them.
          </li>
        </ol>
        <div className="tip">
          <b>Spacing beats cramming:</b> three 40-minute retrieval sessions
          across three days beats one long read the night before. Do one subject
          per day on rotation, then full mixed review in the last 3 days.
        </div>
      </div>

      <div className="panel">
        <h3>Khmer + handwriting practice</h3>
        <p style={{ margin: 0, color: "var(--muted)", fontSize: 14 }}>
          On any subject page, hit <b>ភាសាខ្មែរ</b> in the sidebar to reveal
          Khmer explanations. Hit <b>Print / PDF</b> to export a print-ready copy
          (answers auto-revealed) for offline / handwriting practice.
        </p>
      </div>
    </div>
  );
}
