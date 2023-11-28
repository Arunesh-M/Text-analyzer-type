import React, { useContext } from 'react';
import DataContext from '../context/datacontext';

const Text = (): JSX.Element=> {
  const { text, state, setState } = useContext(DataContext);
  
  return (
    <div className='text-container'>
      <textarea className='text-area' spellCheck="false" value={text} onChange={(e) => setState({ ...state, text: e.target.value })} placeholder='Enter your text here' />
    </div>
  );
};

export default Text;
