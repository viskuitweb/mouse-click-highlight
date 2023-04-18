# mouse-click-highlight

Highlight on cursor position whenever a user clicks on the page.

  ### Goal

  The goal was to make a basic shape appear in the same spot the cursor is when clicked.
  

## How it works

By listening to the user click a new "div" is created in the same place where the cursor is.

We can get the position of the cursor easily with the events of the click listener and that's where we want to create a "div". The "div" position must be set to absolute so that it can be outside the flow of the page and can exist everywhere.

Then after some timeout the "div" is deleted. This "divs" need to have individual ids to do so.

You can add it style and animations to make it look and feel better.


  ## v2

  Started playing with the animations and make it look smoother. I think it would work better with a modified pointer with a simple circle shape.

    ### Problems

    If spammed, at some point it doesn't show the hightlights anymore. It gets back to normal after a short while


Any tips are welcome
