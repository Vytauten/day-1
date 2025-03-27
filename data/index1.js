

const container = document.querySelector('.irasai')

const renderPosts = async (field, sort) => {
    let url = 'http://localhost:3000/posts'
    if (field && sort) {
url += `?_sort=${sort === "desc" ? "-" : ""}${field}`
    }

    if (term) {
        uri += `&q=${term}`
    }
    
    const res = await fetch(url)
    const posts = await res.json()

    let template = ''
    posts.forEach(post => {
        template += `
        <div class="post">
        <h2>${post.title}</h2>
        <p class="likes"><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0, 500)}</p>
        <a href="details.html?id=${post.id}">Plačiau</a>
        </div>
        `
    })
    container.innerHTML = template

    
}

window.addEventListener('DOMContentLoaded', () => renderPosts())

document.getElementById('sort').onchange = (event) => {
    const value = event.target.value;
    renderPosts("likes", value);
}

const searchForm = document.querySelector('.search') 

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    renderPosts(searchForm.term.value.trim())
})