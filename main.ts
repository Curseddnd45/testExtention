//% weight=100 color=#5C81A6 icon="\uf6d6" block="Dog Controller"
namespace dogController {

    export enum Paw {
        //% block="left paw"
        Left,
        //% block="middle paw"
        Middle,
        //% block="right paw"
        Right
    }

    let pawStates: boolean[] = [false, false, false]
    let tailFrame = 0
    let tailSprite: Sprite = null

    // Sample tail images (looping wag)
    const tailFrames: Image[] = [
        img`
            . . . . .
            . . 1 . .
            . 1 1 1 .
            . . 1 . .
            . . . . .
        `,
        img`
            . . . . .
            . 1 . . .
            1 1 1 . .
            . 1 . . .
            . . . . .
        `,
        img`
            . . . . .
            . . 1 . .
            . 1 1 1 .
            . . 1 . .
            . . . . .
        `,
        img`
            . . . . .
            . . . . 1
            . . 1 1 1
            . . . 1 .
            . . . . .
        `
    ]

    //% block="set tail sprite %sprite"
    export function setTailSprite(sprite: Sprite): void {
        tailSprite = sprite
    }

    //% block="update paw states"
    export function updatePawStates(): void {
        pawStates[Paw.Left] = controller.left.isPressed()
        pawStates[Paw.Middle] = controller.up.isPressed()
        pawStates[Paw.Right] = controller.right.isPressed()
    }

    //% block="is %paw paw pressed"
    export function isPawPressed(paw: Paw): boolean {
        return pawStates[paw]
    }

    //% block="wag tail"
    export function wagTail(): void {
        if (tailSprite) {
            tailFrame = (tailFrame + 1) % tailFrames.length
            tailSprite.setImage(tailFrames[tailFrame])
        }
    }
}
