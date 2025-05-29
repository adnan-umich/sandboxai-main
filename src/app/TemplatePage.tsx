"use client";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";
import { ReactNode, useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Slide from "@mui/material/Slide";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Sandbox", href: "/sandbox" },
  { label: "Consulting", href: "/consulting" },
  { label: "Services", href: "/services" },
];

function getNavIndex(path: string) {
  return navLinks.findIndex((link) => link.href === path);
}

export default function TemplatePage({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [direction, setDirection] = useState<"left" | "right">("left");
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    const prevIndex = getNavIndex(prevPathRef.current);
    const currIndex = getNavIndex(pathname);
    if (prevIndex !== -1 && currIndex !== -1) {
      setDirection(currIndex > prevIndex ? "left" : "right");
    } else {
      setDirection("left");
    }
    prevPathRef.current = pathname;
  }, [pathname]);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        m: 0,
        p: 0,
        overflow: "hidden",
        bgcolor: "#f4f4f4",
      }}
    >
      <AppBar
        position="static"
        sx={{
          zIndex: 1201,
          bgcolor: "#161616",
          color: "#fff",
          boxShadow: "0 2px 4px 0 rgba(0,0,0,0.10)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              fontFamily: "'IBM Plex Sans', 'Segoe UI', Arial, sans-serif",
              letterSpacing: "0.5px",
              fontSize: "1.25rem",
            }}
          >
            Sandbox-AI.NET
          </Typography>
          {navLinks.map((link) => (
            <Button
              key={link.href}
              color="inherit"
              component={Link}
              href={link.href}
              sx={{
                textTransform: "none",
                fontWeight: 500,
                fontFamily: "'IBM Plex Sans', 'Segoe UI', Arial, sans-serif",
                borderBottom: pathname === link.href ? "2px solid #fff" : "none",
                borderRadius: 0,
              }}
            >
              {link.label}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      <Box sx={{ width: "100vw", height: "calc(100vh - 64px)", overflow: "auto", position: "relative" }}>
        <Slide
          in={true}
          direction={direction}
          appear={true}
          mountOnEnter
          unmountOnExit
          timeout={400}
          key={pathname}
        >
          <Box sx={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}>
            {children}
          </Box>
        </Slide>
      </Box>
    </Box>
  );
}
