import React, { useState, useEffect} from 'react'

const Article = () => {

    let [posts, setPosts] = useState(null)

    useEffect(() => {
        setTimeout( async () => {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts')
            let data = await res.json()
            setPosts(data.slice(0, 15))

        }, 5000)
    })

    return (
        <div className="article-container">
            <h2>Articles</h2>

            {posts && posts.map(post => (
                <article className="article" key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </article>
            ))}

            {!posts && <div>Loading...</div>}
        </div>
    )
}

export default Article