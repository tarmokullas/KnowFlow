import React, {Component} from "react";
import "./../App.css";
import Toolbar from "./toolbar";
import Sidebar from "./SideDrawer";
import Backdrop from "./Backdrop";
import SideDrawer from "./SideDrawer";

class FormsComponent extends React.Component {
    state = {
        activity: "",
        department: "",
        resourcesSpent: "",
        timeValue: 0,
        sideDrawerOpen: false
    };

    constructor(props) {
        super(props);
        this.handleAdding = this.handleAdding.bind(this);
        this.handleSubtracting = this.handleSubtracting.bind(this);
        this.handleTimeValue = this.handleTimeValue.bind(this);
        this.handleDataSubmit = this.handleDataSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleAdding() {
        this.setState({timeValue: this.state.timeValue + 15});
    }

    handleSubtracting() {
        this.setState({timeValue: this.state.timeValue - 15});
    }

    handleDataSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    handleTimeValue() {
        this.setState({timeValue: this.state.timeValue});
    }

    onChange(e) {
        this.setState({[e.target.className]: e.target.value});
    }

    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    render() {
        document.body.style.backgroundColor = "DeepSkyBlue";
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>;
        }

        console.log("props", this.props);
        //Sidebar
        return (
            <div style={{height: "100%"}}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}
                <div class="container">
                    <div class="row" id="activityForm">
                        <form>
                            <div class="input">
                                <input
                                    className="departmentForm"
                                    placeholder="Department"
                                    value={this.state.department}
                                    onChange={e => this.setState({department: e.target.value})}
                                />
                            </div>
                            <div className="input">
                                <input
                                    className="activityForm"
                                    placeholder="Activity"
                                    value={this.state.activity}
                                    onChange={e => this.setState({activity: e.target.value})}
                                />
                            </div>
                            <div className="input">
                                <input
                                    className="resourcesSpentForm"
                                    placeholder="Resources Spent"
                                    value={this.state.resourcesSpent}
                                    onChange={e =>
                                        this.setState({resourcesSpent: e.target.value})
                                    }
                                />
                            </div>
                        </form>
                    </div>

                    <div class="row" id="dataInsert">
                        <div class="column">
                            <button
                                id="pmbtn"
                                onClick={this.handleAdding}
                                style={{
                                    fontWeight: "bold",
                                    fontSize: 30,
                                    border: "solid #cccccc 1px"
                                }}
                                className="btn btn-light"
                            >
                                +
                            </button>
                        </div>
                        <div class="column">
                            <h1 className="timeValueClass">
                                {this.state.timeValue + " min"}
                            </h1>
                        </div>
                        <div class="column">
                            <button
                                id="pmbtn"
                                onClick={this.handleSubtracting}
                                style={{
                                    fontWeight: "bold",
                                    fontSize: 30,
                                    border: "solid #cccccc 1pxx"
                                }}
                                className="btn btn-light"
                            >
                                -
                            </button>
                        </div>
                    </div>

                    <div class="row" id="submit">
                        <button
                            id="SubmitButton"
                            onClick={this.handleTimeValue}
                            onClick={e => this.handleDataSubmit(e)}
                            style={{
                                fontWeight: "bold",
                                fontSize: 30,
                                border: "solid #cccccc 1px"
                            }}
                        >
                            SUBMIT
                        </button>
                    </div>

                </div>
            </div>
        );
    }
}

export default FormsComponent;