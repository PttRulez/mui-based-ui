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
const x_date_pickers_1 = require("@mui/x-date-pickers");
const material_1 = require("@mui/material");
const Clear_1 = __importDefault(require("@mui/icons-material/Clear"));
const AdapterDayjs_1 = require("@mui/x-date-pickers/AdapterDayjs");
require("dayjs/locale/ru");
const dayjs_config_1 = __importDefault(require("@/dayjs.config"));
const DatePickerInput = (_a) => {
    var { error = false, handleClear, label, onChange, value, variant = 'standard' } = _a, otherProps = __rest(_a, ["error", "handleClear", "label", "onChange", "value", "variant"]);
    return (<x_date_pickers_1.LocalizationProvider dateAdapter={AdapterDayjs_1.AdapterDayjs} adapterLocale="ru">
      <x_date_pickers_1.DesktopDatePicker label={label} onChange={(v, ctx) => {
            if (onChange && v) {
                onChange(v.set('hours', 11), ctx);
            }
        }} value={(0, dayjs_config_1.default)(value)} 
    //@ts-ignore
    InputProps={{
            endAdornment: value && (<material_1.IconButton aria-label="toggle password visibility" onClick={handleClear}>
              <Clear_1.default />
            </material_1.IconButton>),
        }} renderInput={(params) => (<material_1.TextField {...params} error={error} variant={variant} sx={{
                '& .MuiInputBase-root.MuiInput-root': { paddingLeft: '15px' },
                '& label': { marginLeft: '15px' },
            }}/>)} sx={Object.assign({ width: '100%' }, otherProps.sx)} {...otherProps}/>
    </x_date_pickers_1.LocalizationProvider>);
};
exports.default = DatePickerInput;
