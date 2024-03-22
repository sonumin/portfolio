import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import useWindowSize from "./useWindowSize";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Dogiary = () => {
	const windowSize = useWindowSize();
	const [numPages, setNumPages] = useState(0);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
		setPageNumber(1);
	}

	return (
		<div onContextMenu={(e) => e.preventDefault()}>
			<Document
				file={`${process.env.PUBLIC_URL}/pdf/dogiary.pdf`}
				onLoadSuccess={onDocumentLoadSuccess}>
				{Array.from(new Array(numPages), (_, index) => (
					<Page
						width={windowSize.width}
						height={windowSize.height}
						key={index}
						pageNumber={index + 1}
						renderAnnotationLayer={false}
					/>
				))}
			</Document>
		</div>
	);
};

export default Dogiary;
