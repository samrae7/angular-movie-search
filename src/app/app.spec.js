import app from './app';

describe('app', () => {
  beforeEach(() => {
    angular.mock.module(app);
  });

  it('should be defined', () => {
    expect(app).toBeDefined();
  });
});
