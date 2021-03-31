const getIssues = (payload, cbData, cbFailure) => {
  fetch(`https://api.github.com/search/issues?q=${payload}+state:open`)
    .then(response => response.json())
    .then(res => {
      console.log(res.items);
      cbData(res.items);
    })
    .catch(error => {
      cbFailure(error);
    });
};
export {getIssues};
