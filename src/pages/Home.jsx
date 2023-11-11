import React, { useEffect, useState } from 'react'
import Style from './home.module.css'

const Home = () => {
  const [menuBtnClicked, setmenuBtnClicked] = useState(false);
  const [showDetail, setshowDetail] = useState(false);

  const [arrData, setarrData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch('https://hoblist.com/api/movieList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          category: "movies",
          language: "kannada",
          genre: "all",
          sort: "voting"
        })
      });
      let data = await response.json();
      console.log(data.result);
      setarrData(data.result)
    }
    fetchData();
  }, []);

  const clickMenu=()=>{
    setmenuBtnClicked(true)
  }
  const closeMenu=()=>{
    setmenuBtnClicked(false)
  }
  const handleInfo=()=>{
    setshowDetail(true)
  }
  return (
    <div className={Style.home}>
     {!menuBtnClicked && <span onClick={clickMenu} class={`${Style.menuIcon} material-symbols-outlined`}>
        menu
      </span>}
     
    
    {menuBtnClicked &&  <div className={Style.aside}>
    {menuBtnClicked && <span onClick={closeMenu} class={`${Style.menuClose} material-symbols-outlined`}>
        close
      </span>}
        <details style={{marginTop:"30px",cursor:"pointer"}}>
          <summary  onClick={handleInfo}>Company Info</summary>
          <p style={{marginTop:"20px"}}><b>Company</b>: Geeksynergy Technologies Pvt Ltd</p>
          <p></p>
          <p><b>Address</b>: Sanjayanagar, Bengaluru-56</p>
          <p><b>Phone</b>: XXXXXXXXX09</p>
          <p><b>Email</b>: <a href="mailto:">XXXXXX@gmail.com</a></p>
        </details>
      </div>}
      <div className={Style.container}>
        {arrData.map((data) => {
          return <div className={Style.cards} key={data._id}>
            <div className={Style.cardImg}>
              <img width={"100%"} height="100%" style={{ objectFit: "cover" }} src={data.poster} alt="" />
            </div>
            <div className={Style.cardDesc}>
              <h3>{data.title}</h3>
              <p>Genre:{data.genre}</p>
              <p>Director:{data.director[0]}</p>
              {/* <p>Starring:{data.stars.map((star)=>{return<span>{star}</span>})}</p> */}
              <p>Starring:{data.stars[0]}</p>
              <p><span style={{ borderRight: "2px solid", padding: "5px" }}>Mins</span><span style={{ borderRight: "2px solid", padding: "5px" }}>English</span><span style={{ padding: "5px" }}>{new Date(data.releasedDate).toLocaleDateString('en-US', {
                month: "short",
                day: '2-digit',
              })}</span></p>
              <p style={{ color: "aqua" }}><span style={{ borderRight: "2px solid", padding: "5px" }}>{data.pageViews}{" views"}</span><span>{` voted by ${data.voted.length} people`}</span></p>
              <button className='btn btn-primary'>Watch Trailer</button>
            </div>
          </div>
        })}

      </div>

    </div>
  )
}

export default Home
