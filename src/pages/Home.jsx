import { Link } from "react-router-dom";

const cards = [
  ["✦", "AI Automation", "Automate repetitive work and keep your team focused."],
  ["◈", "Smart Analytics", "Turn data into clear, actionable decisions."],
  ["⚡", "Collaboration", "Keep projects, people, and decisions aligned."],
  ["🔒", "Secure Workflows", "Protect important work with thoughtful controls."]
];

export default function Home() {
  return (
    <main>
      <section className="hero wrap" aria-labelledby="hero-title">
        <div>
          <label>AI-POWERED PRODUCTIVITY PLATFORM</label>

          <h1 id="hero-title">
            Work smarter.
            <br />
            <span>Grow faster.</span>
          </h1>

          <p>
            Nexora AI brings automation, insights, and collaboration into one
            elegant workspace built for modern teams.
          </p>

          <div className="row">
            <Link className="btn" to="/pricing">
              Start for free →
            </Link>

            <Link className="outline" to="/how-it-works">
              See how it works
            </Link>
          </div>

          <small>
            ✓ No credit card &nbsp; ✓ Setup in minutes &nbsp; ✓ Cancel anytime
          </small>
        </div>

        <div
          className="dash"
          role="img"
          aria-label="Nexora AI productivity dashboard showing automation, time saved and efficiency metrics"
        >
          <div className="dashbar">
            <span aria-hidden="true">● ● ●</span>
            <span>Nexora AI / Overview</span>
            <span aria-hidden="true">•••</span>
          </div>

          <div className="dashbody">
            <aside aria-label="Dashboard navigation">
              <strong>
                N<span>AI</span>
              </strong>

              <i>⌂ Overview</i>
              <i>✦ AI Tools</i>
              <i>◈ Analytics</i>
              <i>▣ Projects</i>
              <i>⚙ Settings</i>
            </aside>

            <article>
              <small>MONDAY, AUGUST 12</small>

              <h3>Good morning, team 👋</h3>

              <p>Here is your productivity overview.</p>

              <div className="metrics">
                <div>
                  <small>Automated</small>
                  <b>248</b>
                  <em>+18.4%</em>
                </div>

                <div>
                  <small>Time saved</small>
                  <b>42h</b>
                  <em>+12.7%</em>
                </div>

                <div>
                  <small>Efficiency</small>
                  <b>94%</b>
                  <em>+6.2%</em>
                </div>
              </div>

              <div
                className="chart"
                role="img"
                aria-label="Weekly productivity increased by 32.8 percent"
              >
                <header>
                  Weekly productivity <b>+32.8%</b>
                </header>

                <div className="bars" aria-hidden="true">
                  {[35, 52, 45, 68, 60, 82, 94].map((x, i) => (
                    <i key={i} style={{ height: `${x}%` }} />
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="trust" aria-label="Trusted companies">
        <span>Trusted by ambitious teams</span>
        <b>ORBIT</b>
        <b>VERTEX</b>
        <b>QUANTUM</b>
        <b>APEX</b>
      </section>

      <section className="section wrap" aria-labelledby="features-title">
        <Heading
          e="POWERFUL FEATURES"
          t="Everything you need to"
          s=" work smarter."
          d="A focused toolkit for teams that want less busywork and more meaningful progress."
        />

        <h2 id="features-title" className="sr-only">
          Nexora AI features
        </h2>

        <div className="grid">
          {cards.map((card) => (
            <div className="card" key={card[1]}>
              <i aria-hidden="true">{card[0]}</i>
              <h3>{card[1]}</h3>
              <p>{card[2]}</p>

              <Link to="/features">
                Explore feature →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="dark" aria-labelledby="modern-teams-title">
        <div className="wrap split">
          <div>
            <label>MADE FOR MODERN TEAMS</label>

            <h2 id="modern-teams-title">
              One workspace.
              <br />
              <span>Infinite possibilities.</span>
            </h2>

            <p>
              From automated workflows to real-time insights, Nexora helps your
              team turn ideas into measurable outcomes without adding complexity.
            </p>

            <Link to="/features" className="text">
              Explore the platform →
            </Link>
          </div>

          <div className="insight" aria-label="AI productivity insight">
            <b>
              AI INSIGHT <em>● LIVE</em>
            </b>

            <h3>
              Your team saved <span>42.6 hours</span> this week.
            </h3>

            <p>
              Automation handled 248 repetitive tasks while productivity
              increased by 32.8%.
            </p>

            <div className="progress" aria-hidden="true">
              <i />
            </div>

            <small>
              Efficiency score <b>94/100</b>
            </small>
          </div>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="process-title">
        <Heading
          e="SIMPLE PROCESS"
          t="From setup to"
          s=" impact."
          d="Three simple steps. One smarter way to work."
        />

        <h2 id="process-title" className="sr-only">
          How Nexora AI works
        </h2>

        <div className="steps">
          {[
            ["01", "Connect"],
            ["02", "Automate"],
            ["03", "Grow"]
          ].map((step) => (
            <div key={step[0]}>
              <small>{step[0]}</small>
              <h3>{step[1]}</h3>
              <p>
                Bring your workflow into Nexora and let intelligent automation
                do the heavy lifting.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta wrap" aria-labelledby="cta-title">
        <div>
          <label>READY WHEN YOU ARE</label>

          <h2 id="cta-title">
            Build your smarter
            <br />
            <span>workday today.</span>
          </h2>
        </div>

        <Link to="/pricing" className="btn">
          Get started free →
        </Link>
      </section>
    </main>
  );
}

function Heading({ e, t, s, d }) {
  return (
    <div className="heading">
      <label>{e}</label>
      <h2>
        {t}
        <span>{s}</span>
      </h2>
      <p>{d}</p>
    </div>
  );
}