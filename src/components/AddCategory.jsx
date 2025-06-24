import { useState } from "react"


export const AddCategory = ({onAddCategory}) => {

  const [inputValue, setInputValue] = useState('Dragon Ball Z')

  const onInputChange = ({ target }) => {
    console.log(target.value);
    setInputValue(target.value);
  }

  const onSubmit = (event)  => {
    console.log(inputValue)
    event.preventDefault();
    if(inputValue.trim().length <= 1)  return;

    onAddCategory(inputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
