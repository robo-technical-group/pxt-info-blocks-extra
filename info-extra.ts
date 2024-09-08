/**
 * Additional blocks for the info toolbox in MakeCode Arcade.
 * Surfaces some additional built-in functions.
 */
//% groups=['Customize']
namespace info {
    //% block="set info background color to $color"
    //% blockId=info_set_bg_color
    //% group='Customize'
    //% color.shadow="colorindexpicker"
    //% hidden
    export function blockSetBg(color: number): void {
        info.setBackgroundColor(color)
    }

    //% block="set info border color to $color"
    //% blockId=info_set_border_color
    //% group='Customize'
    //% color.shadow="colorindexpicker"
    //% hidden
    export function blockSetBorder(color: number): void {
        info.setBorderColor(color)
    }

    //% block="set info font color to $color"
    //% blockId=info_set_font_color
    //% group='Customize'
    //% color.shadow="colorindexpicker"
    //% hidden
    export function blockSetFont(color: number): void {
        info.setFontColor(color)
    }

    //% block="set life icon to $img"
    //% blockId=info_set_life_icon
    //% group='Customize'
    //% img.shadow="screen_image_picker"
    //% hidden
    export function blockSetLifeIcon(img: Image): void {
        info.setLifeImage(img)
    }
}