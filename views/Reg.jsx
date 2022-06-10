const React = require('react');
const Layout = require('./Layout');

module.exports = function Reg() {
  return (
    <Layout>
      <div className="body">
        <div className="header">
          <h1 id="hallo">HALLO</h1>
          <form id="posts" method="post" action="/topics">
            <div><input name="name" id="name" type="text" placeholder="Enter Email" /></div>
            <div><input name="password" id="password" type="password" placeholder="Enter Password" /></div>
            <div><input id="btn" type="submit" value="Зарегестрироваться" /></div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
