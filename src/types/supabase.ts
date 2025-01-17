export interface DemoRegistration {
  id: string;
  name: string;
  email: string;
  club?: string;
  created_at: string;
}

export interface Database {
  public: {
    Tables: {
      demo_registrations: {
        Row: DemoRegistration;
        Insert: Omit<DemoRegistration, 'id' | 'created_at'>;
        Update: Partial<Omit<DemoRegistration, 'id' | 'created_at'>>;
      };
    };
  };
}