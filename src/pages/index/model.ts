import type { Effect, Reducer, ImmerReducer } from 'umi';
import Api from '@/api/fetch';

export type IndexModelState = {
  name: any;
};
export type IndexModelType = {
  namespace: string;
  state: IndexModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
    // 启用 immer 之后
    immerSave: ImmerReducer<IndexModelState>;
  };
};

const IndexModel: IndexModelType = {
  namespace: 'index',
  state: {
    name: '',
  },
  effects: {
    *query({ payload }, { call, put }) {
      const result = yield call(Api.getList, payload);
      yield put({
        type: 'immerSave',
        payload: result.data,
      });
      return result;
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        name: action.payload,
      };
    },
    // 启用 immer 之后，建议使用这种方式
    immerSave(state, action) {
      state.name = action.payload;
    },
  },
};
export default IndexModel;
