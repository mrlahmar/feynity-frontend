export default async function fetchFeed(user,setLoading,setPosts) {
    setLoading(true)
    try {
        // fetch end point
        const res = await fetch(
            'http://localhost:5000/api/v1/posts/feed',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': user.accessToken
                }
            }
        )

        const posts = await res.json()

        if (res.status === 200) {
            // parse data
            setPosts(posts)
            setLoading(false)
        } else {
            setLoading(false)
        }
    } catch (error) {
        setLoading(false)
    }
}