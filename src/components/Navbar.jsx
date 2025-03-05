import React from "react";
import { useState } from "react";
import './styles/Navbar.css';

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="left-navbar navbar-item">DoTask!</div>
                <div className="right-navbar navbar-item">
                    <a href="/" className="home button">Home</a>
                    <a href="/about" className="about button">About</a>
                </div>
            </div>
        </>
    )
}