// import React from 'react';
// import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import { NavLink, useLocation } from 'react-router-dom';
// import { routes } from '../../routes/routes';

// const palette = {
//   50:  "#A8FFBA",
//   100: "#56FFA5",
//   200: "#00FF85",
//   300: "#00DE6B",
//   400: "#00A950",
//   500: "#008C43",
//   600: "#005F2B",
//   700: "#003A1A",
//   800: "#131917",
//   900: "#090D0A",
// };

// function MySidebar({ logoText = 'Finance' }) {
//   const location = useLocation();
//   const bgBase = palette[700];           // black shell
//   const bgSurface = palette[900];  // main green surface
//   const bgInset = palette[800];    // chips/cards
//   const divider = palette[800];
//   const textPrimary = "#E8F3EE";
//   const textSecondary = "#B3CFC0";
//   const accent = palette[400];
//   const accentHover = palette[200];
//   const accentSoft = "rgba(0, 169, 80, 0.10)";
//   const ring = palette[500];

//   return (
//     <Sidebar
//       style={{
//         background: bgBase,
//         borderRadius: 20,
//         margin: 12,
//         width: 260,
//         height: "calc(100vh - 24px)",
//         position: "fixed",
//         padding: 0,
//         color: textPrimary,
//         boxShadow: "0 10px 40px 8px rgba(0,0,0,0.22)",
//         display: "flex",
//         flexDirection: "column",
//         overflow: "hidden",
//         border: `1px solid ${bgInset}`,
//       }}
//     >
//       {/* Header */}
//       <div
//         style={{
//           background: bgSurface,
//           borderBottom: `1px solid ${divider}`,
//           textAlign: "center",
//           padding: "28px 0 18px 0",
//         }}
//       >
//         <div
//           style={{
//             display: "inline-flex",
//             alignItems: "center",
//             justifyContent: "center",
//             marginBottom: 10,
//             background: bgInset,
//             width: 54,
//             height: 54,
//             borderRadius: "50%",
//             boxShadow: "0 2px 10px #0008",
//           }}
//         >
//           <span role="img" aria-label="Logo" style={{ fontSize: 28, color: "#FFD600" }}>🧩</span>
//         </div>
//         <div
//           style={{
//             fontSize: 18,
//             fontWeight: 800,
//             letterSpacing: ".06em",
//             textTransform: "uppercase",
//             color: textPrimary,
//             opacity: 0.97,
//             marginTop: 2,
//           }}
//         >
//           {logoText}
//         </div>
//       </div>
//       {/* Menu */}
//       <Menu
//         style={{
//             background: bgSurface,
//             padding: "32px 0",
//             flex: "1 1 auto",
//             minHeight: 0, 
// }}
//         menuItemStyles={{
//           button: ({ active }) => ({
//             background: active ? accentSoft : "transparent",
//             color: active ? textPrimary : textSecondary,
//             margin: "12px 22px",
//             borderRadius: 15,
//             padding: "13px 18px",
//             fontWeight: active ? 700 : 500,
//             fontSize: 18,
//             display: "flex",
//             alignItems: "center",
//             outline: "none",
//             boxShadow: active ? `0 0 0 1.5px ${accent}` : "none",
//             border: "none",
//             transition: "background 120ms, color 120ms, box-shadow 140ms",
//           }),
//         }}
//       >
//         {routes.map(({ path, name, icon }) => {
//           const isActive = location.pathname === path;
//           return (
//             <MenuItem
//               key={path}
//               component={
//                 <NavLink
//                   to={path}
//                   style={{
//                     textDecoration: 'none',
//                     color: 'inherit',
//                     display: "flex",
//                     alignItems: "center",
//                     width: "100%",
//                     outline: "none",
//                   }}
//                   end
//                 />
//               }
//               active={isActive}
//               icon={
//                 icon && (
//                   <span
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       width: 38,
//                       height: 38,
//                       marginRight: 16,
//                       background: isActive ? accent : bgInset,
//                       borderRadius: "50%",
//                       color: isActive ? "#181E17" : textPrimary,
//                       fontSize: 22,
//                       boxShadow: isActive
//                         ? "0 4px 16px rgba(0,255,133,0.13)"
//                         : "inset 0 0 0 1px rgba(255,255,255,0.03)",
//                     }}
//                   >
//                     {icon}
//                   </span>
//                 )
//               }
//             >
//               {name}
//             </MenuItem>
//           );
//         })}
//       </Menu>
//       {/* Footer */}
//       <div
//         style={{
//           marginTop: "auto",
//           padding: "18px 0 18px 0",
//           borderTop: `1px solid ${divider}`,
//           background: bgSurface,
//           textAlign: "center",
//         }}
//       >
//         <span style={{ color: textPrimary, fontSize: 16, marginRight: 4 }}>
//           Need help?
//         </span>
//         <a
//           href="#"
//           style={{
//             color: accent,
//             fontSize: 16,
//             textDecoration: "none",
//             borderBottom: `1.5px dotted ${accent}`,
//             transition: 'color 100ms',
//           }}
//           onMouseEnter={e => (e.currentTarget.style.color = accentHover)}
//           onMouseLeave={e => (e.currentTarget.style.color = accent)}
//         >
//           Contact support
//         </a>
//       </div>
//     </Sidebar>
//   );
// }

