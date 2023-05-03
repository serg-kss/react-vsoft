import React, { useState } from 'react';
const Photo: React.FC = () => {

  const [state, setState] = useState({
    photo: '',
  });

  const {
    photo,
  } = state;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
'ChangeEvent<HTMLInputElement>'
    event.persist();
    setState((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
    console.log(event.currentTarget.files?.[0]);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
             // Base64 Data URL 👇
             console.log(reader.result);
           });
    console.log(reader.readAsDataURL(event.currentTarget.files?.[0] as Blob))
  };

  return (
    <div className='photo'>
      <label>
        Click Me
        <input
          type='file'
          id='photo'
          name='photo'
          accept='image/png, image/jpeg'
          onChange={onChange}
          value={photo}
        ></input>
      </label>
    </div>
  );
};

export default Photo;