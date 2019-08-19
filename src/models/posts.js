import * as service from '../services/posts';
import { message } from 'antd';
import * as constants from '../constants';
export default {
  namespace: 'posts',
  state: {
    posts: [],
    loading: false,
  },
  effects: {
    *fetchData(action, { call, put }) {
      try {
        yield put({
          type: constants.POST.SHOW_LOADING,
        });
        const result = yield call(service.fetchPosts);
        if (result) {
          yield put({
            type: constants.POST.FETCH_SUCCESS.replace('{value}', 'FETCH'),
            payload: result,
          });
        }
      } catch (error) {}
    },
    *deletePost(action, { call, put }) {
      try {
        yield call(service.deletePosts, action.payload);
        yield put({
          type: constants.POST.FETCH_SUCCESS.replace('{value}', 'DELETE'),
          payload: action.payload,
        });
        message.success(constants.MESSAGES.SUCCESS.replace('{value}', 'Remove'));
      } catch (error) {}
    },
    *createPosts(action, { call, put }) {
      try {
        const result = yield call(service.addPosts, action.payload);
        if (result) {
          message.success(constants.MESSAGES.SUCCESS.replace('{value}', 'Add'));
          yield put({
            type: constants.POST.FETCH_SUCCESS.replace('{value}', 'ADD'),
            payload: result,
          });
        }
      } catch (error) {}
    },
    *editPosts(action, { call, put }) {
      try {
        const result = yield call(service.editPosts, action.payload);
        if (result) {
          message.success(constants.MESSAGES.SUCCESS.replace('{value}', 'Edit'));
          yield put({
            type: constants.POST.FETCH_SUCCESS.replace('{value}', 'EDIT'),
            payload: result,
          });
        }
      } catch (error) {}
    },
  },
  reducers: {
    SHOW_LOADING(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    FETCH_SUCCESS(state, action) {
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    },
    DELETE_SUCCESS(state, action) {
      return {
        ...state,
        posts: state.posts.filter(item => item.id !== action.payload),
      };
    },
    ADD_SUCCESS(state, action) {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    },
    EDIT_SUCCESS(state, action) {
      return {
        ...state,
        posts: state.posts.map(item => (item.id === action.payload.id ? action.payload : item)),
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/about') {
          dispatch({
            type: 'fetchData',
          });
        }
      });
    },
  },
};
