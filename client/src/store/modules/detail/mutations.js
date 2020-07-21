const mutations = {
  UPDATE_RESPONSE(state, payload) {
    state.response = payload;
  },

  UPDATE_IS_LOADING(state, payload) {
    state.isLoading = payload;
  },

  UPDATE_IMAGE_WIDTH(state, payload) {
    state.imageWidth = payload;
  }
};

export default mutations;
