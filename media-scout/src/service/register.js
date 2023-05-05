const AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-1'
});
const utils = require('../utils/utils');
const bcrypt = require('bcryptjs');
const dynamoDB = new AWS.dynamoDB.DocumentClient();
const userTable = 'madiascout-user';

async function register (userInfo) {
  const name = userInfo.name;
  const email = userInfo.email;
  const username = userInfo.username;
  const password = userInfo.password;
  if (!username || !email || !password || !name) {
    return utils.buildResponse(401, {
      message: 'All fields are required'
    });
  }

  const dynamoUser = await getUser(username.toLowerCase().trim());
  if (dynamoUser && dynamoUser.username) {
    return utils.buildResponse(401, {
      message: 'username already  exsists in our database. Please choose a different username'
    });
  }
  const encryptedPW = bcrypt.hashSync(password.trim(), 10);
  const user = {
    name: name,
    email: email,
    username: username.toLowerCase().trim(),
    password: encryptedPW
  };

  const saveUserResponse = await saveUser(user);
  if (!saveUserResponse) {
    return utils.buildResponse(503, {
      message: 'Server Error. Please try again later'
    });
  }

  return utils.buildResponse(200, { username: username });
}
async function getUser (username) {
  const params = {
    TableName: userTable,
    Key: {
      username: username
    }
  };
  return await dynamoDB.get(params).promise().then(response => {
    return response.Item;
  }, error => {
    console.error('There is an error getting user: ', error);
  });
}

async function saveUser (user) {
  const params = {
    TableName: userTable,
    Item: user
  };
  return await dynamoDB.put(params).promise().then(() => {
    return true;
  }, error => {
    console.error('There is error saving user: ', error);
  });
}

module.exports.register = register;
