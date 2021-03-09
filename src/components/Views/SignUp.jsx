import React,{Component} from 'react'

class SignUp extends Component{
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
                     Email: 
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

export default SignUp;