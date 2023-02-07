import { all } from 'redux-saga/effects';

import history from './history/sagas';
import launch from './launch/sagas';
import rocket from './rocket/sagas';

export default function* rootSaga(): Generator {
    return yield all([history, launch, rocket]);
}
