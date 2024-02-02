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
const DatePickerInput_1 = __importDefault(require("../NonFormInputs/DatePickerInput"));
const react_hook_form_1 = require("react-hook-form");
const FormDatePicker = (_a) => {
    var { control, name, onChange, rules } = _a, datePickerProps = __rest(_a, ["control", "name", "onChange", "rules"]);
    return (
    // Делаем свойство rules по аналогии с TexField
    <react_hook_form_1.Controller control={control} name={name} rules={rules} render={({ field }) => (<DatePickerInput_1.default onChange={(value, ctx) => {
                field.onChange(value);
                if (onChange) {
                    onChange(value, ctx);
                }
            }} {...datePickerProps}/>)}/>);
};
exports.default = FormDatePicker;
