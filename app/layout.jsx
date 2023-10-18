import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "PromptsGPT",
  description: "Discovere & share ChatGPT prompts",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div>
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
