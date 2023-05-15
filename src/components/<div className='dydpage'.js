<div className='dydpage'

    <div className='sliders'>
      <div onClick={() => setFourBox1(!fourBox1)} className="blue-box">People </div>
            {fourBox1 ? <div className="skillsList">
            {labels1.map((key, i) => (
              <div className="sliders">
                <div>{key}</div>
                {/* {console.log(key)} */}
                <UserInput value={values[i]} onChange={(value) => handleValueChange(value, i)} />
              </div>
            ))}
            </div> : null}
    </div>
      <div >
      <div onClick={() => setFourBox2(!fourBox2)} className="green-box">Process </div>
      {fourBox2 ? <div className="skillsList">
    {labels2.map((key, i) => (
      <div className="sliders">
        <div>{key}</div>
        {/* {console.log(key)} */}
        <UserInput value={values[4+i]} onChange={(value) => handleValueChange(value, 4+i)} />
      </div>
    ))}
    </div> : null}
    </div>
    <div>
    <div onClick={() => setFourBox3(!fourBox3)} className="navy-box">Practice </div>
      {fourBox3 ? <div className="skillsList">
    {labels3.map((key, i) => (
      <div className="sliders">
        <div>{key}</div>
        {/* {console.log(key)} */}
        <UserInput value={values[8+i]} onChange={(value) => handleValueChange(value, 8+i)} />
      </div>
    ))}
    </div> : null}
    </div>
    <div className='radarchart'>
 

      
        <RadarChart 
        data={values} />
     </div>
     </div>
     </div
     