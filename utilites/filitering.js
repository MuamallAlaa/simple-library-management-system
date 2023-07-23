module.exports = bookfiltring = (req) => {
  let query = { ...req };

  let filter = {};
  const filtered = ["page", "sort", "limit"];
  filtered.forEach((filed) => delete query[filed]);
  filter.where = query;
  for (let [key, value] of Object.entries(query)) {
    if (query[key].lt) {
      query[key].lt = query[key].lt * 1;
    }
    if (query[key].gt) {
      query[key].gt = query[key].gt * 1;
    }
  }
  filter.where = query;

  if (req.page) {
    const page = req.page;
    const pageNumber = parseInt(page) || 1;
    const limit = parseInt(req.limit) || 3;
    const result = (pageNumber - 1) * limit;
    filter.skip = result;
    filter.take = limit;
  }
  if (req.sort) {
    let arrorde = [];
    let q = JSON.stringify(req.sort).replace(/"sort":|"([^"]*)":/g, "$1", "");
    q = q.replace(/=/g, ":");
    q = q.replace(/[\{\}\"']/g, "");
    let arry = q.split(",");

    for (let i = 0; i < arry.length; i++) {
      let [keys, values] = arry[i].split(":");
      let ob = {};

      ob[keys] = values;
      arrorde.push(ob);
    }

    filter.orderBy = [...arrorde];
  }
  console.log(filter);
  return filter;
};
