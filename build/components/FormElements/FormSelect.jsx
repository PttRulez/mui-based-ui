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
const react_hook_form_1 = require("react-hook-form");
const SelectInput_1 = __importDefault(require("../NonFormInputs/SelectInput"));
const FormSelect = (_a) => {
    var { control, name, onChange } = _a, selectProps = __rest(_a, ["control", "name", "onChange"]);
    return (<react_hook_form_1.Controller control={control} name={name} render={({ field }) => (<SelectInput_1.default onChange={(e) => {
                field.onChange(e);
                if (onChange) {
                    onChange(e);
                }
            }} {...selectProps}/>)}/>);
};
exports.default = FormSelect;
