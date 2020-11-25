import { init } from '@rematch/core';
import { search } from './models';

const store = init({
  models: {
    search,
  }
});

export default store;