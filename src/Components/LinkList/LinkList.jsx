import React from 'react';

import "./LinkList.css";

const LinkList = (props) => {
    const linkMarkup = props.options.map((link) => (
        <li className="link-list-stem" key = {link.id}>
            <a href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-list-item-url"
            >
                {link.text}
            </a>
        </li>
    ));
    return <ul className="link-list">{linkMarkup}</ul>;
}

export default LinkList;