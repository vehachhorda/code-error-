import { Loader2 } from "lucide-react";
import { PropsWithChildren } from "react";
import { Button as ShadButton } from "./ui/button";
import { cn } from "@/lib/utils";

type ButtonProps = PropsWithChildren & {
  onClick: () => void;
  className?: string;
  loading?: boolean;
};

function Button({ loading, children, ...rest }: ButtonProps) {
  return (
    <ShadButton {...rest} disabled={loading}>
      {loading ? (
        <div className="flex gap-2">
          <Loader2 className={cn("animate-spin", "h-5 w-5")} />
          <p>Please wait</p>
        </div>
      ) : (
        children
      )}
    </ShadButton>
  );
}

export default Button;
