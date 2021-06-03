export default async function add_course(event, router, user, setWentWrong, setLoading) {
    try {
        // fetch end point to add course
        const res = await fetch(
            'http://localhost:5000/api/v1/courses/add',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': user.accessToken
                },
                body: JSON.stringify({
                    title: event.target.coursetitle.value,
                    platform: event.target.courseplatform.value,
                    link: event.target.courselink.value,
                    provider: event.target.courseprovider.value,
                    description: event.target.coursedescription.value,
                })
            }
        )
        
        // verify status
        if (res.status === 200) {
            setLoading(false)
            router.push('/search')
        } else {
            setLoading(false)
            setWentWrong(true)
        }
        
    } catch (error) {
        // catch error
        setLoading(false)
        setWentWrong(true)
    }
}

export async function take_course(router,user,course,setLoading, setWentWrong) {
    try {
        setLoading(true)
        // fetch end point to take a course
        const res = await fetch(
            'http://localhost:5000/api/v1/courses/take',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': user.accessToken
                },
                body: JSON.stringify({
                    courseId: course.id
                })
            }
        )
        
        // verify status
        if (res.status === 200) {
            setLoading(false)
            router.push('/mycourses')
        } else {
            setLoading(false)
            setWentWrong(true)
        }
    } catch (error) {
        // catch error
        setLoading(false)
        setWentWrong(true)
    }
}