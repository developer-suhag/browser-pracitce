//  ----------------------->> 1 <<----------------------------

setTimeout(() => {
    console.log('Wait aitache');
}, 3500);


//  ----------------------->> 2 <<----------------------------
const getNumber = () => {
    const number = prompt('What is your Favorite number?')
    if (number) {
        const convertNum = parseInt(number);
        const newNum = convertNum + 200;
        alert(newNum)
    } else {
        return;
    }
};

//  ----------------------->> 3 <<----------------------------

const showHref = () => {
    const askQues = confirm('Do you want to see your website href?')
    if (askQues) {
        const href = location.href;
        console.log(href);
    }
};

//  ----------------------->> 4 <<----------------------------
/* 
    Browser cookies is a small bits of text. 
    It stored some data to make the website more easier for visitor. 
    It's keep some important data like user name, password etc. 
    And when a user close the tab or window or shut down the computer or mobile it save on there browser and next time when they get back to that website, they can continue browsing where they left by the magic of cookie. Cookies save username and password that's why user don't need to login every time.
    If a user clear his/her browser cookie they will not be loged in any website anymore. And they have to login again.
    There are two types of cookies  - 
        1. sessional cookie
            - sessional use for a short time, when user close the tab all cookies deleted autometically.
        2. Parmanet cookie
            - permanet stay in user browser even they shut down the computer and revisit the website after a long, the permanent coockie will be there.
*/
//  ----------------------->> 5 <<----------------------------

/* 
difference between local stroage and session stroage

    local stroage                                            <---->                          session stroage
    --------------                                                                           ------------------
1.  data will be saved even the browser is closed                               data will be remove when user close the tab
2.  5-10 mb limit                                                                  5 mb limit
3.  local stroage has no expiration                                             sesstion stroage has expiration

*/

//  ----------------------->> 6 <<----------------------------

/* 
How does JavaScript code run on the browser?
JavaScript code run on a browser by JavaScript engine.
Nowadays every modern browser has JavaScript engine.
There different JavaScript engine in different browsers. For example in Chrome in JavaScript engine is V8 and in Firefox it is SpiderMonkey.
When running JavaScript create a loop to run code. 
JavaScript code are non-blocking and it runs asynchronously.
It create stack and queue. If any code need some times to run it keep that on the queue and run code from stack, after completing stack JavaScript start runing queue code.
*/

//  ----------------------->> 7 <<----------------------------

/* 
List of asynchronous 
1. setTimeout ()
2. setInterval ()
3. fetch
4. waiting for files
5. async await
*/

//  ----------------------->> 8 <<----------------------------
/* Event loop */
//  ----------------------->> 9,10 no next page <<----------------------------