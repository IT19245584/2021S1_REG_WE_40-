import React, { Component } from 'react';
import axios from 'axios';

class AboutUsBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:6060/aboutus/view')
            .then(response => {
                const dates = response.data;
                this.setState({ dates });
                console.log("response", response);
            }).catch(error => {
                alert(error.message);
                console.log("Error", error);
            });
    }

    render() {
        return (
            <div>
                {this.state?.dates?.length > 0 && this.state.dates.map((item, index) =>
                    <div>
                        {item.status && item.status === 'Post' &&
                            <div>
                                <div className="text-center container" style={{ fontSize: "110%", fontStyle: "italic" }}>
                                    <p className="pt-2 ps-2 pe2">{item.description}</p>
                                </div>
                                <div className="text-center container" style={{ fontSize: "200%" }}>
                                    <p>{item.dateRange}</p>
                                </div>
                            </div>
                        }
                    </div>
                )}
            </div>

        );
    }
}

export default AboutUsBody;