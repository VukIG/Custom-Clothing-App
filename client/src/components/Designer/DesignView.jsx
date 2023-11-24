import React from 'react';
import FileInput from './FileInput';
import AiInput from './AiInput';
import ColorPicker from './ColorPicker';

function DesignView() {
  return (
    <div className="flex justify-center flex-col gap-2 align-items border">
      <FileInput />
      <AiInput />
      <ColorPicker />
    </div>
  );
}

export default DesignView;
