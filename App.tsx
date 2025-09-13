import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

// Demo image placeholders (replace with actual image paths later)
const demoDashboardImg = "/dashboard.png";
const demoJournalImg = "/journal.png";
const demoGraphImg = "/graph.jpeg";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <nav className="flex justify-between items-center p-6 bg-white/30 backdrop-blur-md fixed top-0 w-full z-50">
      <div className="flex items-center">
        <img src="/logo.png" alt="SoulScript Logo" className="h-20 w-20 mr-2" />
        <span className="text-2xl font-bold text-purple-700">SoulScript</span>
      </div>
      <ul className="flex gap-6 font-medium text-gray-800 items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/journal">Journal</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar & Graph</Link>
        </li>
        <li>
          <button
            onClick={() => setShowLogin(!showLogin)}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm"
          >
            Login
          </button>
        </li>
        <li>
          <button
            onClick={() => setShowSignup(!showSignup)}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm"
          >
            Signup
          </button>
        </li>
      </ul>

      {/* Login Modal */}
      {showLogin && (
        <div className="absolute top-20 right-6 bg-white shadow-lg p-6 rounded-xl w-72">
          <h3 className="text-lg font-semibold mb-4">Login</h3>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-2 border rounded"
          />
          <button className="w-full py-2 bg-purple-600 text-white rounded">
            Login
          </button>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="absolute top-20 right-6 bg-white shadow-lg p-6 rounded-xl w-72">
          <h3 className="text-lg font-semibold mb-4">Signup</h3>
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-3 p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-2 border rounded"
          />
          <button className="w-full py-2 bg-teal-600 text-white rounded">
            Signup
          </button>
        </div>
      )}
    </nav>
  );
}

