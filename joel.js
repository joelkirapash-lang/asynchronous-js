
// Write your code here!

async function displayPosts() {
    const myId = document.getElementById('post-list')

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
   

    posts.forEach(post => {
    
    const li = document.createElement('li')
    const h1 = document.createElement('h1')

    h1.textContent = post.title

    const p = document.createElement('p')
    p.textContent = post.body

    li.append(h1, p);
    myId.append(li)
 });
 }
 displayPosts()