const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charset="UTF-8"/>
        <title>ВопросикиОтветики</title>
        <link rel="stylesheet" href="/stylesheets/normalize.css" />
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet" />
        <link rel="stylesheet" href="/stylesheets/application.css" />
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" />
        <script defer src="/js/application.js" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};
