const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ card }) {
  return (
    <Layout>
      <div class="body">
       <div className="top" id={card.id} >
         <h3>{ card.question }</h3>
         <form method="post" action={`/topic/${question.id}`} className="topics">
           <input name="inq" className="q" type="text" />
           <input name="btnq" className="q" type="submit" value="link" />
         </form>
         <form method="post" action={`/topic/${topic.id + 1}`} className="topics">
         <input name="btnq1" className="q" type="submit" value="link" />
         </form>
       </div>

     </div>
    </Layout>
  );
};
