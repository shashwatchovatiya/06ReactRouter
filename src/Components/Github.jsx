import React, { useState ,useEffect } from 'react'

export default function Github() {

    const [data,setData] = useState([])

    useEffect(() => {
       fetch('https://api.github.com/users/shashwatchovatiya')
       .then(response => response.json())
       .then(data =>{
            console.log(data);
            setData(data)
       })
    }, []);
    return (
        <div>
            <div className='text-4xl flex justify-center gap-6 bg-gray-600  text-white p-4'>
                <img src={data.avatar_url} alt="git Picture" width={200} height={400} className='rounded-full' />   
                <div className="flex items-center">
                GithubFollwers :- {data.followers}
                </div>
            </div>
        </div>
    )
}
