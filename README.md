# YouTube Element Deletion UserScript

This UserScript allows you to delete the HTML content of a specific element on YouTube pages. You can specify the target element using a CSS selector.

## Installation

1. First, you need a browser extension that supports UserScripts. For example, you can use Tampermonkey for Chrome or Greasemonkey for Firefox.
2. Install the browser extension.
3. Once the extension is installed, click on its icon in your browser and choose "Create a new script".
4. Copy the script provided in `script.js` and paste it into the editor window.
5. Save the script.

## Usage

After installing the script, it will run automatically whenever you visit a YouTube page. By default, it will attempt to delete the HTML content of the element specified by the CSS selector `ytd-rich-section-renderer.style-scope:nth-child(3)`. You can adjust this selector in the script to target a different element if needed.

## License

This script is provided under the MIT License. Feel free to modify and distribute it according to your needs.
