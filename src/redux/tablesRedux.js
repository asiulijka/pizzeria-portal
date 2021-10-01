import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({tables}) => tables.data;
export const getLoadingState = ({tables}) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

const UPDATE_START = createActionName('UPDATE_START');
const UPDATE_SUCCESS = createActionName('UPDATE_SUCCESS');
const UPDATE_ERROR = createActionName('UPDATE_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const updateStarted = payload => ({ payload, type: UPDATE_START });
export const updateSuccess = payload => ({ payload, type: UPDATE_SUCCESS });
export const updateError = payload => ({ payload, type: UPDATE_ERROR });

/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/api/${api.tables}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

// helper functions
const get = (url) => Promise.all([Axios.get(url)]);

export const updateInAPI = tableId => {
  return async (dispatch, getState) => {
    dispatch(updateStarted());

    const currentTableData = await get(`${api.url}/api/${api.tables}/${tableId}`);
    const tableStatus = currentTableData[0].data.status;

    const currentStatus = await get(`${api.url}/api/${api.orderStates}?name=${tableStatus}`);
    const statusId = currentStatus[0].data[0].id;
    const nextStatusId = statusId == 7 ? 1 : statusId + 1;

    const nextStatus = await get(`${api.url}/api/${api.orderStates}?id=${nextStatusId}`);
    const nextStatusName = nextStatus[0].data[0].name;

    Axios
      .put(
        `${api.url}/api/${api.tables}/${tableId}`, 
        {
          ...currentTableData[0].data,
          status: nextStatusName,
        }
      )
      .then(res => {
        dispatch(updateSuccess(res.data));
      })
      .catch(err => {
        dispatch(updateError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case UPDATE_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case UPDATE_SUCCESS: {
      return {
        loading: {
          active: false,
          error: false,
        },
        data: statePart.data.map(table => table.id === action.payload.id ? action.payload : table),
      };
    }
    case UPDATE_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}