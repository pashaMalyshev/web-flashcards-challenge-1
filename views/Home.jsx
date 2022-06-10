const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ topic }) {
  return (
    <Layout>
      <div class="body">
     <div class="topic">
       <h2>Выбери Тему</h2>
     {posts.map((topic) => (
       <div className="top" id={topic.id} >
         <form method="post" action={`/topic/${topic.id}`} className="topics">
           <h4><a className="link" data-id={topic.id} href={`/topic/${topic.id}`}>{topic.title}</a></h4>
         </form>
       </div>
     ))}
     </div>
     </div>
    </Layout>
  );
};
