import { MaskedProductIdPipe } from './masked-product-id.pipe';

describe('MaskedProductIdPipe', () => {
  it('create an instance', () => {
    const pipe = new MaskedProductIdPipe();
    expect(pipe).toBeTruthy();
  });
});
