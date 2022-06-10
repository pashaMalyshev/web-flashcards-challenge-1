const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ card }) {
  return (
    <Layout>
      <div class="body">
       <div className="top" id={post.id} >
         <form method="post" action={`/topic/${topic.id}`} className="topics">
           <h4><a href={`/topic/${topic.id}`}>{topic.title}</a></h4>
         </form>
       </div>

     </div>
    </Layout>
  );
};
