import * as reduxUtil from '../../utils/redux.util';

const getIsLoggedInMemo = (state) => state.authorization.isLoggedIn;

export const getIsLoggedIn = reduxUtil.createDeepEqualSelector(
    [getIsLoggedInMemo],
    (isLoggedIn) => isLoggedIn
);