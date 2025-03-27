const id = new URLSearchParams(window.location.search).get('id')
const container = document.querySelector('.details')

window.addEventListener('DOMContentLoaded', () => renderDetails())

const renderDetails = async () => {
    const res = await fetch('http://localhost:3000/posts/' + id)
    const post = await res.json()

    const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    `

    container.innerHTML = template
}

const deleteBtn = document.getElementsByClassName('delete')

deleteBtn.addEventListener('click', async (e) => {
    const res = await fetch('http://localhost:3000/posts/' + id, {
        method: 'DELETE'
    })

    window.location.replace('/data/index.html')
}) 


