import '../globals.css'


export default function condition(){
    let content;
    let boolean = false;
    
    if(boolean === false){
        content = <div>you isn't login</div>
    }else{
        content = <div>You are login</div>
    }
    return(
        <div>
            {content}
        </div>
    )
}

