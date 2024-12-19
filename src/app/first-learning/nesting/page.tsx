import '../globals.css'
function MyButton(){
    return(
        <button>I'm a button</button>
    )
}
export default function NestPage(){
    return(
        <div>
            <h1>Welcome to nestpage</h1>
            <p>this page use component MyButton</p>
            <MyButton/>
        </div>
    )
}