Question 1 :  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
**   answer  **   :  "getElementById" = select a single element by id . 
             "getElementsByClassName" = select all element with a specific class and return an htmlcollection   
"querySelector / querySelectorAll"    = selects the first element matching a CSS selector, while `querySelectorAll` selects all matching elements and                                            returns a NodeList.
 

Question 2 : How do you create and insert a new element into the DOM?

** answer ** :  1. Create a new element 
                2. Set content and attributes 
                 3. Insert into the DOM 

           example : const newDiv=document.createElement(" div") 

                     newDiv.textContent="This is new Div " 
                     newDiv.className=" class-1" 
                     newDiv.id ="new-id" 

                     document.body.appendchild(newDiv) 

Question 3  : What is Event Bubbling and how does it work? 

** answer ** : When an event occurs on an element, it first triggers on that element (the target) and then bubbles up to its parent, grandparent, and so on, until it reaches the document root. 

         example : let child = document.getElementById('child');
                    let parent = document.getElementById('parent');

                     child.addEventListener('click', function() {
                            alert('Child clicked');
                        });

                      parent.addEventListener('click', function() {
                     alert('Parent clicked');
                       });

Question 4   : What is Event Delegation in JavaScript? Why is it useful? 

** answer ** : Handling event and Child Elements by adding a EvnetListner to a parent elements . 

            example: let container = document.getElementById('container');

            container.addEventListener('click', function(event) {
                      if(event.target.tagName === 'BUTTON') {
                             alert(event.target.textContent + ' clicked');
                           }
                                });

Question  5   : What is the difference between preventDefault() and stopPropagation() methods? 

** answer ** : 

preventDefault() → Stops the browser’s default action (e.g., link navigation, form submission).


stopPropagation() → Stops the event from bubbling or capturing to parent/ancestor elements.
     


                     
