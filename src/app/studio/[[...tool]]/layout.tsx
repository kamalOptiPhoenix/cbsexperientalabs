export const metadata = { title: 'CBSExperientaLabs Studio' }

// No <html> or <body> here — root layout handles that.
// SiteLayout detects /studio and strips Navbar + Footer automatically.
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
