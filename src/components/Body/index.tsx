import React from 'react';

import './styles.scss';

export function BodyComponent(){
    return(
        <>
            <section>Hello World</section>
        </>
    )
}

export const Body = React.memo(BodyComponent);