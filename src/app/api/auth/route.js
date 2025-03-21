export async function POST() {
    try {
        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/token`, {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         username: process.env.API_USER,
        //         password: process.env.API_USER_PASS
        //     })
        // });

        // if (!response.ok) {
        //     throw new Error(`Error en la API: ${response.statusText}`);
        // }

        // const data = await response.json();
        // return Response.json(data);
        return Response.json(data);
    } catch (error) {
        return Response.json({ error: 'Error interno del servidor' }, { status: 500 });
    }
}
