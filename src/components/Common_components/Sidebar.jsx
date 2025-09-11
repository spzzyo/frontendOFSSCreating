import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { NavLink, useLocation } from 'react-router-dom';
import { routes } from '../../routes/routes';

const palette = {
  50:  "#A8FFBA",
  100: "#56FFA5",
  200: "#00FF85",
  300: "#00DE6B",
  400: "#00A950",
  500: "#008C43",
  600: "#005F2B",
  700: "#003A1A",
  800: "#131917",
  900: "#090D0A",
};

function MySidebar({ logoText = 'Finance' }) {
  const location = useLocation();
  const bgBase = palette[700];           // black shell
  const bgSurface = palette[900];  // main green surface
  const bgInset = palette[800];    // chips/cards
  const divider = palette[800];
  const textPrimary = "#E8F3EE";
  const textSecondary = "#B3CFC0";
  const accent = palette[400];
  const accentHover = palette[200];
  const accentSoft = "rgba(0, 169, 80, 0.10)";
  const ring = palette[500];

  return (
    <Sidebar
      style={{
        background: bgBase,
        borderRadius: 20,
        margin: 12,
        width: 260,
        height: "calc(100vh - 24px)",
        position: "fixed",
        padding: 0,
        color: textPrimary,
        boxShadow: "0 10px 40px 8px rgba(0,0,0,0.22)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: `1px solid ${bgInset}`,
      }}
    >
      {/* Header */}
      <div
        style={{
          background: bgSurface,
          borderBottom: `1px solid ${divider}`,
          textAlign: "center",
          padding: "28px 0 18px 0",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
            background: bgInset,
            width: 54,
            height: 54,
            borderRadius: "50%",
            boxShadow: "0 2px 10px #0008",
          }}
        >
          <span role="img" aria-label="Logo" style={{ fontSize: 28, color: "#FFD600" }}>🧩</span>
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: ".06em",
            textTransform: "uppercase",
            color: textPrimary,
            opacity: 0.97,
            marginTop: 2,
          }}
        >
          {logoText}
        </div>
      </div>
      {/* Menu */}
      <Menu
        style={{
            background: bgSurface,
            padding: "32px 0",
            flex: "1 1 auto",
            minHeight: 0, 
}}
        menuItemStyles={{
          button: ({ active }) => ({
            background: active ? accentSoft : "transparent",
            color: active ? textPrimary : textSecondary,
            margin: "12px 22px",
            borderRadius: 15,
            padding: "13px 18px",
            fontWeight: active ? 700 : 500,
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            outline: "none",
            boxShadow: active ? `0 0 0 1.5px ${accent}` : "none",
            border: "none",
            transition: "background 120ms, color 120ms, box-shadow 140ms",
          }),
        }}
      >
        {routes.map(({ path, name, icon }) => {
          const isActive = location.pathname === path;
          return (
            <MenuItem
              key={path}
              component={
                <NavLink
                  to={path}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    outline: "none",
                  }}
                  end
                />
              }
              active={isActive}
              icon={
                icon && (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 38,
                      height: 38,
                      marginRight: 16,
                      background: isActive ? accent : bgInset,
                      borderRadius: "50%",
                      color: isActive ? "#181E17" : textPrimary,
                      fontSize: 22,
                      boxShadow: isActive
                        ? "0 4px 16px rgba(0,255,133,0.13)"
                        : "inset 0 0 0 1px rgba(255,255,255,0.03)",
                    }}
                  >
                    {icon}
                  </span>
                )
              }
            >
              {name}
            </MenuItem>
          );
        })}
      </Menu>
      {/* Footer */}
      <div
        style={{
          marginTop: "auto",
          padding: "18px 0 18px 0",
          borderTop: `1px solid ${divider}`,
          background: bgSurface,
          textAlign: "center",
        }}
      >
        <span style={{ color: textPrimary, fontSize: 16, marginRight: 4 }}>
          Need help?
        </span>
        <a
          href="#"
          style={{
            color: accent,
            fontSize: 16,
            textDecoration: "none",
            borderBottom: `1.5px dotted ${accent}`,
            transition: 'color 100ms',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = accentHover)}
          onMouseLeave={e => (e.currentTarget.style.color = accent)}
        >
          Contact support
        </a>
      </div>
    </Sidebar>
  );
}

export default MySidebar;