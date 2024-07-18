function Buttons({ buttonData, onClick, power }) {
    return (
      <div className='button-wrapper'>
        <div className='btn-container'>
          {buttonData.map((button) => (
            <button
              key={button.id}
              className='drum-pad btn btn-secondary'
              id={button.id}
              onClick={onClick}
              disabled={power}
            >
              {button.key}
              <audio src={button.sound} className='clip' id={button.key}></audio>
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  export default Buttons;
  