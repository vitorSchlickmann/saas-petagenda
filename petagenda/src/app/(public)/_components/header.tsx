import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Header() {
    return(
        <header className="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-white">
            <div className="container mx-auto flex items-center justify-between">
                <Link className="text-3x1 font-bold text-zinc-900" href='/' >Pet<span className="text-orange-400">AGENDA</span></Link>

                <nav className="hidden md:flex items-center">
                    <a href="#">Petshops</a>
                </nav>

                <Sheet>
                    <SheetTrigger asChild className="md:hidden">
                        <Button className="text-black hover:bg-transparent cursor-pointer" variant='ghost' size='icon'>
                            <Menu className="w-6 h-6"/>
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-[240px] sm:w-[300px] z-[9999]">
                        <SheetTitle>Veja nossos links.</SheetTitle>
                        <SheetHeader></SheetHeader>
                        <SheetDescription>
                            <nav>
                                <a href="#">PetShops</a>
                            </nav>
                        </SheetDescription>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}