# Bank tech test

**About**

This week at Makers we were asked to build a simple bank account application. The requirements of the project specified we did not need to link the app to a database, nor did we need to implement a command-line interface. Despite not having these things I feel they could easily be implemented in the future if needed as this is a rather small project and it has minimal dependencies.

This project was created using Javascript and the Jasmine standalone testing framework and was designed leading with TDD principles. Throughout this project piece by piece I refactored the code in order to make my tests pass, I tried my best to ensure no piece of code was dependent on another. The only scenarios where code is coupled is the formatting methods which I believe to be a suitable design choice.

**The user story we were provided was as follows;**

**Given** a client makes a deposit of 1000 on 10-01-2012

**And** a deposit of 2000 on 13-01-2012

**And** a withdrawal of 500 on 14-01-2012

**When** she prints her bank statement  

**Then** she would see;

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

**How to run**

1. In order to run the application first clone the repo.

`git clone git@github.com:Steven-Klavins/bank-tech-test.git`

2. Following this ensure you have Node.js installed, you can check to see if it is already installed by running the command;

`node -v`

If node is not installed on your system you can find the official installation guide [here](https://nodejs.org/en/)

3. Navigate to the directory "src" and run the following command;

`node -i -e "$(< bank-tech-test.js)"`

4. That's it, your good to go!

**Here is the app in use**
![](images/Screenshot.png)

**The Commands**

**new Account()**

`account new Account()`

Creates a new instance of a users account, you can tailor this to your desired name (steven new Account()). The account will be initialized with a balance of '0' and the date will set at present day.

For the purposes of this walk through im using the account name 'account'.

**account.withdraw**

`account.withdraw(number)`

You can use the withdraw method in order to withdraw money from the account, however, you will receive an error specifying there are not sufficient funds if you haven't yet made a deposit. Enter the value to withdraw in the following format (account.withdraw(10)), this will withdraw 10.00 dollars/pounds/rupees, no specific currency is specified.

**account.deposit**

`account.deposit(number)`

This feature runs in the exact same manner as withdraw however, as you could most likely guess it adds money to the account as opposed to subtracting it.

**account.showTransactions**

`account.showTransactions()`

Running this command will log a table to your console showing all transactions that have been made in the duration of your session, as this program does not have a database keep in mind they won't be preserved if you start a new session.
