import Button from '@mui/material/Button';

const TextItem=({ name, age, index, updateDetails })=> {
    const resetDetails = () => {
      updateDetails(name, age, index);
    }
  
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <Button onClick={resetDetails}>Reset Details</Button>
      </div>
    );
  }

  export default TextItem