import type {APIRoute} from 'astro';

export const GET: APIRoute = ({redirect}) => {
    return redirect('https://drive.google.com/file/d/19XJ8VN_ZaeN_z6VCbgjEY8hSczKCExhU/view?usp=drive_link');;
}