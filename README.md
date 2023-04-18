# mouse-click-highlight

The idea is to highlight whenever a User clicks underneath the cursor on the page, no matter where the cursor is.

## Goal

The goal was to make a basic shape appear in the same spot the cursor is placed when clicked.

## How it works

By listening to the user click a new "div" is created in the same place where the cursor is.

We can get the position of the cursor easily with the events of the click listener and that's where we want to create a "div". The "div" position must be set to absolute so that it can be outside the flow of the page and can exist everywhere.

Then after some timeout the "div" is deleted. This "divs" need to have individual ids to do so.


You can add it style and animations to make it look and feel better.


Any tips or recomendations are welcome :)
