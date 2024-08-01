import React from 'react'
import "./header.scss"

function Header() {
    return (
        <>
            <nav>
                <div className="container">
                    <div class="header">
                        <div className="logobox">
                            <a href="">SK</a>
                        </div>
                        <div className="menu">
                            <ul>
                                <li>Home</li>
                                <li>About Me</li>
                                <li>Recent Projects</li>
                                <li>Experience </li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header
