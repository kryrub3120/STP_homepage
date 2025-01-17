{/* Previous code remains the same until the contact section */}

      <div className="mt-8 p-4 bg-background rounded-lg border border-white/10">
        <div className="flex items-start gap-3">
          <ExternalLink className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <p className="text-muted text-sm">
              Potrzebujesz dodatkowych materiałów lub masz pytania? Skontaktuj się z nami:
              {' '}
              <a 
                href="mailto:biuro@potencjaldosportu.pl"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                biuro@potencjaldosportu.pl
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}