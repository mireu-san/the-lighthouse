import React from 'react';

const Layout = (props) => (
    <div className="bg-purple-500 border border-black m-5">
        <nav>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Skills</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
        This test!
        {props.childern}
    </div>
);

export { Layout };