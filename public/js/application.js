document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('submit', async (event) => {
    event.preventDefault();
    await fetch('/topics', {
      method: 'POST',
      body: JSON.stringify({
        name: event.target.name,
        passowrd: event.target.name,
      }),
    });
  });

  // document.querySelector('#posts').addEventListener('submit', async (event) => {
  //   event.preventDefault();
  //   await fetch(`/topic/${event.target.dataset.id}`, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       name: event.target.name,
  //       passowrd: event.target.name,
  //     }),
  //   });
  // });
});
