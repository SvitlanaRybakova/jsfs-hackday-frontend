import { ChangeEvent, FC } from 'react';

type InputFormProps = {
  collectionName: string | undefined;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;

};

const InputForm: FC<InputFormProps> = ({
  collectionName,
  handleInputChange,
}) => {

  return (
    <form>
      <label htmlFor='search' className='text-sm  text-white '>
        Edit title here
      </label>
      <div className='relative'>
        <input
          type='search'
          id='search'
          className='block w-full p-2 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
          value={collectionName}
          onChange={handleInputChange}
          required
        />
      </div>
    </form>
  );
};

export default InputForm;