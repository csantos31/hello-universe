import React from "react";
import './styles.scss';

export function MenuComponent(){
    return(
        <>
            <div className="menu">
                <span>CSANTOS31</span>
                <h3>Download CV ↓ </h3>
            </div>
        </>
    );
}

export const Menu = React.memo(MenuComponent);