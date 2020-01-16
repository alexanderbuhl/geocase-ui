import axios from "axios";

const API_URL = "api";

let query = "*";

class SearchService {
  static getDetailSearch(searchParams) {
    return new Promise(async (resolve, reject) => {
      try {
        let start = (searchParams.page - 1) * searchParams.paginateBy;
        let sort = buildSort(searchParams.sortBy, searchParams.sortDesc);
        // Todo: Build search query
        query = "*";

        let url = `${API_URL}?q=${query}&start=${start}&rows=${searchParams.paginateBy}&sort=${sort}&format=json`;

        const res = await axios.get(url);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static getFastSearch(searchParams) {
    return new Promise(async (resolve, reject) => {
      try {
        let start = (searchParams.page - 1) * searchParams.paginateBy;
        let sort = buildSort(searchParams.sortBy, searchParams.sortDesc);
        // eslint-disable-next-line no-console
        console.log(query)
        if (searchParams.fastSearch.trim().length === 0) query = "*";
        else query = searchParams.fastSearch;

        let url = `${API_URL}?q=${query}&start=${start}&rows=${searchParams.paginateBy}&sort=${sort}&format=json`;

        const res = await axios.get(url);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static updateSearchQuery(searchParams) {
    return new Promise(async (resolve, reject) => {
      try {
        let start = (searchParams.page - 1) * searchParams.paginateBy;
        let sort = buildSort(searchParams.sortBy, searchParams.sortDesc);

        let url = `${API_URL}?q=${query}&start=${start}&rows=${searchParams.paginateBy}&sort=${sort}&format=json`;

        const res = await axios.get(url);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

function buildSort(sortBy, sortDesc) {
  if (sortBy && sortDesc && sortBy.length > 0 && sortDesc.length > 0) {
    let sort = "";

    sortBy.forEach((field, index) => {
      sort += field + (sortDesc[index] ? " desc" : " asc") + ",";
    });

    if (sort.length > 0) sort = sort.substring(0, sort.length - 1);
    else sort = "fullscientificname asc";

    return sort;
  } else return "fullscientificname asc";
}

export default SearchService;
