# bank-tech-test

**This week at Makers we needed to build a simple banking account app**
We were informed we did not need to link the app to a database or implement a command line interface that takes input from STDIN. 

**The user story was as follows**

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see
```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```
**How to run**
1) In order to run the application first glone the repo

``` git clone git@github.com:Steven-Klavins/bank-tech-test.git ```

2) Following this navigate to the **SpecRunner.htmlSpecRunner.html** and open it in Chrome,
open Chromes consol. The chorme console can be acessed by right clicking or the page, and selecting inspect,
following this a consol tab will be available 

3) Thats it, your good to go!

**Here is the app in use**
![](images/Screenshot.png)

**The Commands**

``` account new Account() ```

Creates a new instance of a users account, you can name can talor this to your desired name (steven new Account())
