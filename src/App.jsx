import React from 'react'
import Netflix from './Netflix';
import Amazone from './Amazone';
import Store from './Store';
import Card from './Card';



const favSeries = 'netflix';

// const FavS = () =>{
    
//     if(favSeries === 'netflix'){
//         return <Netflix />
//     }else{
//         return <Amazone />
//     }
// }


const App = () => {
    return (
        <>
            <header>LIST OF TOP 5 NETFLIX SERIES IN 2021</header>
            {Store.map((val) =>{
                return(
                    <Card
                    key={val.id}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.link}
                    />
                )
            })}
            {/* <FavS /> */}

            {/* { (favSeries === 'netflix') ? <Netflix /> : <Amazone /> } */}

        </>
    )
}

export default App
