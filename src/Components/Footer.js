import React from "react";

const Footer = props => {
    
    return(
        <div>
            <h4>Halaman Footer aku { props.name }</h4>
            <p>@ {props.tahun}</p>
        </div>
    );
};

export default Footer;