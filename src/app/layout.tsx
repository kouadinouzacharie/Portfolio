import { Analytics } from '@vercel/analytics/next';
import Footer from '@/components/main/Footer'
import { Navbar } from '@/components/main/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Zacharie KOUADINOU - Backend Developer & Cybersecurity Analyst (Junior). | Cybersecurity, Backend Development, Tech Enthusiast ',
  description:
    '',
  keywords: [
    'backend developer portfolio',
    'cybersecurity analyst portfolio',
    'backend developer',
    'cybersecurity analyst',
    'Zacharie KOUADINOU',
    'Zacharie KOUADINOU portfolio',
    'portfolio website',
    'Security best practices',
    'vulnerability assessment',
    'penetration testing',
    'incident response',
    'network security',
    'application security',
  ],
  authors: [{ name: 'Zacharie KOUADINOU' }],
  creator: 'Zacharie KOUADINOU',
  publisher: 'Zacharie KOUADINOU',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://koudinouzacharieportfolio.vercel.app/',
    title: 'Zacharie KOUADINOU - Backend Developer & Cybersecurity Analyst (Junior) Portfolio',
    description: 'Experienced Backend Developer and Cybersecurity Analyst (Junior) specializing in secure application development and cybersecurity practices. View my portfolio showcasing my skills and projects.',
    siteName: 'Zacharie KOUADINOU Portfolio',
    images: [
      {
        url: '/zacharie-pic .jpg',
        width: 1200,
        height: 630,
        alt: 'Zacharie KOUADINOU - Backend Developer & Cybersecurity Analyst',
      },
    ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Zacharie KOUADINOU - DevOps & Cloud Engineer Portfolio',
  //   description: 'Experienced DevOps and Cloud Engineer specializing in AWS, Kubernetes, Docker, and CI/CD.',
  //   images: ['/zacharie-pic .jpg'],
  //   creator: '@hasanashab',
  // },
  alternates: {
    canonical: 'https://koudinouzacharieportfolio.vercel.app/',
  },
  verification: {
    google: 'wUvigUYIHyBvrQMmeBFTg5ixr4HDAdPcPPlyPJSzmc0',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Zacharie KOUADINOU',
    jobTitle: 'Backend Developer & Cybersecurity Analyst (Junior)',
    description: 'Experienced Backend Developer and Cybersecurity Analyst (Junior) specializing in secure application development and cybersecurity practices',
    url: 'https://koudinouzacharieportfolio.vercel.app/',
    image: 'https://koudinouzacharieportfolio.vercel.app//profile-pic.jpg',
    sameAs: [
      'https://github.com/kouadinouzacharie',
      'https://linkedin.com/in/kouadinou-zacharie',
    ],
    knowsAbout: [
      'DevOps',
      'Cloud Engineering', 
      'AWS',
      'Kubernetes',
      'Docker',
      'CI/CD',
      'Infrastructure as Code',
      'Terraform',
      'Ansible',
      'Jenkins',
      'Monitoring',
      'Automation'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Elevate Labs'
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://koudinouzacharieportfolio.vercel.app/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e40af" media="(prefers-color-scheme: dark)" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main role="main">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
