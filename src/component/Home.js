import React, { useEffect, useState } from 'react'

function Home() {
  const [city, setCity] = useState(null)
  const [search, setSearch] = useState("Delhi")
  let time = new Date().toLocaleTimeString()
  const [ctime, setCtime] = useState(time)


  const updatetime = () => {
    time = new Date().toLocaleTimeString()
    setCtime(time)
  }
  const date = new Date().toDateString()

  setInterval(updatetime, 1000)
  // console.log(date)
  // console.log(time*1000)

  const getapi = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b6301a28e7948896fe9d2de4a0c42634`
    let res = await fetch(url)
    let finalres = await res.json()
    console.log(finalres)
    setCity(finalres.main)
  }

  useEffect(() => {
    getapi()
  }, [search])

  return (
    <>
      <div className='container-fluid bgcolor containerstyle'>

        <img className='bgimg' src='https://i.gifer.com/XFbw.gif' ></img>
        <h1 className='heading'>Weather Information</h1>
        <div className='divstyle'>
          <div className='bgblack'>
          <div className='divhead'><h5 className='datestyle'>{date}</h5> </div> 
           <div className=''> <h5 className='timestyle' >{ctime} </h5>   </div>     
        </div>
          <input type="text" className='inputtype' value={search} onChange={(event) => { setSearch(event.target.value) }} placeholder='Enter City...'></input>
        
     
          {!city ? (
            <div className=''>
              <h3 className='head1'> No data found <br /></h3>
              <h3 className='head2'>Please Enter Valid Detail</h3>
            </div>
          ) :
            (
              <div>
                <div className='info'>
                  <h1 className='location'>
                    <i className="fa-solid fa-street-view"></i>  {search}
                  </h1>
                  <h4 className='temp'>
                    {city.temp}°Cel
                  </h4>
                  <h6 className='temp-max'>
                    Min:{city.temp_min}°Cel | Max: {city.temp_max}°Cel
                  </h6>
                </div>
              </div>
            )
          }
          <div><img className='gifstyle' src='https://i.gifer.com/XFbw.gif'></img> </div>
        </div>
      </div>
    </>
  )
}

export default Home