function HomePage() {
  return (
    <div className="pt-24 bg-gradient-to-r from-[#C7CEEA] via-[#A7FFEB] to-[#FFB7B2] min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-20">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
            Track your feelings.
            <br />
            Discover patterns.
            <br />
            Heal yourself.
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Your private AI-powered journaling companion.
          </p>
          <button className="px-6 py-3 text-lg rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90">
            Start Journaling
          </button>
        </div>
        <img
          src="/image.jpg"
          alt="Hero Illustration"
          className="w-80 rounded-2xl shadow-lg"
        />
      </section>

      {/* Mission / Vision / Values */}
      <section className="grid md:grid-cols-3 gap-8 px-6 py-16 max-w-6xl mx-auto">
        {[
          {
            title: "Our Mission",
            text: "Empower through AI-driven journaling & reflection.",
          },
          {
            title: "Our Vision",
            text: "A stigma-free world with empathy & privacy.",
          },
          {
            title: "Our Values",
            text: "Empathy, Privacy, Innovation, Accessibility, Growth.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl shadow-lg p-6 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100"
          >
            <h2 className="text-2xl font-semibold mb-2 text-purple-700">
              {item.title}
            </h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
          Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "AI-powered Sentiment Analysis",
            "Mood Calendar & Graph Visualization",
            "Personalized Prompts",
            "Privacy & Encryption",
            "Motivational Streaks & Badges",
            "Aura Visualization",
          ].map((f, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-lg bg-white p-6 text-center font-medium"
            >
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* Previews */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-50 to-blue-50">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">
          Dashboard Preview
        </h2>
        <img
          src={demoDashboardImg}
          alt="Dashboard Demo"
          className="max-w-4xl mx-auto rounded-xl shadow-lg"
        />
      </section>
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">
          Journal Preview
        </h2>
        <img
          src={demoJournalImg}
          alt="Journal Demo"
          className="max-w-3xl mx-auto rounded-xl shadow-lg"
        />
      </section>
      <section className="py-16 px-6 bg-gradient-to-r from-pink-50 to-teal-50">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">
          Calendar & Graph Preview
        </h2>
        <img
          src={demoGraphImg}
          alt="Graph Demo"
          className="max-w-4xl mx-auto rounded-xl shadow-lg"
        />
      </section>
    </div>
  );
} /*
function DashboardPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-100 text-gray-900 px-6">
      <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">
        Your Dashboard
      </h1>

      
      <div className="flex justify-center mb-12">
        <div className="relative h-40 w-40 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center shadow-lg">
          <span className="text-3xl font-bold text-white">68%</span>
        </div>
      </div>

      
      <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
        <div className="p-6 rounded-2xl bg-white text-center shadow hover:shadow-lg transition-shadow">
          <p className="text-lg font-medium text-gray-700">
            Most Frequent Mood
          </p>
          <h2 className="text-2xl font-bold mt-2">😊 Happy</h2>
        </div>
        <div className="p-6 rounded-2xl bg-white text-center shadow hover:shadow-lg transition-shadow">
          <p className="text-lg font-medium text-gray-700">Positive Streak</p>
          <h2 className="text-2xl font-bold mt-2">5 Days</h2>
        </div>
        <div className="p-6 rounded-2xl bg-white text-center shadow hover:shadow-lg transition-shadow">
          <p className="text-lg font-medium text-gray-700">Entries This Week</p>
          <h2 className="text-2xl font-bold mt-2">4</h2>
        </div>
      </div>

      
      <div className="bg-white p-8 rounded-2xl shadow mb-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Your Badges
        </h2>
        <div className="flex gap-6 flex-wrap justify-center">
          {[
            { emoji: "🌱", from: "green-300", to: "green-500" },
            { emoji: "🔥", from: "red-300", to: "red-500" },
            { emoji: "🌟", from: "yellow-300", to: "yellow-500" },
            { emoji: "💎", from: "blue-300", to: "blue-500" },
            { emoji: "🕊", from: "purple-300", to: "purple-500" },
          ].map((badge, idx) => (
            <div
              key={idx}
              className={`h-20 w-20 rounded-full flex items-center justify-center bg-gradient-to-br from-${badge.from} to-${badge.to} shadow-lg text-2xl`}
            >
              {badge.emoji}
            </div>
          ))}
        </div>
      </div>

      
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            🎵 Music Recommendation
          </h3>
          <p>“Calming Focus” playlist to relax your mind.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            🎮 Quick Relax Game
          </h3>
          <p>Try our doodle pad or breathing animation for 2 mins.</p>
        </div>
      </div>
    </div>
  );
}*/
function DashboardPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 text-gray-800 px-6">
      <h1 className="text-3xl font-bold mb-10 text-center text-gray-900">
        Your Dashboard
      </h1>

      {/* Aura Meter */}
      <div className="flex justify-center mb-12">
        <div className="relative h-40 w-40 rounded-full bg-gradient-to-r from-purple-300 via-teal-200 to-blue-200 flex items-center justify-center shadow-lg">
          <span className="text-3xl font-bold text-gray-900">68%</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-100 to-purple-200 text-center shadow-sm">
          <p className="text-gray-700 font-medium">Most Frequent Mood</p>
          <h2 className="text-2xl font-bold mt-2">😊 Happy</h2>
        </div>
        <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-100 to-teal-200 text-center shadow-sm">
          <p className="text-gray-700 font-medium">Positive Streak</p>
          <h2 className="text-2xl font-bold mt-2">5 Days</h2>
        </div>
        <div className="p-6 rounded-2xl bg-gradient-to-r from-pink-100 to-pink-200 text-center shadow-sm">
          <p className="text-gray-700 font-medium">Entries This Week</p>
          <h2 className="text-2xl font-bold mt-2">4</h2>
        </div>
      </div>

      {/* Badges */}
      <div className="bg-gray-100 p-8 rounded-2xl shadow-sm mb-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
          Your Badges
        </h2>
        <div className="flex gap-6 flex-wrap justify-center">
          <div className="h-20 w-20 rounded-full flex items-center justify-center bg-gradient-to-r from-green-200 to-green-300 shadow-sm text-lg font-bold text-gray-900">
            🌱
          </div>
          <div className="h-20 w-20 rounded-full flex items-center justify-center bg-gradient-to-r from-red-200 to-red-300 shadow-sm text-lg font-bold text-gray-900">
            🔥
          </div>
          <div className="h-20 w-20 rounded-full flex items-center justify-center bg-gradient-to-r from-yellow-200 to-yellow-300 shadow-sm text-lg font-bold text-gray-900">
            🌟
          </div>
          <div className="h-20 w-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-300 shadow-sm text-lg font-bold text-gray-900">
            💎
          </div>
          <div className="h-20 w-20 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-200 to-purple-300 shadow-sm text-lg font-bold text-gray-900">
            🕊
          </div>
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-100 to-purple-200 shadow-sm text-center">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            🎵 Music Recommendation
          </h3>
          <p>“Calming Focus” playlist to relax your mind.</p>
          <button className="mt-4 px-6 py-2 rounded-full bg-white/90 text-gray-900 font-medium hover:bg-white transition">
            Play Playlist
          </button>
        </div>
        <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-100 to-teal-200 shadow-sm text-center">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            🎮 Quick Relax Game
          </h3>
          <p>Try our doodle pad or breathing animation for 2 mins.</p>
          <button className="mt-4 px-6 py-2 rounded-full bg-white/90 text-gray-900 font-medium hover:bg-white transition">
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}
function JournalPage() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-r from-[#C7CEEA] via-[#FFB7B2] to-[#A7FFEB] px-6 flex justify-center">
      <div className="max-w-3xl w-full bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-10">
        <h1 className="text-4xl font-bold mb-6 text-purple-700 text-center">
          Journal Your Thoughts ✨
        </h1>

        {/* Journal Text Area */}
        <textarea
          className="w-full h-64 p-6 rounded-2xl shadow-inner border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none resize-none text-lg"
          placeholder="Write about your day, your feelings, or anything on your mind..."
        />

        {/* Mood Selector */}
        <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
          {["😀 Happy", "😐 Neutral", "😔 Sad", "😡 Angry", "😨 Anxious"].map(
            (mood, i) => (
              <button
                key={i}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 shadow text-lg"
              >
                {mood}
              </button>
            )
          )}
        </div>

        {/* Save Button */}
        <div className="flex justify-center mt-8">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold shadow-lg hover:scale-105 transition-transform">
            Save Entry
          </button>
        </div>

        {/* Aura Response */}
        <p className="mt-6 text-center text-purple-800 font-medium">
          🌌 Your aura will glow brighter or dimmer depending on your mood.
        </p>

        {/* AI Suggestion Box */}
        <div className="mt-8 bg-gradient-to-r from-teal-100 to-blue-100 rounded-2xl shadow-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-teal-700 mb-2">
            AI Suggestion 💡
          </h3>
          <p className="text-gray-700">
            “Try writing 3 things you’re grateful for today to uplift your
            mood.”
          </p>
        </div>
      </div>
    </div>
  );
}
const trendGraphImg = "/trend-graph.png"; // keep your image paths
const pieGraphImg = "/pie-graph.png";

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center">
      <p className="text-gray-500 font-medium">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800 mt-2">{value}</h3>
    </div>
  );
}

