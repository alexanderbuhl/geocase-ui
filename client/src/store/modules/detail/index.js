import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const state = {
  response: null,
  itemHeaders: [
    { text: "Type", value: "typestatus" },
    { text: "ID", value: "id" },
    { text: "Collection", value: "collectioncode" },
    { text: "Object ID", value: "unitid" },
    { text: "Group", value: "highertaxon" },
    { text: "Country", value: "country" },
    { text: "Locality", value: "locality" },
    { text: "Latitude", value: "latitude" },
    { text: "Longitude", value: "longitude" },
    { text: "Stratigraphy", value: "stratigraphy" },
    { text: "Mindat", value: "mindat_url" },
    { text: "Record URI", value: "recordURI" },
    { text: "Related resource", value: "relatedResource" }
  ],
  imageWidth: 400,
  imageHeight: 400,
  isLoading: false
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
