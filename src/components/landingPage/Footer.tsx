import React from 'react';

export function Footer() {
  return (
    <footer className="bg-surface w-full py-20 border-t border-outline/10">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <span className="text-lg font-bold text-primary mb-4 block">Digital Architect</span>
          <p className="font-body leading-relaxed text-sm text-on-surface-variant">Mastering the systems of future marketing. Built for the architects of the digital age.</p>
        </div>
        <div>
          <h5 className="font-headline font-bold text-sm mb-6 text-primary">Program</h5>
          <ul className="space-y-4">
            <li><a className="font-body text-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">AI Certification</a></li>
            <li><a className="font-body text-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Curriculum</a></li>
            <li><a className="font-body text-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Tool Stack</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-headline font-bold text-sm mb-6 text-primary">Support</h5>
          <ul className="space-y-4">
            <li><a className="font-body text-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="font-body text-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms of Service</a></li>
            <li><a className="font-body text-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Contact Support</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-headline font-bold text-sm mb-6 text-primary">Connect</h5>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary cursor-pointer hover:bg-secondary-fixed transition-colors">
              <span className="material-symbols-outlined">share</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary cursor-pointer hover:bg-secondary-fixed transition-colors">
              <span className="material-symbols-outlined">alternate_email</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-20 pt-8 border-t border-outline/10 text-center">
        <p className="font-body text-sm text-on-surface-variant">© 2024 Digital Architect AI Marketing. All rights reserved.</p>
      </div>
    </footer>
  );
}
