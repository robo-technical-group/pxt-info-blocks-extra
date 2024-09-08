# Extra Info Blocks Tutorial

## Customize your info panels! @unplugged

In this tutorial, you will learn about the new blocks
in the Info drawer added by this extension!

## Start your engines!

First, let's add some player info to the screen so that we can see the
work that we do later.

-   Add a   
``||info:set score to (0)||``   
block to your   
``||loops(info):on start||`` container.
-   Also, add a   
``||info:set life to (3)||``   
block to your   
``||loops(info):on start||`` container.

Feel free to give your player a different score and number of lives!

Run your project to check your code.

View the hint if you need some help.

```blocks
info.setScore(0)
info.setLife(3)
```

## Change that font!

Now, let's change the font color.

-   Add a   
``||info:set info font color to ( )||``   
block to your   
``||loops(info):on start||`` container.
-   Select any color that you like from the color picker.

Run your project to see your changes!

View the hint if you need some help.

```blocks
info.setScore(0)
info.setLife(3)
// @highlight
info.blockSetFont(5)
```

## Borders!

Now, let's change the border color.

-   Add a   
``||info:set info border color to ( )||``   
block to your   
``||loops(info):on start||`` container.
-   Select any color that you like from the color picker.

Run your project to see your changes!

View the hint if you need some help.

```blocks
info.setScore(0)
info.setLife(3)
info.blockSetFont(5)
// @highlight
info.blockSetBorder(6)
```

## What's your background?

Now, let's change the background color in those info blocks.

-   Add a   
``||info:set info background color to ( )||``   
block to your   
``||loops(info):on start||`` container.
-   Select any color that you like from the color picker.

Run your project to see your changes!

View the hint if you need some help.

```blocks
info.setScore(0)
info.setLife(3)
info.blockSetFont(5)
info.blockSetBorder(6)
// @highlight
info.blockSetBg(8)
```

## Now THAT'S an icon!

Now, let's change the icon that indicates the number of lives that
the player has.

-   Add a   
``||info:set life icon to ( )||``   
block to your   
``||loops(info):on start||`` container.
-   Draw a new icon for your life indicator.   
**Note**: Change the canvas size to 8x8. If you use the default size of
16x16, then the icon will look too big.

Run your project to see your changes!

View the hint if you need some help.

```blocks
info.setScore(0)
info.setLife(3)
info.blockSetFont(5)
info.blockSetBorder(6)
info.blockSetBg(8)
// @highlight
info.blockSetLifeIcon(img`
    3 . . . . . 3 . 
    . 3 . . . 3 . . 
    . . 3 . 3 . . . 
    . . . 3 . . . . 
    . . 3 . 3 . . . 
    . 3 . . . 3 . . 
    3 . . . . . 3 . 
    . . . . . . . . 
    `)
```

## Conclusion @unplugged

Congratulations! You've tried out all of the new blocks!

Try these new blocks in your own projects.

Have fun!

```ghost
info.setScore(0)
info.setLife(3)
info.blockSetLifeIcon(img`
    3 3 3 3 3 3 3 3 
    . 3 2 2 2 2 2 3 
    . . 3 2 2 2 2 3 
    . . . 3 2 2 2 3 
    . . . . 3 2 2 3 
    . . . . . 3 2 3 
    . . . . . . 3 3 
    . . . . . . . 3 
    `)
info.blockSetFont(5)
info.blockSetBorder(6)
info.blockSetBg(8)
```

```package
info_extra=github:robo-technical-group/pxt-info-blocks-extra
```
