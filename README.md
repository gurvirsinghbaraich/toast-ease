# Toast Ease

## Overview
Toast Ease is a lightweight JavaScript library designed to simplify the implementation of toast notifications in web applications. It provides a seamless way to display non-intrusive notifications to users, with built-in security against XSS (Cross-Site Scripting) attacks. One of its key features is the ability to hydrate toast data from the server to the client, ensuring consistent user experiences across server-side and client-side rendering.

## Features
1. **Server-to-Client Hydration:** Toast Ease allows you to seamlessly transfer toast data from the server to the client, ensuring that toast notifications remain consistent across different rendering environments.

2. **XSS Attack Protection:** The library includes robust XSS attack protection mechanisms to sanitize toast content, preventing malicious scripts from executing and enhancing the security of your application.

## Installation
You can install Toast Ease via npm:

```bash
npm install toast-ease
```

## Usage
```tsx
// Layout.tsx
import { ToastBox } from "toast-ease";

// Component to register toast that were triggered on server.
import { ServerToastRegister } from "toast-ease/server";


export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        <ServerToastRegister />
        <ToastBox duration={3} toastsVisible={5} />

        <main>{props.children}</main>
      </body>
    </html>
  )
}
```
---
```tsx
// Importing a toast on the server
import { toast } from "toast-ease/server";

// Importing a toast on the client
import { toast } from "toast";

// Creating a toast
toast({
  title: "string",
  description: "string"
});
```

## Contributing
Contributions to Toast Ease are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the GitHub repository.

## License
Toast Ease is licensed under the MIT License. See the LICENSE file for details. Feel free to adjust it further to fit your project's specific needs!
