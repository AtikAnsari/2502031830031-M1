function Com()
{

    const isLoggedIn = true;

    if(isLoggedIn)
        {
        return <h1>Welcome user</h1>
    }
    else
        {
        return <h2>Please login</h2>
    }
}

export default Com