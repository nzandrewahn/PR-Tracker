import createDataContext from "./createDataContext";
import uuid from 'react-native-uuid';

// I want state to look like [{id: number, date: number || string, squat: number, bench: number, deadlift: number}]

const PRReducer = (state, action) => {
  switch (action.type) {
    case "add_PR":
      const date = new Date();
      return [
        ...state,
        {
          id: uuid.v4(),
          date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
          squat: action.payload.squat,
          bench: action.payload.bench,
          deadlift: action.payload.deadlift,
        },
      ];

    case "delete_PR": 
      return state.filter((record) => record.id !== action.payload.id);

    case "edit_PR": 
      return state.map((record) => {
          if (record.id === action.payload.id) {
            return {...record.date, ...action.payload}
          } else {
            return record;
          }
      })
    default:
      return state;
  }
};

const addRecord = (dispatch) => {
  return (squat, bench, deadlift, callback) => {
    dispatch({ type: "add_PR", payload: { squat, bench, deadlift } });
    if (callback) {
      callback();
    }
  };
};

const editRecord = (dispatch) => {
  return (id, squat, bench, deadlift, callback) => {
    dispatch({ type: "edit_PR", payload: { id, squat, bench, deadlift } });
    if (callback) {
      callback();
    }
  };
};

const deleteRecord = (dispatch) => {
  return (id, callback) => {
    dispatch({type: "delete_PR", payload: {id}})
    if(callback) {
      callback();
    }
  }
}

export const { Context, Provider } = createDataContext(
  PRReducer,
  {
    addRecord, 
    editRecord,
    deleteRecord
  },
  []
);
