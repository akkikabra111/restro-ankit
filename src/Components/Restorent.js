import React, { useState } from 'react';
import './style.css';
import menu from './menuApi'
import Restorentcard from './Restorentcard';
import Navbaar from './Navbaar';

// const Unikdata = () => {
//     [
//         ...new Set(
//             menu.map( (yes) => {
//                 return yes.category;
//             })
//         )
//     ]
// };
// console.log(Unikdata);

// const uniqueList = [
//     ...new Set(
//       menu.map((curElem) => {
//         return curElem.category;
//       })
//     ),
//     "All",
//   ];

//   console.log(uniqueList);

const unikdata = [
  "All",
  ... new Set(menu.map((curElem) =>{
  return curElem.category;
})), 
]
// console.log(unikdata)

const Restorent = () => {

    const [Restodata, setRestodata] = useState(menu);
    const [list, setlist] = useState(unikdata);

    const filteritmes = (category) => {

      if (category === "All"){
        setRestodata(menu);
        return;
      }

        const updatedata = menu.filter( (e) => {
           return e.category === category;
        })
        setRestodata(updatedata);
      }
    

    return (
        <>
            <Navbaar filteritmes={filteritmes} setRestodata = {setRestodata} Restodata={Restodata} list={list}/>
            <Restorentcard Restodata={Restodata} />
        </>
    )
}

export default Restorent