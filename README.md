# GST Calculator

## Overview

The GST Calculator is a simple web application that allows users to calculate the Goods and Services Tax (GST) for various products or services. It takes user input for the amount and the applicable GST rate, then calculates and displays the total amount including GST. Additionally, the application generates a PDF of the bill, which can be downloaded.

## Features

- Input fields for the original amount and GST rate.
- Calculation of GST and the total amount.
- Display of the calculated result on the screen.
- Option to generate and download a PDF of the bill.
- Simple and intuitive user interface.

## Technologies Used

- **HTML/CSS/JavaScript**: For the front-end development and user interface.
- **JavaScript**: For the calculation logic and PDF generation.
- **jsPDF**: A JavaScript library used to generate PDF files.


## Usage

1. **Enter the Amount:**
   - Input the original amount for the product or service.

2. **Enter the GST Rate:**
   - Input the applicable GST rate (e.g., 5%, 12%, 18%, etc.).

3. **Calculate:**
   - Click the "Calculate" button to view the total amount including GST.

4. **Generate PDF:**
   - Click the "Generate PDF" button to download a PDF of the bill.

## Code Explanation

### HTML

- The main structure of the calculator is built using HTML, with input fields for the amount and GST rate, and buttons for calculation and PDF generation.

### CSS

- The CSS file contains styling for the layout, including grid systems, button styles, and responsive design elements to ensure the application looks good on different screen sizes.

### JavaScript

- The core logic of the calculator is written in JavaScript. It handles the following tasks:
  - Taking user inputs.
  - Performing the GST calculation.
  - Displaying the result on the screen.
  - Generating the bill in PDF format using the jsPDF library.

### Plugins Used

- **jsPDF**: This library is used to create the PDF version of the bill. The generated PDF includes the original amount, GST rate, calculated GST, and the total amount.
- **jsPDF autoTable Plugin**: This plugin extends `jsPDF` functionality to include tables in the PDF. The `autoTable` plugin allows for automatic table generation from HTML elements, which is used to display the calculated GST results in a tabular format.

## Example

Below is an example of how the GST Calculator can be used:

1. Enter an amount of `1000`.
2. Enter a GST rate of `18%`.
3. Click "Calculate" to see that the total amount including GST is `1180`.
4. Click "Generate PDF" to download the bill.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code follows the project's coding guidelines.


## Contact

For any inquiries or feedback, feel free to reach out:

- **Email**: [sharoffamruthesh@gmail.com](mailto:sharoffamruthesh@gmail.com)
- **GitHub**: [https://github.com/Amrutheshsharoff](https://github.com/Amrutheshsharoff)

---

Thank you for using the GST Calculator!
