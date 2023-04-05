import { redirect } from '@sveltejs/kit';

export async function load({fetch, params}){
    //console.log(params)
    const id = params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const guide = await res.json()
    // console.log(guides)

    if(res.ok) {
        return {
            props: {
                guide
            }
        }
    }    
        throw redirect(301, '/guides')
        
}