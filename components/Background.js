import React, { Component } from 'react';

export class Background extends React.Component {
    constructor(){
        super();
        this.state={
            pictures:[],
        }
    }
    
    componentDidMount() {
        fetch('https://api.github.com/users')
        .then(Response =>{
            return Response.json();
        }).then(data => {
            let pictures = data.map((pic)=>{
                return(
                    <div key={pic}>
                    <div className="col-sm-3">
                    <img src={pic.avatar_url} alt={pic}/>
                    </div>
                    </div>
                )
            })
            this.setState({pictures:pictures});
            console.log("State",this.state.pictures);
    
        })
    }
    render(){
        
        return(
            <div className="row">
                {this.state.pictures}
            </div>
        )
    }
}

export default Background;


