import React from 'react';
import { Link } from 'react-router-dom';
import './Firstmile.css';

const Firstmile = () => {
  return (
    <>
      <nav>
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>first<span>mile</span></Link>
        <div className="nav-right">
          <Link to="/blog">blog</Link>
          <a href="#about">about</a>
          <a href="#what">what you get</a>
          <a href="#apply" className="nav-apply">apply now</a>
        </div>
      </nav>

      <section className="hero" style={{ maxWidth: '100%', paddingTop: '80px' }}>
        <div className="hero-bg"></div>
        <div className="hero-tag">Kanpur, Uttar Pradesh &nbsp;&nbsp; Pilot 2025</div>
        <h1 className="hero-headline">
          The first bet<br />on you. <em>Before</em><br />you're obvious.
        </h1>
        <p className="hero-sub">
          A program for 5 young builders in Kanpur. Class 11, 12, and first two years of college.
          No pitch competitions. No hackathon trophies. Just someone actually backing you early.
        </p>
        <div className="hero-actions">
          <a href="#apply" className="btn-primary">Apply — Pilot 2025</a>
          <a href="#about" className="btn-ghost">What is this?</a>
        </div>
        <div className="hero-scroll">scroll to read</div>
      </section>

      <div className="ticker">
        <div className="ticker-inner">
          <b>5 builders selected</b>
          <span>//</span>
          <b>Kanpur</b>
          <span>//</span>
          <b>Class 11 to 2nd year college</b>
          <span>//</span>
          <b>Pilot 2025</b>
          <span>//</span>
          <b>No equity. No BS.</b>
          <span>//</span>
          <b>5 builders selected</b>
          <span>//</span>
          <b>Kanpur</b>
          <span>//</span>
          <b>Class 11 to 2nd year college</b>
          <span>//</span>
          <b>Pilot 2025</b>
          <span>//</span>
          <b>No equity. No BS.</b>
          <span>//</span>
          <b>5 builders selected</b>
          <span>//</span>
          <b>Kanpur</b>
          <span>//</span>
          <b>Class 11 to 2nd year college</b>
          <span>//</span>
          <b>Pilot 2025</b>
          <span>//</span>
          <b>No equity. No BS.</b>
          <span>//</span>
        </div>
      </div>

      <section id="about">
        <div className="about-grid">
          <div className="about-left">
            <div className="section-label">// what is firstmile</div>
            <h2>Not a hackathon.<br />Not a <em>workshop.</em><br />Something rarer.</h2>
            <p>Every serious builder I know had one moment. Someone believed in them before they were ready. Before they had a product. Before they had proof. That one person changed everything.</p>
            <p>Firstmile is that moment. For 5 young builders in Kanpur. We find you, back you, and stay with you through the hardest part. The first mile.</p>
            <p>We are not taking equity. We are not charging you. We are not running you through a curriculum. We are just going to help you build the thing you're already thinking about.</p>
          </div>
          <div className="about-right">
            <div className="stat-block">
              <div className="stat-num">5</div>
              <div className="stat-label">builders selected in the pilot</div>
            </div>
            <div className="stat-block">
              <div className="stat-num">0</div>
              <div className="stat-label">equity taken. ever.</div>
            </div>
            <div className="stat-block">
              <div className="stat-num">8</div>
              <div className="stat-label">weeks of actual support</div>
            </div>
            <div className="stat-block">
              <div className="stat-num">1</div>
              <div className="stat-label">city. kanpur. for now.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="what" style={{ paddingTop: 0 }}>
        <div className="section-label">// what you actually get</div>
        <h2 className="what-headline">Not vibes.<br /><em>Actual things.</em></h2>
        <div className="what-grid">
          <div className="what-card">
            <div className="what-num">01 //</div>
            <h3>Someone in your corner</h3>
            <p>A real person you can text when you're stuck. Not a mentor who shows up once a month. Someone who actually knows what you're building and asks hard questions.</p>
          </div>
          <div className="what-card">
            <div className="what-num">02 //</div>
            <h3>Small grant</h3>
            <p>Enough to buy what you actually need. A domain. A SaaS tool. Raw materials. No strings, no pitch deck required. We just need to know what it's for.</p>
          </div>
          <div className="what-card">
            <div className="what-num">03 //</div>
            <h3>Real introductions</h3>
            <p>Not a "connect on LinkedIn." Actual warm intros to founders, operators, and people who can open doors for your specific project. No cold outreach needed.</p>
          </div>
          <div className="what-card">
            <div className="what-num">04 //</div>
            <h3>Help building in public</h3>
            <p>You learn to talk about what you're building. On Twitter. On LinkedIn. We help you do this without it feeling cringe. This is how you get noticed before you're ready.</p>
          </div>
          <div className="what-card">
            <div className="what-num">05 //</div>
            <h3>Weekly check-ins</h3>
            <p>No 50-slide decks. Just honest conversations about what you did, what you didn't do, and what's actually in the way. Accountability without the pressure.</p>
          </div>
          <div className="what-card">
            <div className="what-num">06 //</div>
            <h3>You stay in Kanpur</h3>
            <p>We are not asking you to relocate to Bangalore. You build from here. That's the point. If the ecosystem won't come to you, you build it yourself.</p>
          </div>
        </div>
      </section>

      <div className="who-section">
        <div className="who-inner">
          <div className="section-label">// who this is for</div>
          <h2 className="who-headline">You are already<br />building <em>something.</em></h2>
          <div className="who-list">
            <div className="who-item">
              <div className="who-check">+</div>
              <p><strong>Class 11 or 12 student</strong>You have an idea and you can't stop thinking about it. Board exams are happening but so is this.</p>
            </div>
            <div className="who-item">
              <div className="who-check">+</div>
              <p><strong>1st or 2nd year college</strong>You got to HBTU, PSIT, or wherever and realized this is not what you thought. You want to build something.</p>
            </div>
            <div className="who-item">
              <div className="who-check">+</div>
              <p><strong>Already started</strong>A project. A side hustle. A GitHub repo. Something that proves you don't just talk about building.</p>
            </div>
            <div className="who-item">
              <div className="who-check">+</div>
              <p><strong>High agency</strong>You don't wait for permission. You figure things out. You are not looking for someone to hand you a roadmap.</p>
            </div>
            <div className="who-item">
              <div className="who-check">+</div>
              <p><strong>Kanpur based</strong>You are here. You want to build from here. You are not waiting until you can "move to Bangalore."</p>
            </div>
            <div className="who-item">
              <div className="who-check">+</div>
              <p><strong>Okay with being uncomfortable</strong>We will ask you hard questions. We will challenge your assumptions. That's what makes this useful.</p>
            </div>
          </div>
          <div className="notfor">
            <div className="notfor-label">// not for you if</div>
            <p>You are looking for a certificate. You want someone to validate your idea without doing the work. You're applying because your parents think it looks good on a resume. We can tell. Please don't waste our time or yours.</p>
          </div>
        </div>
      </div>

      <div className="from-section">
        <div className="from-inner">
          <div className="section-label">// from vanshika, founder</div>
          <blockquote>
            "I watched the Localhost video like everyone else. And then I looked around and thought: who is doing this for the kid in Kanpur? The one who can't move to Bangalore. The one nobody's looking at yet. I don't have millions to give. But I have time, I have a network, and I genuinely give a damn. That felt like enough to start."
          </blockquote>
          <div className="from-name">Vanshika &nbsp;//&nbsp; Kanpur &nbsp;//&nbsp; Freelancer, organic distribution &nbsp;//&nbsp; Building this in public</div>
        </div>
      </div>

      <section id="apply" className="apply-section" style={{ maxWidth: '100%' }}>
        <div className="apply-bg"></div>
        <div className="apply-inner">
          <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>// applications open</div>
          <h2 className="apply-headline">5 spots.<br /><em>Are you one</em><br />of them?</h2>
          <p className="apply-sub">Takes about 15 minutes. We read every single one.</p>
          <a href="#" className="btn-primary" style={{ fontSize: '0.85rem', padding: '1rem 2.5rem' }}>Apply for Firstmile Pilot</a>
          <div className="apply-note">Kanpur only &nbsp;&nbsp; Class 11 to 2nd year college &nbsp;&nbsp; No prior experience required &nbsp;&nbsp; Rolling applications</div>
        </div>
      </section>

      <footer>
        <div className="footer-logo">first<span>mile</span></div>
        <div className="footer-right">Kanpur, UP &nbsp;&nbsp; Pilot 2025 &nbsp;&nbsp; Built by Vanshika</div>
      </footer>
    </>
  );
};

export default Firstmile;
