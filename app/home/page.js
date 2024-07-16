export default function home(){
    const session=useSession();
    if(!session){
        return <login/>
    }
   return( <p> hi! this is home</p>)
}