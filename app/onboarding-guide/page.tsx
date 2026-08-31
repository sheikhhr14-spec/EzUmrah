import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ChatFloat from '@/components/ChatFloat';

export const metadata: Metadata = {
  title: 'Onboarding Guide',
  description: 'EzUmrah Onboarding Guide — Step-by-step setup walkthrough to get your travel agency up and running on the EzUmrah CRM platform.',
};

const steps = [
  {
    num: '01',
    title: 'Create Your Account',
    desc: 'Sign up at umrah.eztechify.com in 2 minutes. Enter your travel agency name, your name, and email. We verify your travel agency license and activate your account within 4 hours.',
    tips: ['Have your agency license number ready', 'Use your work email for faster verification', 'Check your spam folder for the activation email'],
  },
  {
    num: '02',
    title: 'Configure Your CRM',
    desc: 'Add your team members, upload your agency logo, set up your package templates (Umrah, Hajj, Holiday), and configure your invoice branding with your colors and footer text.',
    tips: ['Invite all team members and assign roles', 'Set up at least 3 package templates', 'Customize your invoice template before generating any'],
  },
  {
    num: '03',
    title: 'Import Your Data',
    desc: 'Upload your existing bookings, contacts, and suppliers via CSV. Our import wizard maps your columns automatically. You can also import from Excel or Google Sheets.',
    tips: ['Download our CSV template for the correct format', 'Clean your data before importing (remove duplicates)', 'Start with a small batch to verify the mapping'],
  },
  {
    num: '04',
    title: 'Add Your First Pilgrim',
    desc: 'Enter pilgrim details manually or via bulk upload. Upload documents (passport, visa, health cert), assign flights and hotels, and generate your first quotation.',
    tips: ['Upload documents as you add each pilgrim', 'Assign rooms before confirming bookings', 'Generate a test quotation to see the branding'],
  },
  {
    num: '05',
    title: 'Generate Your First Invoice',
    desc: 'Create a branded invoice, set up an installment plan if needed, and email it directly from the system. Track payment status and send reminders automatically.',
    tips: ['Set up payment terms before invoicing', 'Enable email notifications for invoice events', 'Test with a mock invoice first'],
  },
  {
    num: '06',
    title: 'Go Live & Track',
    desc: 'Print confirmation emails, track every booking to departure day, assign tasks to your team, and monitor your dashboard analytics for real-time insights.',
    tips: ['Set up daily task summaries for your team', 'Monitor the dashboard for booking status changes', 'Enable document expiry alerts'],
  },
];

export default function OnboardingGuide() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ background: 'var(--midnight)', paddingTop: '100px' }}>
      <div className="container max-w-4xl py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--cream)' }}>Onboarding Guide</h1>
        <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: 'var(--text-dim)' }}>Get your travel agency up and running on EzUmrah in under a day. Follow these 6 steps.</p>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="glass-card p-8 fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl font-bold flex-shrink-0 opacity-30" style={{ color: 'var(--gold)', fontFamily: 'var(--font-playfair), serif', minWidth: '50px' }}>{step.num}</div>
                <div>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>{step.title}</h2>
                  <p className="text-sm mb-4" style={{ color: 'var(--text-dim)' }}>{step.desc}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--gold)' }}>Pro Tips</p>
                    <ul className="space-y-1">
                      {step.tips.map((tip, j) => (
                        <li key={j} className="text-sm flex items-start gap-2" style={{ color: 'var(--text-dim)' }}>
                          <span style={{ color: 'var(--teal-light)' }}>✓</span> {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-sm mb-4" style={{ color: 'var(--text-faint)' }}>Need help getting started?</p>
          <a href="/#contact" className="btn-gold text-sm">Contact Support</a>
        </div>
      </div>
      </main>
      <Footer />
      <CookieConsent />
      <ChatFloat />
    </>
  );
}
