const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ topics }) {
  return (
    <Layout>
      <div className="body">
        <div className="topic">
          <h2>Выбери Тему</h2>
          {topics.map((el) => (
            <div className="top" id={el.dataValues.id}>
              <form method="post" action={`/topic/${el.id}`} className="topics">
                <h4><a className="link" data-id={el.dataValues.id} href={`/topic/${el.dataValues.id}`}>{el.dataValues.title}</a></h4>
              </form>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
