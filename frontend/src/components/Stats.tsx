import Reveal from './Reveal'

const stats = [
  { value: '6', unit: '+', label: 'Years in IT' },
  { value: '4', unit: '', label: 'Years Programming' },
  { value: '3', unit: '', label: 'Certifications' },
  { value: 'B.S.', unit: '', label: 'SWE · C#/Java Track' },
]

export default function Stats() {
  return (
    <section className="section-sm">
      <div className="wrap">
        <Reveal className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="v">
                {s.value}
                {s.unit && <span className="u">{s.unit}</span>}
              </div>
              <div className="l">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
