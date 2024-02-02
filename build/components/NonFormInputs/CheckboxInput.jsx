"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const CheckboxInput = (_a) => {
    var { checked, label, labelPlacement, onChange, sx } = _a, otherProps = __rest(_a, ["checked", "label", "labelPlacement", "onChange", "sx"]);
    return (<material_1.FormControlLabel control={<material_1.Checkbox checked={Boolean(checked)} onChange={onChange} sx={sx} {...otherProps}/>} label={label} labelPlacement={labelPlacement}/>);
};
exports.default = CheckboxInput;
