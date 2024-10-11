import React, { useState } from 'react'

const Controls: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'pomodoro' | 'short' | 'long'>('pomodoro');


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value as 'pomodoro' | 'short' | 'long');
  };

  // Hàm sử dụng switch case để xử lý lựa chọn
  const handleOptionChange = (option: string) => {
    switch (option) {
      case 'pomodoro':
        console.log('Pomodoro selected');
        break;
      case 'short':
        console.log('Short break selected');
        break;
      case 'long':
        console.log('Long break selected');
        break;
      default:
        break;
    }
  }
  return (
    <form className='controls'>
      <input type='radio'
        id='pomodoro'
        name='mode'
        value='pomodoro'
        checked={selectedOption === 'pomodoro'}
        onChange={(e) => {
          handleChange(e);
          handleOptionChange(e.target.value);
        }}
      />
      <label htmlFor='pomodoro' className='controls_button'>Pomodoro</label>

      <input type='radio'
        id='short'
        name='mode'
        value='short'
        checked={selectedOption === 'short'}
        onChange={(e) => {
          handleChange(e);
          handleOptionChange(e.target.value);
        }}
      />
      <label htmlFor='short' className='controls_button'>Short break</label>

      <input type='radio'
        id='long'
        name='mode'
        value='long'
        checked={selectedOption === 'long'}
        onChange={(e) => {
          handleChange(e);
          handleOptionChange(e.target.value);
        }}
      />
      <label htmlFor='long' className='controls_button'>Long break</label>
    </form>
  )
}

export default Controls
