// import { BlogsSection } from '@/components/main/Blogs'
import ContactUs from '@/components/main/ContactUs'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import ResumeSection from '@/components/main/Resume'
import Skills from '@/components/main/Skills'
import Timeline from '@/components/main/Timeline'
import { Toaster } from 'react-hot-toast'
import { Metadata } from 'next'
import CertificationsSection from '@/components/main/Certifications'
import InteractiveWrapper from '@/components/main/InteractiveWrapper'

export const metadata: Metadata = {
  title: 'Zacharie KOUADINOU - Backend Developer & Cybersecurity Analyst (Junior)',
  description: 'Welcome to my professional portfolio. I am a Backend Developer and Cybersecurity Analyst (Junior) with expertise in building secure and scalable applications. Explore my projects, skills, and experience in backend development and cybersecurity.',
  alternates: {
    canonical: 'https://koudinouzacharieportfolio.vercel.app/',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen" >
      {/* Hidden SEO content for better indexing */}
      <div className="sr-only">
        <h1>Zacharie KOUADINOU - DevOps Engineer and Cloud Specialist Portfolio</h1>
        <p>
          Welcome to my professional portfolio. I am a DevOps engineer and cloud specialist
          with expertise in AWS, Kubernetes, Docker, CI/CD pipelines, infrastructure automation,
          and scalable cloud solutions. Browse my projects, skills, and professional experience.
        </p>
      </div>

      <InteractiveWrapper>
        <Hero />
        <Skills />
        <ResumeSection />
        <Timeline />
        {/* <CertificationsSection /> */}
        <Projects />
        {/* <BlogsSection /> */}
        <ContactUs />
        <Toaster position="bottom-right" />
      </InteractiveWrapper>
      
      {/* Temporary test components for analytics - remove in production */}
      {/* <AnalyticsDebug /> */}
    </div>
  )
}
