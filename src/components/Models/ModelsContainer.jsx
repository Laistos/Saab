import React from "react";
import Models from "./Models";

class ModelsContainer extends React.Component {
    render() {
        return (
            <div>
                {this.props.models.models.map(model => {
                    return <Models {...model} key={model.title}/>
                })}
            </div>
        )
    }
}

export default ModelsContainer