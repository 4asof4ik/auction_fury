var mainRoute        = require('./main.route.js'),
    mainComponent    = require('./components/main.component.js'),
    profileModule    = require('../profile/profile.module.js'),
    loginModule      = require('../login/login.module.js'),
    confirmationModule = require('../confirmation/confirmation.module.js'),
    aboutModule      = require('../about/about.module.js'),
    contactModule    = require('../contact/contact.module.js'),
    homeModule       = require('../home/home.module.js'),
    newModule        = require('../news/news.module.js'),
    dashboardModule  = require('../admin/dashboard/dashboard.module.js'),
    currencyModule   = require('../admin/categories/categories.module.js'),
    categoriesModule = require('../admin/currency/currency.module.js'),
    registerModule   = require('../register/register.module.js'),
    navModule        = require('../navigation/navigation.module.js'),
    userModule       = require('../user-detail/user-detail.module.js'),
    auctionsModule   = require('../auction/auctions/auctions.module.js'),
    currentAuctionModule   = require('../auction/currentauction/currentauction.module.js'),
    auctionFormModule   = require('../auction/auctionform/auctionform.module.js');

module.exports = angular.module("app.main", [
  require('angular-messages'),
  require('angular-validation-match'),
  require('angular-ui-router'),
  require('angular-smart-table'),
  require('angular-material'),
  require('angular-aria'),
  require('angular-animate'),

  require('angular-ui-bootstrap'),
  require('angular-utils-pagination'),
  require('angular-translate'),
  require('angular-translate-loader-static-files'),
  require('angular-translate-storage-local'),
  require('angular-translate-storage-cookie'),
  require('angular-cookies'),
  require('angular-utils-pagination'),

  mainComponent.name,
  mainRoute.name,
  profileModule.name,
  confirmationModule.name,
  loginModule.name,
  aboutModule.name,
  contactModule.name,
  homeModule.name,
  newModule.name,
  dashboardModule.name,
  currencyModule.name,
  categoriesModule.name,
  registerModule.name,
  navModule.name,
  userModule.name,
  auctionsModule.name,
  currentAuctionModule.name,
  auctionFormModule.name

]);
