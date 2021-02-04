import type { NextRouter } from 'next/router';

const router: NextRouter = {
  asPath: '/',
  back: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    emit: jest.fn(),
    off: jest.fn(),
    on: jest.fn(),
  },
  isFallback: false,
  pathname: '/',
  prefetch: jest.fn(),
  push: jest.fn(),
  query: {},
  reload: jest.fn(),
  replace: jest.fn(),
  route: '/',
  basePath: '',
  isReady: true,
};

export function useRouter() {
  return router;
}

export function withRouter(Component: React.FC) {
  Component.defaultProps = {
    ...Component.defaultProps,
    router,
  };
  return Component;
}
