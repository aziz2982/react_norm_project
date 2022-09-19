import { Component } from "react";

export default class Input extends Component{
    state = {
        info: {name: ' ',surname: ' ',email: ' '},
        name: '',
        surname: '',
        email: '',
    }
    render(){
        const onNameChange= ({ target: {value,name} }) => {
         this.setState({ name: value })
        }

        const onSurnameChange= ({ target: {value} }) => {
           this.setState({ surname: value })
           }

           const onEmailChange= ({ target: {value} }) => {
            this.setState({email: value })
           }

           const onChange = ({target: {value} },key) =>{
                   this.setState({info:{...this.state.info,[key]: value }})
           }



        return(
            <div>
                <h1>state</h1>
                <h2>name: {this.state.name}</h2>
                <h2>surname: {this.state.surname}</h2>
                <h2>email: {this.state.email}</h2>




                <input onChange={onNameChange} type="text" placeholder="first name" />
                <input onChange={onSurnameChange} type="text" placeholder="last name" />
                <input onChange={onEmailChange} type="text" placeholder="email" />


                <hr />
                   

                <h1>info</h1>
                <h2>name: {this.state.info.name}</h2>
                <h2>surname: {this.state.info.surname}</h2>
                <h2>email: {this.state.info.email}</h2>
                <input onChange={(e) => onChange(e, 'name')} type="text" placeholder="first name" />
                <input onChange={(e) => onChange(e, 'surname')} type="text" placeholder="last name" />
                <input onChange={(e) => onChange(e, 'email')} type="text" placeholder="email" />
                
            </div>
        )
    }
}