// export default MySidebar;



import React, { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { NavLink, useLocation } from 'react-router-dom';
import { routes } from '../../routes/routes';
import theme from '../../theme';

// For “no-scroll” on <body> when mobile sidebar is open
function useLockBodyScroll(lock) {
  useEffect(() => {
    if (!lock) return;
    const original = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = original }
  }, [lock]);
}

export default function MySidebar({ logoText = 'Finance' }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

  // Listen for window size to determine isMobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 750);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // Prevent background scroll when sidebar open
  useLockBodyScroll(isMobile && open);

  // Hide the sidebar when a menu link is clicked (on mobile)
  const handleMenuClick = () => {
    if (isMobile) setOpen(false);
  };

  // Theming
  const { palette, spacing, borderRadius, boxShadow } = theme;
  const bgBase = palette.green[900];
  const bgSurface = palette.green[900];
  const bgInset = palette.green[800];
  const accent = palette.green[400];
  const accentHover = palette.green[200];

  // Styles pulled from theme, using rem for scale
  const sidebarStyle = {

    width: 300,
  height: "100dvh",        // covers full vertical mobile screens too
  borderRadius: 20,
  top: 0,
  left: 0,
  background: '#000000',
    borderRadius: borderRadius.card,
    margin: spacing.sm,
    width: "16rem",
    height: "calc(100dvh - 2 * 0.75rem)",
    position: "sticky",
    color: palette.textPrimary,
    boxShadow: boxShadow.soft,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    border: `1px solid ${bgInset}`,
    minWidth: "10rem",
    transition: "all 0.24s cubic-bezier(.6,0,.51,1.02)"
  };

  // Overlay style for mobile sidebar
  const overlayStyle = {
    position: "fixed",
    inset: 0,
    zIndex: 1201,
    background: "rgba(0,0,0,0.38)"
  };

  // Custom hamburger button
  const Hamburger = (
    <button
      aria-label="Open menu"
      style={{
        position: "fixed",
        top: spacing.md,
        left: spacing.sm,
        zIndex: 1500,
        height: "2.5rem",
        width: "2.5rem",
        borderRadius: "2.5rem",
        border: "none",
        background: bgBase,
        color: accent,
        boxShadow: boxShadow.soft,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.35rem",
        cursor: "pointer"
      }}
      onClick={() => setOpen(true)}
    >
      <span style={{display:'block',height:'4px',width:'24px',background:accent,borderRadius:'3px'}}/>
      <span style={{display:'block',height:'4px',width:'20px',background:accent,borderRadius:'3px'}}/>
      <span style={{display:'block',height:'4px',width:'16px',background:accent,borderRadius:'3px'}}/>
    </button>
  );

  // Responsive inline media CSS (for fallback)
  const mediaStyles = `
    @media (max-width: 750px) {
      .oracle-app-sidebar {
        transition: transform 0.2s cubic-bezier(.6,0,.41,1.01), opacity 0.15s;
        position: fixed !important;
        left: 0; top: 0; bottom: 0;
        right: unset;
        width: 84vw !important;
        max-width: 21rem;
        min-width: 11.1rem;
        z-index: 1300;
        margin: 0 !important;
        border-radius: 0 1.2rem 1.2rem 0 !important;
        box-shadow: 0 4px 44px 2px rgba(0,0,0,0.36);
      }
      .oracle-app-sidebar.closed {
        transform: translateX(-120%);
        opacity: 0.001;
        pointer-events: none;
      }
      .oracle-app-sidebar.open {
        transform: translateX(0);
        opacity: 1;
        pointer-events: auto;
      }
    }
  `;

  return (
    <>
      <style>{mediaStyles}</style>
      {isMobile && !open && Hamburger}
      {isMobile && open && (
        <div style={overlayStyle} onClick={() => setOpen(false)} />
      )}
      <Sidebar
        className={`oracle-app-sidebar${isMobile ? (open ? " open" : " closed") : ""}`}
        style={{
          ...sidebarStyle,
          ...(isMobile
            ? {
              position: "fixed",
              left: 0,
              top: 0,
              bottom: 0,
              margin: 0,
              borderRadius: "0 1.2rem 1.2rem 0",
              height: "100dvh"
            }
            : {}
          )
        }}
      >
        {/* Header/Logo */}
        <div
          style={{
            background: bgSurface,
            borderBottom: `1px solid ${bgInset}`,
            textAlign: "center",
            padding: `${spacing.md} 0 ${spacing.xs} 0`
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: spacing.xs,
              background: bgInset,
              width: "2.8rem",
              height: "2.8rem",
              borderRadius: "50%",
              boxShadow: "0 2px 4px #0006",
            }}
          >
            <span role="img" aria-label="Logo" style={{ fontSize: "1.55rem", color: palette.yellow }}>🧩</span>
          </div>
          <div
            style={{
              fontSize: "1.08rem",
              fontWeight: 700,
              letterSpacing: ".04em",
              textTransform: "uppercase",
              color: palette.textPrimary,
              opacity: 0.96,
              marginTop: 1,
            }}
          >
            {logoText}
          </div>
        </div>
        {/* Menu */}
        <Menu
          style={{
            
            background: bgSurface,
            
            flex: "1",
            minHeight: 0, // fix for menu in flex
            display: "flex",
            flexDirection: "column",
           
          }}
          menuItemStyles={{
            button: ({ active }) => ({
              background: active ? `rgba(0,169,80,0.12)` : "transparent",
              color: active ? palette.textPrimary : palette.textSecondary,
              margin: `${spacing.xs} ${spacing.md}`,
              borderRadius: borderRadius.menu,
              padding: `${spacing.xs} ${spacing.sm}`,
              fontWeight: active ? 700 : 500,
              fontSize: "1.01rem",
              display: "flex",
              alignItems: "center",
              border: "none",
              boxShadow: active ? `0 0 0 1.2px ${accent}` : "none",
              outline: "none",
              transition: "background 150ms, color 130ms, box-shadow 140ms",
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
                      width: "87%",
                      outline: "none",
                    }}
                    onClick={handleMenuClick}
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
                        width: "2rem",
                        height: "2rem",
                        marginRight: ".7rem",
                        background: isActive ? accent : bgInset,
                        borderRadius: "50%",
                        color: isActive ? "#181E17" : palette.textPrimary,
                        fontSize: "1.04rem",
                        boxShadow: isActive
                          ? "0 2px 9px rgba(0,255,133,0.13)"
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
      
      </Sidebar>
    </>
  );
}