import React from "react";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
interface PdfRendererProp {
  url: string;
}

const PDFRenderer = ({ url }: PdfRendererProp) => {
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
      <div className="flex-1 w-full max-h-screen">
        <div>
          <Document file={url}></Document>
        </div>
      </div>
    </div>
  );
};

export default PDFRenderer;
