"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
;
const BasicTable = ({ children, sx, title }) => {
    return (<material_1.TableContainer component={material_1.Paper} sx={Object.assign({ padding: '30px', overflowX: 'initial' }, sx)}>
      {title && <material_1.Typography variant='h4' align='center'>{title}</material_1.Typography>}
      <material_1.Table aria-label="simple table" stickyHeader>
        {children}
      </material_1.Table>
    </material_1.TableContainer>);
};
exports.default = BasicTable;
