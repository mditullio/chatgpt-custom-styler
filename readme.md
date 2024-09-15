# ChatGPT Custom Styler Extension

This Chrome extension modifies the ChatGPT interface by adjusting the width of the left sidebar (chat history panel) to better suit your preferences.

## How It Works

The extension injects a content script that runs whenever you visit the ChatGPT website. The script selects the left sidebar element and changes its width to `400px`. It also removes a CSS class that sets a fixed width, ensuring the new width is applied.

## Installation

1. **Clone or Download the Repository**

   - Clone this repository to your local machine, or download the ZIP file and extract it.

2. **Load the Extension into Chrome**

   - Open Google Chrome.
   - Navigate to `chrome://extensions/`.
   - Enable **Developer mode** by toggling the switch in the top right corner.
   - Click on **Load unpacked**.
   - Select the folder containing the extension files.

3. **Verify the Extension**

   - The extension should now appear in your list of extensions.
   - Ensure that it is enabled.

## Usage

- Navigate to [ChatGPT](https://chatgpt.com/) in your browser.
- The left sidebar should now have a width of `400px`, providing more space for your chat history.

## Files

- **`manifest.json`**: Defines the extension's configuration and specifies when and where to run the content script.
- **`content.js`**: Contains the JavaScript code that modifies the page's styles.

## Customization

- **Adjust Sidebar Width:**

  - To change the sidebar width, modify the `leftColumn.style.width` value in `content.js`.

- **Modify Delay:**

  - If the styles are not applied consistently, you may need to adjust the delay duration in the `setTimeout` function.

## Code Explanation

The `content.js` script adjusts the width of the left sidebar on the ChatGPT page:

- **Event Listener:** The script waits for the document's ready state to change, then uses a `setTimeout` to ensure all elements are loaded.
- **Element Selection:** It selects the sidebar using specific class names. If the ChatGPT website updates its classes, you may need to adjust this selector in `content.js`.
- **Style Modification:** Sets the sidebar's width to `400px` and removes a class that restricts the width.

## Notes

- **Dynamic Class Names:**

  - Be aware that the ChatGPT website may update its class names or structure. If the extension stops working, you may need to update the selectors in `content.js` to match the new class names.

- **Adjusting the Delay:**

  - If the sidebar isn't modified as expected, you might need to adjust the `setTimeout` duration to wait longer for the elements to load, especially if you have a slow internet connection.

- **Further Customization:**

  - You can modify `content.js` to adjust other elements or styles on the page according to your needs.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Enjoy your customized ChatGPT experience!**
