import { StripCharPipe } from './strip-char.pipe';

describe('StripCharPipe', () => {
  it('create an instance', () => {
    const pipe = new StripCharPipe();
    expect(pipe).toBeTruthy();
  });
});
