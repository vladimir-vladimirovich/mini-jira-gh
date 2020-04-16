import * as _ from 'underscore';
import { createSelectorCreator, defaultMemoize } from 'reselect';

export const createDeepEqualSelector = createSelectorCreator(
    defaultMemoize,
    _.isEqual
);