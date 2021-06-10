export default {
    checkJoined: async (group, user, setJoined, setLoading) => {
        try {
            
            // fetch end point
            const res = await fetch(
                'http://localhost:5000/api/v1/groups/checkJoined',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': user.accessToken
                    },
                    body: JSON.stringify({
                        'groupid': group.id
                    })
                }
            )

            const data = await res.json()

            if (res.status === 200 && data.joined === true) {
                // parse data
                setJoined(true)
                setLoading(false)
            } else {
                setJoined(false)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
        }
    },

    joinGroup: async (router,user,group,setJoined,setLoading,setWentWrong) => {
        setLoading(true)
        try {
                // fetch end point
                const res = await fetch(
                    'http://localhost:5000/api/v1/groups/join',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'x-auth-token': user.accessToken
                        },
                        body: JSON.stringify({
                            'groupid': group.id,
                            'courseid': group.courseid
                        })
                    }
                )

                const data = await res.json()

                if (res.status === 200) {
                    // parse data
                    setJoined(true)
                    setLoading(false)
                    router.replace(`/group/${group.id}`)
                } else {
                    setJoined(false)
                    setLoading(false)
                    setWentWrong(true)
                }
        } catch (error) {
            setJoined(false)
            setLoading(false)
            setWentWrong(true)
        }
    },


    leaveGroup: async (router,user,group,setWentWrongLeave) => {
        try {
            // fetch end point
            const res = await fetch(
                'http://localhost:5000/api/v1/groups/leave',
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': user.accessToken
                    },
                    body: JSON.stringify({
                        'groupid': group.id
                    })
                }
            )

            const data = await res.json()

            if (res.status === 200 && data.deleted === true) {
                // parse data
                router.push(`/mygroups`)
            } else {
                setWentWrongLeave(true)
            }
        } catch (error) {
            setWentWrongLeave(true)
        }
    }
}