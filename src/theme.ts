import { createTheme } from "@mui/material/styles";

import "./styles";
import "./theme.css";

export const MUITheme = createTheme({
    palette: {
        primary: {
            main: "#6AD4E2",
            contrastText: "#09314B"
        },
        secondary: {
            main: "#F178B6",
            contrastText: "#FFFFFF"
        },
        background: {
            default: "#EDFDFF",
        },
        info: {
            main: "#09314B",
            contrastText: "#FFFFFF"
        },
        error: {
            main: "#ff0000"
        },
    },
    typography: {
        "fontFamily": "\"Poppins\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans JP\", \"Helvetica\", \"Arial\", sans-serif",
        "fontSize": 14,
        button: {
            textTransform: "none"
        }
    },
    overrides: {
        MuiInputLabel: {
            root: {
                fontSize: "15px",
            }
        },
        MuiTableCell: {
            root: {
                height: "56px",
                padding: "4px 16px",
                fontWeight: 500,
                borderBottom: "none",
            },
            stickyHeader: {
                backgroundColor: "white",
                borderBottom: "1px solid #e0e0e0",
                fontWeight: 600,
            },
        },
    },
});

declare module "@mui/material/styles" {
    interface ThemeOptions {
        overrides?: {
            MuiInputLabel?: unknown;
            MuiTableCell?: unknown;
        };
    }
}
