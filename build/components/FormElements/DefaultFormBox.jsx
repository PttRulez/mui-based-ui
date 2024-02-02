"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const DefaultFormBox = ({ children, onSubmit, sx }) => {
    return (<material_1.Box onSubmit={onSubmit} component="form" sx={Object.assign({ padding: '30px' }, sx)}>
      <material_1.Stack gap={'20px'}>{children}</material_1.Stack>
    </material_1.Box>);
};
exports.default = DefaultFormBox;
