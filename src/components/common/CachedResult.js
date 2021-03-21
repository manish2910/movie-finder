async function changeQuery(search, query) {
  let cacheData = JSON.parse(localStorage.getItem(`cache`));
  if(cacheData && cacheData[`${query}`]){
    return cacheData[`${query}`];
  }else{
    const { Search } = await search('s', query);
    if(Search){
      const obj = {...cacheData};
      obj[`${query}`] = Search;
      localStorage.setItem(`cache`, JSON.stringify(obj));
      return Search;
    }
  }
};

export default changeQuery;