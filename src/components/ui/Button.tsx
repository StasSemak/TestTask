import React from "react"
import { cn } from "../../lib/utils"
import { Loader2 } from "lucide-react"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
    ({className, children, isLoading, ...props}, ref) => {
        return(
            <button
                className={cn("btn", className)}
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

export default Button