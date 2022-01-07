const baseUrl = 'https://opentdb.com';



const fetchSinToken = ( endPoint: string, data?: any, method:string = 'GET' ): Promise<Response> => {
    const url =`${baseUrl}/${endPoint}`;

    if( method === 'GET') {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        })
    }
}


export {
    fetchSinToken,
}