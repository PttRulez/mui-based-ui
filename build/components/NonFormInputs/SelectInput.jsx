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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const Clear_1 = __importDefault(require("@mui/icons-material/Clear"));
// onChange field
const SelectInput = (_a) => {
    var { handleClear, onChange, label, labelPropName = 'name', options, sortItems = true, value, variant = 'standard', sx } = _a, otherProps = __rest(_a, ["handleClear", "onChange", "label", "labelPropName", "options", "sortItems", "value", "variant", "sx"]);
    return (<material_1.FormControl sx={sx} fullWidth {...otherProps}>
      <material_1.InputLabel id={label}>{label}</material_1.InputLabel>
      <material_1.Select labelId={label} id={`${label}-Select`} value={value} label={label} onChange={onChange} sx={{ paddingLeft: '20px' }} variant={variant} endAdornment={value && handleClear ? (<material_1.InputAdornment position={'end'} sx={{
                display: value ? '' : 'none',
                position: 'absolute',
                right: '25px',
            }}>
              <material_1.IconButton onClick={handleClear}>
                <Clear_1.default />
              </material_1.IconButton>
            </material_1.InputAdornment>) : ('')}>
        {Array.isArray(options)
            ? options.map(option => (<material_1.MenuItem value={option.id} key={option.id}>
                {option[labelPropName]}
              </material_1.MenuItem>))
            : sortItems
                ? Object.entries(options)
                    .sort((a, b) => a[1].localeCompare(b[1], 'ru', { numeric: true }))
                    .map(([key, value]) => (<material_1.MenuItem value={key} key={value}>
                  {value}
                </material_1.MenuItem>))
                : Object.entries(options).map(([key, value]) => (<material_1.MenuItem value={key} key={value}>
                {value}
              </material_1.MenuItem>))}
      </material_1.Select>
    </material_1.FormControl>);
};
exports.default = SelectInput;
