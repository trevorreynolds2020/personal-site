import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import { fetchProjects } from "../../redux/actions/projects";

import Navbar from "./Navbar";

import homeSections from "./homeSections"

import "./home.css"

class Home extends Component {

    render = () => {
        return (
            <div className="root-home" >
                <div ref={ element => this.navbar = element }>
                    <Navbar items={homeSections} />
                </div>
            </div>
        );
    }
}


const mapStateToProps = store => ({
    projects: store.projects
})

const mapDispatchToProps = dispatch => ({
    fetchProjects: (args) => dispatch(fetchProjects(args))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));