"use client";

import { useEffect, useState } from "react";
import { ArrowDownRight, Terminal, Zap, ChevronDown, Shield, Hammer, Crown, Skull } from "lucide-react";

const stats = [["01","COMPETITION","2 ROUNDS"],["02","DURATION","03 HOURS"],["03","LANGUAGES","ANY"],["04","PLATFORM","CUSTOM"]];
const faqs = [["Who can participate?","Event eligibility details will be announced by Team Parsec."],["How many rounds are there?","Bithunt consists of two competitive rounds."],["How long is the competition?","The competition runs for three hours."],["Which programming languages can I use?","Any programming language supported by the custom platform can be used."]];

export default function Home(){
 const [open,setOpen]=useState<number|null>(null); const [boot,setBoot]=useState(true); const [progress,setProgress]=useState(0);
 useEffect(()=>{const start=performance.now(); const duration=5200; let raf:number; const tick=(now:number)=>{const p=Math.min(100,((now-start)/duration)*100);setProgress(Math.floor(p));if(p<100)raf=requestAnimationFrame(tick);};raf=requestAnimationFrame(tick);const t=setTimeout(()=>setBoot(false),5600);return()=>{cancelAnimationFrame(raf);clearTimeout(t)}},[]);
 return <main className={boot?"site booting":"site"}>
 <div className={boot?"intro-overlay":"intro-overlay intro-complete"} aria-hidden="true">
   <div className="intro-vignette"/><div className="intro-frame">
     <div className="intro-meta"><span>PARSEC 7.0 // DOOMSDAY</span><span>SECURE CHANNEL // 07</span></div>
     <div className="intro-side left"><span>EARTH-616</span><i/><span>PROTOCOL: DOOMSDAY</span></div>
     <div className="intro-side right"><span>THREAT LEVEL: OMEGA</span><i/><span>CODEX: BITHUNT</span></div>
     <div className="intro-center">
       <p className="intro-system">[ SYSTEM INITIALIZING ]</p>
       <p className="intro-kicker">THE LAST LINE OF DEFENCE IS LOGIC.</p>
       <h2>PARSEC <span>7.0</span></h2>
       <p className="intro-doomsday">DOOMSDAY PROTOCOL</p>
       <div className="intro-rule"><span/><i/><span/></div>
       <div className="doom-sigil"><Skull size={23}/></div>
       <h1>BITHUNT</h1>
       <p className="intro-initialized">EVENT CORE <b>ONLINE</b></p>
       <p className="intro-status">THE HUNT AWAITS.</p>
     </div>
     <div className="intro-progress"><span style={{transform:`scaleX(${progress/100})`}}/><b>ACCESSING DOOMSDAY EVENT CORE</b><em>{progress}%</em></div>
     <div className="intro-footer"><span>AUTHORIZED BY TEAM PARSEC</span><span>STAY SHARP // STAY ALIVE // SOLVE</span></div>
   </div>
 </div>
 <div className="scanlines"/><div className="noise"/>
 <header className="topbar"><a className="brand" href="#top"><span>BITHUNT</span><i>//</i><small>PARSEC 7.0</small></a><nav><a href="#about">MISSION</a><a href="#hunt">PROTOCOL</a><a href="#rules">RULES</a><a href="#faq">FAQ</a></nav><a className="mini-cta" href="#register">ENTER <ArrowDownRight size={15}/></a></header>
 <section id="top" className="hero"><div className="hero-grid"/><div className="hero-dossier"><span>CLASSIFIED // FILE 007</span><b>DOOMSDAY EVENT NETWORK</b></div><div className="hero-copy"><div className="eyebrow"><span className="live-dot"/> SYSTEM STATUS: <b>AWAITING HUNTERS</b></div><p className="kicker">TEAM PARSEC // IIT DHARWAD // PARSEC 7.0</p><h1><span>BIT</span><em>HUNT</em></h1><div className="hero-line"><span>01</span><div/><span>CODE / THINK / HUNT</span></div><p className="hero-text">A competitive programming challenge built to test <strong>problem-solving, data structures and algorithms.</strong></p><div className="hero-actions"><a className="cyber-button primary" href="#register">ENTER THE HUNT <ArrowDownRight size={18}/></a><a className="cyber-button" href="#about">MISSION BRIEF</a></div></div><div className="terminal-card"><div className="terminal-head"><span>doom@bithunt:~</span><span>● ● ●</span></div><div className="terminal-body"><p><b>$</b> wake --doomsday</p><p className="ok">[OK] DOOMSDAY PROTOCOL ACTIVE</p><p><b>$</b> identify --threat</p><p>threat: <span>OMEGA</span></p><p>response: <span>CODE</span></p><p><b>$</b> scan --competition</p><p>rounds: <span>02</span></p><p>duration: <span>03h</span></p><p>languages: <span>ANY</span></p><p><b>$</b> status</p><p className="warning">REGISTRATION: <span>TBA</span></p><div className="cursor">█</div></div></div><div className="scroll-hint"><span>SCROLL TO HUNT</span><ArrowDownRight size={16}/></div></section>
 <section id="about" className="section"><div className="section-index">01 / MISSION BRIEF</div><div className="section-heading"><p>THE OBJECTIVE</p><h2>THINK DIFFERENT.<br/><span>CODE SMARTER.</span></h2></div><div className="about-grid"><p className="lead">When the system fails, <span>logic</span> becomes the weapon. Bithunt challenges your algorithmic thinking, data structures, and ability to solve under pressure.</p><div className="quote-box"><Shield size={18}/><p>&gt; THE WORLD DOESN'T NEED<br/>&gt; ANOTHER HERO.<br/>&gt; IT NEEDS A SOLUTION.</p></div></div></section>
 <section className="section faction"><div className="section-index">02 / THE DOOMSDAY FILE</div><div className="faction-grid"><article><Crown/><span>THE STRATEGIST</span><h3>VICTOR<br/>VON DOOM</h3><p>Every system has a weakness. Find it before it finds you.</p></article><article><Shield/><span>THE SENTINEL</span><h3>THE<br/>UNBREAKABLE</h3><p>Discipline. Precision. One problem at a time.</p></article><article><Hammer/><span>THE THUNDER</span><h3>POWER<br/>MEETS LOGIC</h3><p>Brute force gets you started. Smart algorithms finish the job.</p></article></div></section>
 <section id="hunt" className="section hunt"><div className="section-index">03 / THE HUNT</div><div className="section-heading"><p>COMPETITION PROTOCOL</p><h2>THE HUNT<br/><span>BEGINS HERE.</span></h2></div><div className="stat-grid">{stats.map(([n,label,value])=><div className="stat" key={n}><small>{n}</small><p>{label}</p><strong>{value}</strong><Zap size={15}/></div>)}</div><div className="rounds"><article><span>ROUND 01</span><h3>THE SEARCH</h3><p>Enter the arena. Decode the problems. Build the fastest path to a solution.</p></article><div className="round-arrow">→</div><article><span>ROUND 02</span><h3>THE CONQUEST</h3><p>Push your limits, optimize your approach, and climb the final ranking.</p></article></div></section>
 <section id="rules" className="section rules"><div className="section-index">04 / RULES</div><div className="section-heading"><p>MISSION PARAMETERS</p><h2>KNOW THE<br/><span>RULES.</span></h2></div><div className="rule-grid">{["Problem-solving is the mission.","Any programming language.","Maximum team size: 4.","Competition duration: 3 hours."].map((x,i)=><div className="rule" key={x}><span>0{i+1}</span><p>{x}</p></div>)}</div></section>
 <section id="faq" className="section faq"><div className="section-index">05 / FAQ</div><div className="faq-list">{faqs.map(([q,a],i)=><button className={"faq-item "+(open===i?"open":"")} key={q} onClick={()=>setOpen(open===i?null:i)}><span>0{i+1}</span><strong>{q}</strong><ChevronDown size={18}/><p>{a}</p></button>)}</div></section>
 <section id="register" className="register"><div className="register-bg">DOOM</div><p>FINAL TRANSMISSION // REGISTRATION</p><h2>READY TO<br/><span>HUNT?</span></h2><a className="cyber-button primary big" href="#top">REGISTRATION LINK — TBA <ArrowDownRight size={20}/></a><small>EVENT DATE: TO BE ANNOUNCED · PRIZES: TO BE ANNOUNCED</small></section>
 <footer><div><b>BITHUNT</b><span>// PARSEC 7.0 · TEAM PARSEC · IIT DHARWAD</span></div><div>CONTACT: 7666804195</div><div>© 2026 PARSEC</div></footer>
 </main>;
}
