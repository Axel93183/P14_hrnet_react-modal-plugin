# react-modal-plugin-hrnet-agmx

A React plugin for displaying modals with a fade effect and customizable styles.

## Installation

To install the plugin, run the following command:

```bash
npm install react-modal-plugin-hrnet-agmx
```

## Usage

Here is an example of how to use the `ModalComponent` in your project:

```javascript
import React, { useState } from "react";
import ModalComponent from "react-modal-plugin-hrnet-agmx";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <ModalComponent
        isOpen={isModalOpen}
        onClose={closeModal}
        customOverlayClassName="my-custom-overlay"
        customContentClassName="my-custom-content"
        customOverlayStyle={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        customContentStyle={{ padding: "20px", borderRadius: "10px" }}
      >
        <h2>Example Modal</h2>
        <p>This is an example of a modal component with customizable styles.</p>
        <button onClick={closeModal}>Close</button>
      </ModalComponent>
    </div>
  );
};

export default App;
```

## Configuration

### `package.json`

- **Name**: `react-modal-plugin-hrnet-agmx`
- **Version**: `1.0.8`
- **Description**: A React modal plugin with fade effect and customizable styles
- **Main**: `lib/index.js`
- **Repository**: [GitHub Repository](https://github.com/Axel93183/P14_hrnet_react-modal-plugin)
- **Files**: Includes only the `lib` directory
- **Scripts**:
  - `build`: Transpiles the source code to the `lib` directory
  - `postbuild`: Copies CSS files to the `lib` directory
- **Keywords**: `react`, `modal`, `plugin`, `hrnet`, `react-modal`, `react-modal-plugin`
- **Author**: `agmx183`
- **License**: `ISC`
- **Dependencies**:
  - `react`: `^18.3.1`
  - `react-modal`: `^3.16.1`
- **DevDependencies**:
  - `@babel/cli`: `^7.25.6`
  - `@babel/core`: `^7.25.2`
  - `@babel/preset-env`: `^7.25.4`
  - `@babel/preset-react`: `^7.24.7`
  - `prettier`: `^3.3.3`

## Development

To build the plugin, use the following command:

```bash
npm run build
```

To format the code, you can use Prettier:

```bash
npx prettier . --write
```

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
