import jsPDF from "jspdf";
import html2canvas from "html2canvas";

window.html2canvas = html2canvas;

const makePDF = () => {
  html2canvas(document.body).then(canvas => {
    let pdf = new jsPDF("p", "mm", "a4");
    pdf.addHTML(document.getElementById("makePdf"), () => {
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 1, 0, 211, 298);
    });
    let ps_filename = "QR_CODE";
    pdf.save(ps_filename + ".pdf");
  });
};
export default makePDF;
