export function Curriculum() {
  return (
    <section className="py-24 bg-surface" id="curriculum">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Inside the Curriculum
          </h2>
          <p className="text-on-surface-variant">
            A comprehensive roadmap to AI marketing mastery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="md:col-span-2 lg:col-span-3 p-8 rounded-xl bg-primary-container text-white flex flex-col justify-between">
            <span className="material-symbols-outlined text-4xl text-secondary-container mb-8">
              psychology
            </span>
            <div>
              <h4 className="text-2xl font-bold mb-2">
                Module 1: AI Foundations
              </h4>
              <p className="text-on-primary-container text-sm">
                Understanding LLMs, prompt engineering, and the current AI
                ecosystem for marketers.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-3 p-8 rounded-xl bg-surface-container-high flex flex-col justify-between">
            <span className="material-symbols-outlined text-4xl text-primary mb-8">
              edit_note
            </span>
            <div>
              <h4 className="text-2xl font-bold mb-2 text-primary">
                Module 2: Content Automation
              </h4>
              <p className="text-on-surface-variant text-sm">
                Generating high-converting blogs, social posts, and email
                sequences in seconds.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-2 p-8 rounded-xl bg-surface-container-low flex flex-col justify-between">
            <span className="material-symbols-outlined text-4xl text-primary mb-8">
              analytics
            </span>
            <div>
              <h4 className="text-xl font-bold mb-2 text-primary">
                Module 3: Data Analysis
              </h4>
              <p className="text-on-surface-variant text-sm">
                Using AI to predict trends and optimize campaigns.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-2 p-8 rounded-xl bg-secondary-container flex flex-col justify-between">
            <span className="material-symbols-outlined text-4xl text-primary mb-8">
              ads_click
            </span>
            <div>
              <h4 className="text-xl font-bold mb-2 text-on-secondary-container">
                Module 4: AI Ads Mastery
              </h4>
              <p className="text-on-secondary-fixed-variant text-sm">
                Creating hyper-targeted ad creative and copy.
              </p>
            </div>
          </div>
          <div className="md:col-span-4 lg:col-span-2 p-8 rounded-xl bg-surface-container-high flex flex-col justify-between">
            <span className="material-symbols-outlined text-4xl text-primary mb-8">
              integration_instructions
            </span>
            <div>
              <h4 className="text-xl font-bold mb-2 text-primary">
                Module 5: Workflow Integration
              </h4>
              <p className="text-on-surface-variant text-sm">
                Building custom GPTs for your specific business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
