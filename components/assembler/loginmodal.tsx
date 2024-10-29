import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
  } from "@/components/ui/dialog"
import { Button } from "../ui/button"

  export default function LoginTrigger({children}: {children: React.ReactNode}) {
    return (
      <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline" className="bg-black outline-none">
                {children}
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w[425px]">
            <DialogHeader>
                <DialogTitle>Join Catseye.</DialogTitle>
                <DialogDescription>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quo ab velit, vel suscipit reiciendis saepe in possimus ad quae expedita obcaecati quam nam incidunt. Ullam consequatur accusantium rerum eaque.
                </DialogDescription>
            </DialogHeader>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
        </DialogContent>
      </Dialog>
    )

  }