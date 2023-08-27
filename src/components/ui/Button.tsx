import React from "react"
import { cn } from "../../lib/utils"
import { Loader2 } from "lucide-react"
import { VariantProps, cva } from "class-variance-authority"

const buttonVariants = cva(
    'inline-flex w-fit items-center justify-center rounded-lg transition-all disabled:opacity-60 disabled:pointer-events-none',
    {
        variants: {
            variant: {
                default: 'btn',
                ghost: 'btn-ghost'
            },
            size: {
                default: 'py-3 px-8',
                sm: 'p-2.5'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        },
    }
)

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
    ({className, children, variant, size, isLoading, ...props}, ref) => {
        return(
            <button
                className={cn(buttonVariants({variant, size, className}))}
                ref={ref}
                disabled={isLoading}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 w-4 h-4 animate-spin"/>}
                {children}
            </button>
        )
    }
)
Button.displayName = 'Button'

export { buttonVariants }
export default Button