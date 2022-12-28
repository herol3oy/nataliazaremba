import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    body: "'Poppins', sans-serif",
  },
  styles: {
    global: () => ({
      _selection: {
        background: "hsl(189, 61%, 13%)",
        color: " hsl(96, 100%, 50%)",
      },
    }),
  },
});

export default customTheme;
