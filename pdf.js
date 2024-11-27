function generatePDF() {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    // Cabeçalho
    pdf.text('Relatório de Orçamento', 10, 10);
    pdf.text('Nome do item', 10, 20);
    pdf.text('Quantidade', 60, 20);
    pdf.text('Preço Unitário', 110, 20);
    pdf.text('Total', 160, 20);

    // Variável para posição y inicial das linhas dos itens
    let yPosition = 30;
    let total = 0;  // Para calcular o total antes do desconto

    items.forEach((item) => {
        pdf.text(item.name, 10, yPosition);                       // Nome do item
        pdf.text(item.quantity.toString(), 60, yPosition);        // Quantidade
        pdf.text(`R$ ${item.price.toFixed(2)}`, 110, yPosition);  // Preço unitário
        pdf.text(`R$ ${item.total.toFixed(2)}`, 160, yPosition);  // Total do item
        
        total += item.total;  // Acumula o total geral
        yPosition += 10;      // Incrementa a posição y para a próxima linha
    });

    // Calcula o desconto
    const discount = parseFloat(document.getElementById("discount").value) || 0;
    const discountAmount = total * (discount / 100);
    const totalWithDiscount = total - discountAmount;

    // Exibir total e desconto ao final do PDF
    yPosition += 10;
    pdf.text(`Total sem desconto: R$ ${total.toFixed(2)}`, 10, yPosition);
    yPosition += 10;
    pdf.text(`Desconto aplicado: ${discount}% (R$ ${discountAmount.toFixed(2)})`, 10, yPosition);
    yPosition += 10;
    pdf.text(`Total com Desconto: R$ ${totalWithDiscount.toFixed(2)}`, 10, yPosition);

    // Salva o PDF com o nome 'relatorio.pdf'
    pdf.save('relatorio.pdf');
}
