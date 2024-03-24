function realizarCita(imageData, partes, nombreCliente, apellidoCliente) {
    const doc = new jsPDF();
    doc.setFillColor(28,41,51);
    doc.rect(0,0,220,60,'f');
    doc.addImage(imageData, 10, 8, 106, 34);
    doc.setFontSize(14);
    doc.setFontType("bold");
    doc.setTextColor(255, 255, 255);
    doc.text('WWSOLAR CALL CENTER NICA 2023', 12, 50);
    let fechadoc = partes[2] + '_' + partes[1] + '_' + partes[0];
    const docpdf = `${nombreCliente} ${apellidoCliente} ${fechadoc}.pdf`;
    doc.save(docpdf);

}

