
function Hello(){

    const getName =(yourname) => {
        return yourname;
    }

    function handleClick(){
        alert("Button was Clicked");
    }
        const handleInput = (event) => {
            console.clear()
            console.log("value:", event.target.value)

        }
        const handleMouseOver = (event) => {console.log("Mouse is over text");}
        const handleDoubleClick = (event) => {console.log("text is double clicked");}

        const name = "Yahubaba"
        const name1 = "Atik"

    
    return (
    <>
    <h2 className='test'> Hello{getName(name)}</h2>
            <h2> Bye {getName(name1)}</h2>
            <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={()=>alert("Hello from inline function")}>Say Helloo</button>
            <br/>
            <input type="text" onChange={handleInput} placeholder="Type something"/>
      </>      )
}


export default Hello