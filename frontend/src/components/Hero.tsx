import { useState } from 'react'
import profileImg from '../assets/profile.jpg'
import Reveal from './Reveal'
import { GitHubIcon, ArrowIcon, DownloadIcon } from './icons'

const CsPane = () => (
  <div className="code-pane active">
    <span className="ln"><span className="cm">{'// Developer.cs — targeting .NET 8'}</span></span>{'\n'}
    <span className="ln"><span className="kw">namespace</span> <span className="ty">Portfolio</span>;</span>{'\n'}
    <span className="ln"> </span>{'\n'}
    <span className="ln"><span className="kw">public sealed record</span> <span className="ty">Engineer</span>(</span>{'\n'}
    <span className="ln">    <span className="ty">string</span> <span className="pr">Name</span>,</span>{'\n'}
    <span className="ln">    <span className="ty">string</span> <span className="pr">Program</span>,</span>{'\n'}
    <span className="ln">    <span className="ty">string</span>[] <span className="pr">Focus</span>);</span>{'\n'}
    <span className="ln"> </span>{'\n'}
    <span className="ln"><span className="kw">var</span> joshua = <span className="kw">new</span> <span className="ty">Engineer</span>(</span>{'\n'}
    <span className="ln">    <span className="pr">Name</span>:    <span className="st">"Joshua Hoban"</span>,</span>{'\n'}
    <span className="ln">    <span className="pr">Program</span>: <span className="st">"B.S. Software Engineering"</span>,</span>{'\n'}
    <span className="ln">    <span className="pr">Focus</span>:   [<span className="st">"APIs"</span>, <span className="st">"Automation"</span>, <span className="st">"DevOps"</span>]);</span>{'\n'}
    <span className="ln"> </span>{'\n'}
    <span className="ln"><span className="ty">Console</span>.<span className="fn">WriteLine</span>(<span className="st">{'$"{joshua.Name} → shipping."'}</span>);</span>{'\n'}
    <span className="ln"><span className="cm">{'// > Joshua Hoban → shipping.'}</span> <span className="cursor-blink" /></span>
  </div>
)

const PsPane = () => (
  <div className="code-pane active">
    <span className="ln"><span className="cm"># profile.ps1 — automation roots</span></span>{'\n'}
    <span className="ln"><span className="kw">$me</span> = <span className="op">@{'{'}</span></span>{'\n'}
    <span className="ln">    <span className="pr">Role</span>  = <span className="st">"NOC Technician"</span></span>{'\n'}
    <span className="ln">    <span className="pr">Stack</span> = <span className="st">"PowerShell 7+"</span>, <span className="st">"Python"</span></span>{'\n'}
    <span className="ln">    <span className="pr">Goal</span>  = <span className="st">"Software Engineer / DevOps"</span></span>{'\n'}
    <span className="ln"><span className="op">{'}'}</span></span>{'\n'}
    <span className="ln"> </span>{'\n'}
    <span className="ln"><span className="fn">Write-Host</span> <span className="st">"Ready to build."</span> <span className="op">-Foreground</span> <span className="ty">Cyan</span></span>{'\n'}
    <span className="ln"><span className="cm"># &gt; Ready to build.</span> <span className="cursor-blink" /></span>
  </div>
)

const CodeCard = () => {
  const [tab, setTab] = useState<'cs' | 'ps'>('cs')
  return (
    <div className="code-card">
      <div className="code-top">
        <div className="lights">
          <i />
          <i />
          <i />
        </div>
        <div className="code-tabs" role="tablist">
          <button
            className="code-tab"
            role="tab"
            aria-selected={tab === 'cs'}
            onClick={() => setTab('cs')}
          >
            <span className="fdot" style={{ background: '#8a5cf6' }} />
            Developer.cs
          </button>
          <button
            className="code-tab"
            role="tab"
            aria-selected={tab === 'ps'}
            onClick={() => setTab('ps')}
          >
            <span className="fdot" style={{ background: '#5391d6' }} />
            profile.ps1
          </button>
        </div>
      </div>
      <div className="code-body">{tab === 'cs' ? <CsPane /> : <PsPane />}</div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="wrap hero-grid">
        <Reveal className="hero-copy">
          <span className="hero-eyebrow">
            <span className="dot" />
            NOC &middot; Automation &rarr; SWE / DevOps
          </span>
          <h1>
            Building backends and
            <br />
            automations that <span className="grad">actually ship.</span>
          </h1>
          <p className="hero-lede">
            I'm <strong>Joshua Hoban</strong> &mdash; a B.S. Software Engineering student at WGU on the{' '}
            <strong>C#/Java track</strong>. By day I keep enterprise infrastructure healthy as a NOC
            technician; nights and weekends I build <strong>.NET APIs</strong>, React frontends, Java Frameworks,
            and PowerShell automations that remove the work humans shouldn't have to do.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">
              <ArrowIcon />
              View Projects
            </a>
            <a
              className="btn btn-ghost"
              href="/Joshua_Hoban_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <DownloadIcon />
              Resume
            </a>
            <a
              className="btn btn-bare"
              href="https://github.com/MrHoban"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
              GitHub
            </a>
          </div>
          <div className="hero-meta">
            <div className="id-chip">
              <img src={profileImg} alt="Joshua Hoban" />
              <div>
                <div className="nm">Joshua Hoban</div>
                <div className="rl">// open to SWE internships</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <CodeCard />
        </Reveal>
      </div>
    </section>
  )
}
