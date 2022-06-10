const { User, Topic, Card, sequelize } = require('./db/models');

async function seed() {
  // sequelize.query('TRUNCATE TABLE "Users", "Topics", "Cards"');
  // const user1 = await User.create({
  //   username: 'Leha',
  //   password: '12345',
  // });

  // const topic1 = await Topic.create({
  //   title: 'Тема-1',
  // });

  // const topic1_card1 = await Card.create({
  //   question: 'Являются ли еноты травоядными, плотоядными или всеядными?',
  //   answer: 'всеядными',
  //   topic_id: 2,
  // });
  
  // const topic1_card2 = await Card.create({
  //   question: 'Верно или нет? Еноты ведут ночной образ жизни.',
  //   answer: 'верно',
  //   topic_id: 2,
  // });

  // const topic1_card3 = await Card.create({
  //   question: 'Верно или нет? Еноты впадают в спячку.',
  //   answer: 'нет',
  //   topic_id: 2,
  // });

  // const topic1_card4 = await Card.create({
  //   question: 'Верно или нет? Еноты могут бегать со скоростью до 25 км в час.',
  //   answer: 'верно',
  //   topic_id: 2,
  // });

  // const topic1_card5 = await Card.create({
  //   question: 'Верно или нет? Еноты любят плавать!',
  //   answer: 'нет',
  //   topic_id: 2,
  // });

  
}
seed();
