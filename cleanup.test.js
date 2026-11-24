// Extra tests added during the 2026 cleanup (not part of the original assignment).
// main.test.js is the instructor's and is unchanged.
const { titleCase, camelCase } = require('./main.js');

describe('titleCase (extra spaces)', () => {
  it('handles a trailing space instead of crashing', () => {
    expect(titleCase('hello world ')).toBe('Hello World ');
  });

  it('capitalizes the word after a double space', () => {
    expect(titleCase('hello  world')).toBe('Hello  World');
  });

  it('capitalizes the first word after leading spaces', () => {
    expect(titleCase('  hello world')).toBe('  Hello World');
  });

  it('returns an empty string for an empty string', () => {
    expect(titleCase('')).toBe('');
  });
});

describe('camelCase (extra spaces)', () => {
  it('handles a trailing space instead of crashing', () => {
    expect(camelCase('hello world ')).toBe('helloWorld');
  });

  it('drops every space in a double space', () => {
    expect(camelCase('hello  world')).toBe('helloWorld');
  });

  it('keeps the first word lowercase after leading spaces', () => {
    expect(camelCase('  Hello world')).toBe('helloWorld');
  });
});
