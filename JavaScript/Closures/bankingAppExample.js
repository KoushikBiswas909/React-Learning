
// Now we are trying to implement featurs like checking balance, deposite and withdraw balance
/* In this scenario, we need to manupulate the balance variable within the oute function.
   But we want to perform operation on balance variable without directly exposing the variable
   to the user, we can do the same by creating different methods.
   If this is the usecase then Closures are best way to do it.
*/
/*
   To execute this concept, we have to create another function within the createBankAccount function,
   and return the new function from createBankAccount function, within the newly created function
   we have to write the different logics.
*/
/*
  From one function you can only return a sigle function. But we have 3 features, 3 times we have to
  return 3 different functions. To perform this we create an object which have key value pairs, every value
  should be our expected functions.
*/
function createBankAccount(initialBalance){
  let balance = initialBalance;
  
  return {
    // we can assign any function here.
    
    // Assigning the annoynomus function
    "deposite" : function (ammount){
      balance = balance + ammount;
      console.log("Deposited "+ammount+ " and Current balance is " + balance);
    },
    
    // Assigning the arrow function
    "withdraw" : (ammount) => {
      if(ammount > balance){
        console.log("Insufficiant balance, Your balance is " + balance);
      }
      else{
        balance = balance - ammount;
        console.log("withdraw "+ammount+" and current balance is "+balance);
      }
    },
    
    "checkBalance": () => {
      console.log("Your balance is "+balance);
    }
  }
}

// createBankAccount function life is complete here.
const koushikAccount = createBankAccount(500);

// Currently we have only koushikAccount() function to perform operations.

// koushikAccount is now an object with 3 functions
console.log(koushikAccount);
koushikAccount.deposite(500);
koushikAccount.withdraw(1100);
koushikAccount.withdraw(400);
koushikAccount.checkBalance();

/*
Output:
{
  deposite: [Function: deposite],
  withdraw: [Function: withdraw],
  checkBalance: [Function: checkBalance]
}
Deposited 500 and Current balance is 1000
Insufficiant balance, Your balance is 1000
withdraw 400 and current balance is 600
Your balance is 600

*/




