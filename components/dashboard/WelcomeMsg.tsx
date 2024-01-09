import { PartyPopper } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function WelcomeMsg() {
  return (
    <Alert>
      <PartyPopper className="h-8 w-5" />
      <AlertTitle>Welcome to Sermona! </AlertTitle>
      <AlertDescription>
        We will provide tips on each page to help you navigate our application. 
      </AlertDescription>
    </Alert>
  );
}
