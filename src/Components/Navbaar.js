import React  from 'react'
import menu from './menuApi'

const Navbaar = ({ filteritmes, setRestodata , list }) => {
  // const [Restodata, setRestodata] = useState(menu);
  return (
    <>

      <nav className="navbar">
        <div className="btn-group">

          {
            list.map( (unik) => {
              return <button className="btn-group__item" onClick={() => filteritmes(unik)}> {unik} </button>

            })
          }
          {/* <button className="btn-group__item" onClick={() => setRestodata(menu)}> All </button>
          <button className="btn-group__item" onClick={() => filteritmes("breakfast")}> Breakfast </button>
          <button className="btn-group__item" onClick={() => filteritmes("evening")}> Evening </button>
          <button className="btn-group__item" onClick={() => filteritmes("lunch")}> Lunch </button>
          <button className="btn-group__item" onClick={() => filteritmes("dinner")}> Dinner </button> */}
        </div>
      </nav>


      {/* <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav> */}

    </>
  )
};

export default Navbaar