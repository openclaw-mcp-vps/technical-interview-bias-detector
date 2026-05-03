export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Hiring Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect Unconscious Bias in<br />
          <span className="text-[#58a6ff]">Technical Interviews</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Paste any interview question or feedback and get an instant bias score with inclusive alternatives — covering gender, cultural, and educational bias patterns.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Demo preview */}
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#6e7681] uppercase tracking-widest mb-3">Example Analysis</p>
          <p className="text-sm text-[#c9d1d9] mb-4 italic">&ldquo;Where did you go to school? We usually hire from top-tier universities.&rdquo;</p>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold bg-red-900/40 text-red-400 border border-red-800 px-2 py-0.5 rounded">Bias Score: 82/100</span>
            <span className="text-xs text-[#6e7681]">Educational bias detected</span>
          </div>
          <p className="text-xs text-[#8b949e] mb-1 font-semibold">Suggested alternative:</p>
          <p className="text-sm text-[#58a6ff] italic">&ldquo;Can you walk me through a challenging technical problem you solved and how you approached it?&rdquo;</p>
        </div>
      </section>

      {/* Features strip */}
      <section className="border-t border-[#21262d] bg-[#0d1117]">
        <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: "🔍", title: "Real-Time Analysis", desc: "Instant bias scoring as you type or paste questions" },
            { icon: "💡", title: "Inclusive Alternatives", desc: "AI-generated rewrites that preserve intent, remove bias" },
            { icon: "📊", title: "Team Dashboard", desc: "Track bias trends across your entire hiring pipeline" }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] text-sm mb-8">One plan. Everything included.</p>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Team</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#6e7681] text-sm mb-6">per month · billed monthly</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited question analyses",
              "Gender, cultural & educational bias detection",
              "AI-powered inclusive alternatives",
              "Team dashboard & analytics",
              "Export reports as PDF/CSV",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What types of bias does it detect?",
              a: "The engine detects gender bias (gendered language, assumptions), cultural bias (region-specific references, cultural assumptions), and educational bias (degree requirements, prestige signaling) using NLP pattern matching and AI classification."
            },
            {
              q: "How does the AI generate alternatives?",
              a: "We use OpenAI's API to analyze the intent of each question and rewrite it using inclusive language frameworks, removing bias triggers while preserving the technical signal you're looking for."
            },
            {
              q: "Is my interview data kept private?",
              a: "Yes. Questions are processed in real-time and never stored permanently. We do not use your data to train models. All processing is encrypted in transit and at rest."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Interview Bias Detector. Built for fair hiring.
      </footer>
    </main>
  )
}
