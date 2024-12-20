# Astronomy Date Formatter

## Overview

`astronomy-date-formatter` is a JavaScript package designed to format dates using astronomical themes. It supports various themes such as zodiac signs and lunar phases. The package integrates real lunar calculations for enhanced date formatting.

## Features
 - Zodiac-based date formatting.
 - Lunar phase formatting.
 - Customizable    themes for different astronomical references.

## Installation

You can install `astronomy-date-formatter` using npm:

    npm install astronomy-date-formatter
## API

### `formatWithTheme(date, theme)`

Formats the given date based on the specified theme.

-   **Parameters**:
    -   `date` (_Date_): The date to format.
    -   `theme` (_string_): The theme to apply (`'zodiac'` or `'lunar'`).
-   **Returns**:
    -   _string_: Formatted date string.

### Available Themes

1.  **`zodiac`**: Formats the date based on zodiac signs.
2.  **`lunar`**: Formats the date based on lunar phases.

### Example

    const formattedZodiacDate = formatWithTheme(new Date(), 'zodiac');
    console.log(formattedZodiacDate); // "20th Sol of Sagittarius 2024"
    
    const formattedLunarDate = formatWithTheme(new Date(), 'lunar');
    console.log(formattedLunarDate); // "Lunar Phase: Full Moon"

## Contributing

Contributions to this package are welcome! If you find a bug or have an enhancement idea, please feel free to submit an issue or pull request.

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature-branch`).
3.  Make your changes and commit them (`git commit -m 'Add new feature'`).
4.  Push to the branch (`git push origin feature-branch`).
5.  Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.