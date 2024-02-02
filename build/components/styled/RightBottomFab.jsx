"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RightBottomFab = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
exports.RightBottomFab = (0, styles_1.styled)(material_1.Fab)(({ theme }) => ({
    position: 'fixed',
    bottom: 20,
    right: 20,
    backgroundColor: theme.palette.grey[500],
    color: theme.palette.grey[900],
    '&:hover': {
        backgroundColor: theme.palette.grey[100],
        color: theme.palette.grey[500],
        shadow: theme.shadows[12],
    },
}));
