
import { CssBaseline } from "@mui/material";

export const metadata = {
  title: "Product List",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}
