declare global {
  /**
   * A single video item
   */
  type Video = {
    title: string;
    videoId: string;
    description: string;
  };

  /**
   * A collection of videos organized by year
   */
  type VideosByYear = {
    [year: number]: Video[];
  };
}

export {};
