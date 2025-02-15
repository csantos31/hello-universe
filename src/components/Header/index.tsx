import React from 'react';
import './styles.scss';

export function HeaderComponent(){
    return(
        <>
            <header>
                <h1>Header</h1>
            </header>
        </>
    )
}

export const Header = React.memo(HeaderComponent);
