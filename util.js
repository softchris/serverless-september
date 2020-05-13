function formatResponse(response) {
  // response = JSON.parse(response);
  // array of array
  return response.map(row => {
    let entry = {};
    row.forEach(col => {
      
      entry[col.metadata.colName] = col.value;
    })
    return entry;
  });
}

module.exports = {
  formatResponse
}