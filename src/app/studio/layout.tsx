import "../../styles/globals.css";

export const metadata = {
  title: 'Malistores Admin',
  description: 'Only for admin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
