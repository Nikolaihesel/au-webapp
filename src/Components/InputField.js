export default function InputField({type, placeholder}) {

   // onChange Handler function
    // with event parameter
    const getInputValue = (event)=>{
        // show the user input value to console
        const userValue = event.target.value;

        console.log(userValue);
    };

    return (
        <input type={type} placeholder={placeholder}  onChange={getInputValue} />

    )
};

