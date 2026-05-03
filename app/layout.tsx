import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Interview Bias Detector — Fair Hiring for Tech Teams',
  description: 'Detect unconscious bias in technical interview questions and feedback. AI-powered analysis for inclusive hiring.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b44128f3-1b90-47c9-9944-c5e900c347a3"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
