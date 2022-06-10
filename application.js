document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#posts').addEventListener('submit', async (event) => {
    await fetch ('/topics', {
      method: 'POST',
      body: JSON.stringify({
        name: event.target.name,
        passowrd: event.target.name,
      })
    })
  })


  document.querySelector('.body').addEventListener('click', async (event) => {
    if (event.target. className === 'link') {
      await fetch (`/topic/${event.target.dataset.id}`, {
        method: 'POST',
        body: JSON.stringify({
          name: event.target.name,
          passowrd: event.target.name,
        })
      })
    }
  })
})