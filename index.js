function signup(userName)
{
    let userNames = ['Debakripa01', 'Debakripa02', 'Debakripa03'];
    if (userNames.includes(userName))
    {
        console.log("User already registered! Please login");
    }
    else {
        userNames.push(userName);
        console.log("Sign Up Succesful! Please login");
    }
}