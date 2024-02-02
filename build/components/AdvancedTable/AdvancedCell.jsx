"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const AdvancedCell = ({ column, row, value, }) => {
    let renderedValue = value;
    if (column.format) {
        renderedValue = column.format(renderedValue, row);
    }
    if (column.render) {
        renderedValue = column.render(renderedValue, row);
    }
    return (<material_1.TableCell key={column.name} align={column.align}>
      {renderedValue}
    </material_1.TableCell>);
};
exports.default = AdvancedCell;
