"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const BasicTableHeader = ({ children }) => {
    return (<material_1.TableHead sx={{
            th: {
                fontWeight: 'bold',
                textAlign: 'start',
                position: 'sticky',
                top: 0,
            },
        }}>
      {children}
    </material_1.TableHead>);
};
exports.default = BasicTableHeader;
