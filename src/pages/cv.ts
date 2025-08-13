import type { APIRoute } from 'astro';

// To add external redirects, create a .ts file in the pages/ folder with the route as the name. Then add the following code there.

export const GET: APIRoute = ({ redirect }) => {
    return redirect('https://drive.google.com/file/d/1XB8XGzbEneOgdMDQe3pRDQ3ssGCTpqFi/view?usp=sharing');
}