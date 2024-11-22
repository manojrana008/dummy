const throwError = require("../utilities/error");
const dbModelName = require("dbModelPath");

const getUserDetails = async (req) => {
  const {
    query: { id, name, lastname },
  } = req;

  const findQuery = {};
  if (id) findQuery.id = id;
  if (id) findQuery.name = name;
  if (id) findQuery.lastname = lastname;

  // you can use "throwError" function to throw error if any validating fails
  //
  //   throwError({
  //     status: "status code as number",
  //     message: "message to send with error.",
  //     options: "to send any other details if needed.",
  //   });

  // it will return empty oject if no user find with query
  const user = await dbModelName.findOne(findQuery);

  // it will return empty array if no users find with query
  // if need to find multiple users user find
  //   const users = await dbModelName.find()
  return user;
};

module.exports = { getUserDetails };
