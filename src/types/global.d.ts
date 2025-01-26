interface Window {
  gtag: (
    command: 'event',
    action: string,
    params: {
      page_title: string;
      page_location: string;
      page_path: string;
      send_to: string;
    }
  ) => void;
}
