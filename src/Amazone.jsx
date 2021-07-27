import React from 'react'
import Card from './Card'
import Store from './Store'


const Amazone = () => {
    return(
        <Card
    key={Store[3].id}
    imgsrc={Store[3].imgsrc}
    title={Store[3].title}
    sname={Store[3].sname}
    link={Store[3].link}
    />
)
}

export default Amazone
