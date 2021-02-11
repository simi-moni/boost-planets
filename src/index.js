import Application from './app/Application';

document.addEventListener('DOMContentLoaded', () => {
  const app = new Application();
  
  // Used for automated testing only
  if (process.env.NODE_ENV === 'development') {
    window.__JS_APP = app;
  }
});
