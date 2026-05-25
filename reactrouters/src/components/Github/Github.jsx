import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchaudhary')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [])

    return (
        <>
            <h3 className='bg-gray-600 text-amber-50 p-2'>
                Github Followers : {data.followers}
            </h3>
            <img src='{data.avatar_url}'width={300}></img>
        </>
    )
}

export default Github