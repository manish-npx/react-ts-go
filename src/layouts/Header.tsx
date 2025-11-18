import { Link } from "react-router"
import { Button } from "../components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"

const Header = () => {
    return (
        <header className="bg-background border-b border-border p-4 flex justify-between items-center">
            <div className="text-lg font-bold">vPro</div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4">
                <Button asChild variant="ghost">
                    <Link to="/">Home</Link>
                </Button>

                <Button asChild variant="ghost">
                    <Link to="/blogs">Blogs</Link>
                </Button>
                <Button asChild variant="ghost">
                    <Link to="/form">Form</Link>
                </Button>

                <Button asChild variant="ghost">
                    <Link to="/todos">Todos</Link>
                </Button>
                <Button asChild variant="ghost">
                    <Link to="/about">About</Link>
                </Button>
            </nav>

            {/* Mobile Navigation */}
            <div className="md:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Menu</Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                            <Link to="/">Home</Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <Link to="/blogs">Blogs</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link to="/form">Form</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link to="/todos">Todos</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link to="/about">About</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}

export default Header
