
    function Pitch({range, power, float}) {
        return ( 
        
            <div className='pitch'>
            <input type="range" onChange={range}  disabled={power}
            />
            <div className='control'>
              <p>Power</p>
              <div className='power outer' onClick={float}>
                <div className='inner'></div>
              </div>
            </div>
          </div>

          );
    }

    export default Pitch;