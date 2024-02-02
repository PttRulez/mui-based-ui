"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Paper_1 = __importDefault(require("@mui/material/Paper"));
const Table_1 = __importDefault(require("@mui/material/Table"));
const TableBody_1 = __importDefault(require("@mui/material/TableBody"));
const TableCell_1 = __importDefault(require("@mui/material/TableCell"));
const TableContainer_1 = __importDefault(require("@mui/material/TableContainer"));
const TableHead_1 = __importDefault(require("@mui/material/TableHead"));
const TablePagination_1 = __importDefault(require("@mui/material/TablePagination"));
const TableRow_1 = __importDefault(require("@mui/material/TableRow"));
const AdvancedCell_1 = __importDefault(require("./AdvancedCell"));
const helpers_1 = require("@/utils/helpers");
const AdvancedTable = ({ columns, pagination = true, rowClick, rows, rowSx, sx, }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const sxObj = rowClick ? { cursor: 'pointer' } : {};
    return (<Paper_1.default sx={Object.assign({ width: '100%', overflow: 'hidden', maxHeight: '70vh', display: 'flex', flexDirection: 'column' }, sx)}>
      <TableContainer_1.default>
        <Table_1.default stickyHeader aria-label="sticky table">
          <TableHead_1.default>
            <TableRow_1.default>
              {columns.map(column => {
            var _a;
            return (<TableCell_1.default key={column.label} align={(_a = column.align) !== null && _a !== void 0 ? _a : 'left'} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell_1.default>);
        })}
            </TableRow_1.default>
          </TableHead_1.default>
          <TableBody_1.default>
            {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(row => {
            return (<TableRow_1.default hover role="checkbox" tabIndex={-1} key={row.id} sx={rowSx ? Object.assign(Object.assign({}, sxObj), rowSx(row)) : sxObj} onClick={rowClick ? () => rowClick(row) : () => { }}>
                    {columns.map(column => (<AdvancedCell_1.default column={column} value={(0, helpers_1.getNestedProp)(row, column.name)} row={row} key={column.name}/>))}
                  </TableRow_1.default>);
        })}
          </TableBody_1.default>
        </Table_1.default>
      </TableContainer_1.default>
      {pagination && (<TablePagination_1.default rowsPerPageOptions={[10, 25, 100]} component="div" count={rows.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} sx={{ overflow: 'visible' }}/>)}
    </Paper_1.default>);
};
exports.default = AdvancedTable;
