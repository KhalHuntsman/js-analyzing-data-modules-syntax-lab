function combineUsers(...args) {
  // initialize the return object
  const combinedObject = {
    users: []
  };
// loop through each array and merge using spread operator
  for (let userArray of args) {
    combinedObject.users.push(...userArray);
  }
 // get today's date in "M/d/yyyy" format
  combinedObject.merge_date = Date.today().toString("M/d/yyyy");
  // return the combined object
  return combinedObject
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};