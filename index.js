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

function login(userName, password)
{
    let userNames = ['Debakripa01', 'Debakripa02', 'Debakripa03'];
    if(userNames.includes(userName) && password == 'Emp@123')
    {
        console.log("Login succesful!");
    }
    else if (!userNames.includes(userName))
    {
        console.log("User not found .Please Sign up!");
    }
    else {
        console.log("Wrong Password!");
    }
}