import { afterEach, describe, expect, test, vi } from 'vitest';

const ticketSalesClosedFor = async (value: string) => {
  vi.doMock(import('$app/env/public'), async (importOriginal) => ({
    ...(await importOriginal()),
    PUBLIC_TICKET_SALES_CLOSED: value,
  }));
  const { ticketSalesClosed } = await import('#lib/config.ts');
  return ticketSalesClosed;
};

describe('ticketSalesClosed', () => {
  afterEach(() => {
    vi.resetModules();
  });

  test.each([
    ['true', true],
    ['false', false],
    ['', false],
  ])('PUBLIC_TICKET_SALES_CLOSED=%j gives %s', async (value, expected) => {
    expect(await ticketSalesClosedFor(value)).toBe(expected);
  });
});
