import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, test } from 'vitest';
import { schedule } from './schedule';
import speakers from './speakers';
import { videosByYear } from './videos';

const staticFile = (path: string) => new URL(`../../../static${path}`, import.meta.url);

describe('speakers', () => {
  test.each(Object.keys(speakers))('%s has a photo', (slug) => {
    expect(existsSync(staticFile(`/images/speakers/${slug}.webp`))).toBe(true);
  });
});

describe('schedule', () => {
  describe.each(schedule)('slot $time', (slot) => {
    test('time is HH:MM', () => {
      expect(slot.time).toMatch(/^([01]\d|2[0-3]):[0-5]\d$/);
    });

    if (slot.speakerSlug) {
      test('speakerSlug is a speaker', () => {
        expect(Object.keys(speakers)).toContain(slot.speakerSlug);
      });

      test('talk has a title', () => {
        expect(slot.title).toBeTruthy();
      });
    } else {
      test('image exists under static/', () => {
        expect(slot.image).toBeTruthy();
        expect(existsSync(staticFile(slot.image!))).toBe(true);
      });
    }
  });

  test('times are strictly ascending', () => {
    schedule.slice(1).forEach((slot, i) => {
      expect(slot.time > schedule[i].time, `slot ${slot.time} follows ${schedule[i].time}`).toBe(
        true,
      );
    });
  });
});

describe('videos', () => {
  describe.each(Object.entries(videosByYear))('%s', (_year, videos) => {
    describe.each(videos)('$title', (video) => {
      test('videoId is a YouTube ID', () => {
        expect(video.videoId).toMatch(/^[A-Za-z0-9_-]{11}$/);
      });

      test('title is Name: "Title"', () => {
        expect(video.title).toMatch(/^[^:"]+: ".+"$/);
      });
    });
  });

  test('each videoId appears once', () => {
    const seen = new Set<string>();
    Object.values(videosByYear)
      .flat()
      .forEach(({ videoId, title }) => {
        expect(seen.has(videoId), `${videoId} (${title}) appears twice`).toBe(false);
        seen.add(videoId);
      });
  });

  // Integer-like keys always enumerate ascending, so read the year order from the source.
  test('years are newest first', () => {
    const source = readFileSync(new URL('./videos.ts', import.meta.url), 'utf8');
    const years = [...source.matchAll(/^ {2}'?(\d{4})'?: \[/gm)].map(([, year]) => Number(year));
    expect(years).toEqual(
      Object.keys(videosByYear)
        .map(Number)
        .sort((a, b) => b - a),
    );
  });
});
