# debudding note:

1. fontawesome gird space issue
Problem : No idea how to give some space in between each icons
solved : https://stackoverflow.com/questions/27969485/space-between-link-and-icon-fontawesome (see fontaWesome document) 

2. How to make grid btw?
Problem: this revision step caused some traumatic depression.
solved:
display: grid, then give the following:
    padding: 10%; /* padding is core of layout's location */
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-content: center;

3. global font colour issue
Problem: looks like I set up #DB7093 colour somewhere else. CAN'T FIND IT.
Solved(Partially) : designate a specific font color on each page.  

4. use -> do not use emailjs
This is due to security reason. At moment, I am not sure how to encrypt my id section when the page communicate with its server side.
If I do not fully understand, then use this once I do so. Which is my philosophy.
https://www.emailjs.com/docs/examples/reactjs/

5. Bloody white space on the right hand side never disappears ONCE I resize it to mobile one.
https://stackoverflow.com/questions/4617872/white-space-showing-up-on-right-side-of-page-when-background-image-should-extend

6. How to relocate automatically as size fits? (responsive, 'works' section) 
- unsolved yet.

7. mobile menu is not functioning!
- unsolved yet.