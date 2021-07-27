import React from 'react'
import Card from './Card'
import Store from './Store'

const Netflix = () => {
    return(
        <Card
    key={Store[1].id}
    imgsrc={Store[1].imgsrc}
    title={Store[1].title}
    sname={Store[1].sname}
    link={Store[1].link}
    />
    )
}

export default Netflix
