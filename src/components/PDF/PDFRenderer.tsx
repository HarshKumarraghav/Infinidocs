import React from "react";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const PDFRenderer = () => {
  return (
    <div className="w-full  rounded-md shadow flex flex-col items-center">
      <div className="h-14 w-full border-b bg-primary-foreground flex items-center justify-between px-2">
        <div className="flex items-center gap-1.5">
          <Button
            // disabled={currPage <= 1}
            // onClick={() => {
            //   setCurrPage((prev) => (prev - 1 > 1 ? prev - 1 : 1));
            //   setValue("page", String(currPage - 1));
            // }}
            variant="ghost"
            aria-label="previous page"
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button
            // disabled={currPage >= numPages}
            // onClick={() => {
            //   setCurrPage((prev) =>
            //     prev + 1 < numPages ? prev + 1 : numPages
            //   );
            //   setValue("page", String(currPage + 1));
            // }}
            variant="ghost"
            aria-label="next page"
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PDFRenderer;
