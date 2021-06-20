import React, {Component} from "react";

class Profile extends Component {
    constructor(props)
    {
        super(props);

    }
    render ()
    {
        return (
            <div>
                <section>Profile</section>
                <header>
                    <h1>{this.props.user.name}</h1>
                </header>
                <div><img src={this.props.user.image} alt={this.props.user.name} /></div>
                <p>Age: {this.props.user.age}</p>
            </div>
        )
    }
}

export default Profile