function ChartPlaceholder({ title, image }: { title: string; image: string }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover rounded-lg shadow-sm"
      />
    </div>
  );
}
function CalendarGraphPage() {
  const month = "September 2025";
  const daysInMonth = 30;
  const entryDays = new Set([2, 5, 9, 12, 18, 21, 25, 28]);
  const moodByDay: Record<number, string> = {
    2: "positive",
    5: "neutral",
    9: "negative",
    12: "positive",
    18: "neutral",
    21: "positive",
    25: "negative",
    28: "positive",
  };

  const moodColor = (mood?: string) => {
    if (mood === "positive") return "bg-emerald-200";
    if (mood === "neutral") return "bg-yellow-200";
    if (mood === "negative") return "bg-rose-200";
    return "bg-gray-100";
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Calendar & Insights
          </h1>
          <div className="text-sm text-gray-500">
            Month: <span className="font-medium">{month}</span>
          </div>
        </header>

        {/* Streaks */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <StatCard title="Current Streak" value="7 days" />
          <StatCard title="Positive Days (30d)" value="12" />
          <StatCard title="Entries (30d)" value="30" />
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            Mood Calendar — {month}
          </h3>

          <div className="grid grid-cols-7 gap-3 text-center mb-3 text-sm text-gray-500">
            {["M", "T", "W", "T", "F", "S", "S"].map((d) => (
              <div key={d} className="font-medium">
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-3">
            {Array.from({ length: daysInMonth }).map((_, idx) => {
              const day = idx + 1;
              const hasEntry = entryDays.has(day);
              const colorClass = hasEntry
                ? moodColor(moodByDay[day])
                : "bg-gray-100";
              return (
                <div key={day} className="flex flex-col items-center">
                  <div
                    className={`h-12 w-12 flex items-center justify-center rounded-full shadow-sm ${colorClass} text-gray-900 font-medium transition duration-300 hover:scale-105`}
                  >
                    {day}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 text-sm text-gray-500">
            Only days with entries are highlighted for clarity.
          </div>
        </div>

        {/* Graphs */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-2xl p-4 bg-white shadow-md">
            <h4 className="font-semibold mb-3 text-gray-900">Mood Trend</h4>
            <ChartPlaceholder
              title="Mood trend last 30 days"
              image={trendGraphImg}
            />
          </div>

          <div className="rounded-2xl p-4 bg-white shadow-md">
            <h4 className="font-semibold mb-3 text-gray-900">
              Mood Distribution
            </h4>
            <ChartPlaceholder title="Distribution" image={pieGraphImg} />
          </div>
        </div>

        {/* Insights */}
        <div className="rounded-2xl p-6 bg-gray-100 shadow-md">
          <h4 className="font-semibold mb-3 text-gray-900">AI Insights</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded-lg shadow-sm text-center">
              📉 Most negative day: <strong>Monday</strong>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm text-center">
              💤 Mood improves with <strong>7+ hrs sleep</strong>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm text-center">
              👥 Positive entries mention <strong>friends</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-gray-200 py-8 px-6 text-center">
      <p>© 2025 SoulScript. All rights reserved.</p>
      <p className="mt-2">
        Privacy Protected | Mental Health Resources Available
      </p>
      <p className="mt-2">Contact: support@soulscript.ai</p>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/calendar" element={<CalendarGraphPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
