// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');
// const userRoutes = require('./routes/user');

const express = require('express');
const path = require('path');

const errorController = require('./../modules/controllers/error');
const adminRoutes = require('./../modules/routes/admin');
const shopRoutes = require('./../modules/routes/shop');
const userRoutes = require('./../modules/routes/user');

app.set('view engine', 'ejs');
app.set('views', './modules/views');
app.set('view options', {
    layout: false
});

app.use(express.static(path.join(__dirname, './../public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(userRoutes);
app.use(errorController.get404);

console.log('router.js');