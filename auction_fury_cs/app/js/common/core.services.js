var angular = require('angular');

module.exports = angular.module("core.services",
    ["ngResource"])
    .constant('server_statuses', {
      UNPROCESSABLE_ENTITY: 422,
      NO_CONNECTION: -1,
      NOT_FOUND: 404
    })
    .constant("appSettings",{
        SERVER_PATH: "http://localhost:3000/api/v1/",
        EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    })
    .constant('messages', {
      NO_AUTH: "OOps. Invalid combination of email/password"
    });
