import type React from "react"
import { useEffect, useRef } from "react"

type TProps = {
    draw: (context: CanvasRenderingContext2D, frameCount: number) => void
}

function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement) {

    const { width, height } = canvas.getBoundingClientRect()

    if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
        return true
    }

    return false
}

const predraw = (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    context.save()
    resizeCanvasToDisplaySize(canvas)
    const { width, height } = context.canvas
    context.clearRect(0, 0, width, height)
}


const Canvas: React.FC<TProps> = (props) => {
    const { draw } = props
    const canvasRef = useRef(null)



    useEffect(() => {

        const canvas = canvasRef.current as unknown as HTMLCanvasElement
        const context = canvas.getContext('2d') as CanvasRenderingContext2D
        let frameCount = 0
        let animationFrameId: number

        const render = () => {
            frameCount++
            predraw(context, canvas)
            resizeCanvasToDisplaySize(canvas)
            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])

    return (
        <canvas ref={canvasRef} />
    )
}

const Hero = () => {
    const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
        ctx.fill()
    }

    return <Canvas draw={draw} />
}

export default Hero