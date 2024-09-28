let gstRate = 0;
let state = '';
let billNumber = 0;

// Initialize bill number from localStorage or start with 1
function initializeBillNumber() {
    const storedBillNumber = localStorage.getItem('billNumber');
    billNumber = storedBillNumber ? parseInt(storedBillNumber, 10) : 1;
}

// Save bill number to localStorage
function saveBillNumber() {
    localStorage.setItem('billNumber', billNumber);
}

function selectGstRate(rate) {
    gstRate = rate;
    document.querySelectorAll('.button-group button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`gst-${rate}`).classList.add('active');
}

function selectState(selectedState) {
    state = selectedState;
    document.querySelectorAll('.button-group button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`${selectedState}-state`).classList.add('active');
}

function calculateGST() {
    const quantity = parseFloat(document.getElementById('quantity').value);
    const unitPrice = parseFloat(document.getElementById('unit-price').value);

    if (isNaN(quantity) || isNaN(unitPrice) || quantity <= 0 || unitPrice <= 0 || gstRate <= 0 || !state) {
        alert('Please enter valid values for quantity, price, GST rate, and state.');
        return;
    }

    const singlePieceValue = unitPrice * 100 / (100 + gstRate);
    const totalPriceNoTax = quantity * singlePieceValue;

    let sgst = 0;
    let cgst = 0;
    let igst = 0;

    if (state === 'same') {
        sgst = (totalPriceNoTax * gstRate) / 200;
        cgst = sgst;
    } else if (state === 'different') {
        igst = (totalPriceNoTax * gstRate) / 100;
    }

    const totalTax = sgst + cgst + igst;
    const totalPriceAfterTax = totalPriceNoTax + totalTax;

    document.getElementById('result').innerHTML = `
        <table>
            <tr><td>Value of Single Piece (without tax):</td><td>₹${singlePieceValue.toFixed(2)}</td></tr>
            <tr><td>Total Price (without tax):</td><td>₹${totalPriceNoTax.toFixed(2)}</td></tr>
            <tr><td>SGST:</td><td>₹${sgst.toFixed(2)}</td></tr>
            <tr><td>CGST:</td><td>₹${cgst.toFixed(2)}</td></tr>
            <tr><td>IGST:</td><td>₹${igst.toFixed(2)}</td></tr>
            <tr><td>Total Tax:</td><td>₹${totalTax.toFixed(2)}</td></tr>
            <tr><td>Total Price (after tax):</td><td>₹${totalPriceAfterTax.toFixed(2)}</td></tr>
        </table>
    `;
}

function displayValues() {
    calculateGST();
    // Show the "Generate PDF" button
    document.getElementById('generate-pdf').style.display = 'inline-block';
}

function confirmAndGeneratePDF() {
    // Ask for user consent before generating the PDF
    if (confirm('Do you want to generate the PDF?')) {
        generatePDF();
    }
}

function generatePDF() {
    // Increment bill number
    billNumber++;
    saveBillNumber();

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add bill number to the PDF
    doc.text(`Bill Number: ${billNumber}`, 10, 10);

    // Add the table to the PDF
    doc.autoTable({ html: '#result table' });

    // Save the PDF
    doc.save(`GST_Calculator_Bill_${billNumber}.pdf`);
}

// Initialize bill number when the page loads
initializeBillNumber();
