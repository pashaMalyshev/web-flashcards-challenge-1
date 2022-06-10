const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const Reg = require('../views/Reg');
const Home = require('../views/Home');
const { Topic } = require('../db/models')
const { User } = require('../db/models')
const router = express.Router;

router.get('/', async (res, req) => {
  const reg = React.createElement(Reg);
  const html = ReactDOMServer.renderToStaticMarkup(reg);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/topics', async (req,res) => {
  const topics = await Topic.findAll();
  const users = await User.findAll()
  const name = req.body.name
  const password = req.body.password
  if (name === users.username && password === users.password) {
    const home = React.createElement(Home, {topics});
    const html = ReactDOMServer.renderToStaticMarkup(home);
    res.write('<!DOCTYPE html>');
    res.end(html);
  }
  
})

router.post('/topic/:id/', async (req, res) => {
  const topicQuestions = await Topic.findAll({ where: { topic_id: req.params.id } });
  
})
