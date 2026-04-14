export function Testimonials() {
  return (
    <section className="py-24 bg-primary-fixed" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-8">
              Real Results from Real Marketers
            </h2>
            <div className="space-y-6">
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm">
                <p className="text-on-surface italic mb-6">
                  &quot;I thought ₹99 was a joke or a scam. But the content in Module 2
                  alone saved me 15 hours of work this week. This is easily the
                  best investment I&apos;ve made in 2024.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <img
                    alt="Portrait"
                    className="w-12 h-12 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvOR7107gS47w9_DF1I-X5nF-02iDCpbsVzfWNTEaxSqLYpAtRmMG6cx1ScjlmciKqVoOD8znkkanwVOzotRK7U6DkKNWNptJm2xOpRKdJA6_QDAhLjzCb7wXBUFkaa4FOPuDd7wW7EC7kJ5eQXDnnzxAn1adiK1Ce1d4rRaLTrJrrZbDpfznBAT0EiGI9yN-qyc12IYyUr_jPim1xXkQ_n95ykJPAopbRIjHRK5anZUwa51GNeHEQL1pI3cGRZnlgoNhHd7gEaG-U"
                  />
                  <div>
                    <p className="font-bold text-primary">Ananya Sharma</p>
                    <p className="text-xs text-on-surface-variant">
                      Freelance Content Strategist
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm">
                <p className="text-on-surface italic mb-6">
                  &quot;The Prompt Engineering handbook included in the course is pure
                  gold. My CTR on Facebook Ads increased by 22% within 48 hours
                  of implementing these strategies.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <img
                    alt="Portrait"
                    className="w-12 h-12 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBegAbadxHaQq5kQarBzeD5tMZ8KfBhMfa8zXJl1n3A7u7ugW5rqDtJWjCsfKCWdr8hyovb8lZBp0S4wAG4FEJuaDnGwHnsPzxK4CxsdTBYonjbT5uXEJp9JJGGWm5DqKV2G5uzZUhDLuYQLLwCGyVG_x2PHpY7Krcf98_HKic-uqItOd7oFcGD1PaUuZ3CqJZGm-mAdI3fXb3yDKiE_r6qnlQ3AWI_lfUeZXl6iFbLujBPD8D3vXk601QVhtERWXRY4BW1C9MWttVc"
                  />
                  <div>
                    <p className="font-bold text-primary">Rohan Mehta</p>
                    <p className="text-xs text-on-surface-variant">
                      E-commerce Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-primary-container rounded-3xl overflow-hidden relative group">
              <img
                alt="Instructor"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1-pc0i8Zy8F_NiQGY8N3i5XOqQ2DzdBxGt4IA5nWbp_Pl_jcKTDPH6rdxbvR_Fe-VKT6pgqII-nmWLBxf9-aagH6q-hvkTYmHA_sqoBQswewiqthcdIuxj1HleME3-2N8DAb8LyG_wfAIt9IgV0h153uvxZLE_f3Il5eiJqO3hr_mDziwfsidiqpm5MlLFhtX35LJrzujvXMZno5npItoViNE66F_eSnIUqB4LWFERjvGeOsBUrjHC8oTIhZn8UkYsls19QN1rLBN"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary to-transparent">
                <p className="text-secondary-container font-bold text-sm mb-1 uppercase tracking-widest">
                  Lead Instructor
                </p>
                <h3 className="text-3xl font-headline font-bold text-white">
                  Aditya Verma
                </h3>
                <p className="text-on-primary-container text-sm">
                  Ex-Google Marketing Specialist | 10+ Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
