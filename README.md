# etch-a-sketch
## About
Etch-a-Sketch is browser based adaption of a mechanical drawing toy. You can draw things by hovering mouse over sketching box.

Live preview: https://danijelgomola.github.io/etch-a-sketch

## How It Works
By default, grid is 10x10 (10 squares in each row and column). You can easily change grid size with Create grid option.

> [!NOTE]
> Maximum grid size is limited to 100x100 to avoid any perfomance issues

You have two separate options for drawing: colorize and monochrome. Colorize option colors each individual square using random color with 256 possible values. Monochrome option colors individual squares with black color.

Reset button resets the current sketch and defaults to 10x10 grid.

> [!CAUTION]
> Clicking on reset button automatically reset the sketch to default behavior without previously asking for user confirmation.