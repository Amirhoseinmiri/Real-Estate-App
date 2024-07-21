import { ConfigProvider } from "antd";
import React from "react";

const ThemeProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#1b4242",
            borderRadius: 4,
            colorBorder: "#1b4242",
          },
          components: {
            Button: {
              controlHeight: 40,
              boxShadow: "none",
              colorPrimaryActive: "#1b4242",
              controlOutline: "none",
            },
            Input: {
              controlHeight: 42,
              boxShadow: "none",
              activeShadow: "none",
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </div>
  );
};

export default ThemeProviders;
