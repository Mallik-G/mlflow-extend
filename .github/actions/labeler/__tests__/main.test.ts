import { extractLabels } from '../src/main';

describe('main', (): void => {
  it('extractLabels', (): void => {
    const body = [
      '- [] `a`: a',
      '- [ ] `b`: b',
      '- [x] `c`: c',
      '- [ x] `d`: d]',
      '- [X] `e`: e]',
      '- [ X] `f`: f]',
    ].join('\n');

    expect(extractLabels(body)).toEqual([
      { name: 'a', checked: false },
      { name: 'b', checked: false },
      { name: 'c', checked: true },
      { name: 'd', checked: true },
      { name: 'e', checked: true },
      { name: 'f', checked: true },
    ]);
  });
});