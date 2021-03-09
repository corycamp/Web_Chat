import React,{Component} from 'react'

class Login extends Component{
    constructor(props){

        super(props)
        
    }   

    render(){
        return(
            <div>
                <form>
                 <label>
                     UserName: 
                     <input type = 'text'/>
                </label>
                <label>
                     Password: 
                     <input type = 'password'/>
                </label>
                <button type = 'submit'>Submit</button>
                </form>
            </div>
        )
    }

}

export default Login;