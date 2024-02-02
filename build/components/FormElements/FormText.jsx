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
const TextInput_1 = __importDefault(require("../NonFormInputs/TextInput"));
const FormText = (_a) => {
    var { control, decimal, name, onChange, rules, type, value } = _a, textInputProps = __rest(_a, ["control", "decimal", "name", "onChange", "rules", "type", "value"]);
    return (<react_hook_form_1.Controller control={control} name={name} rules={rules} render={({ field }) => (<TextInput_1.default onChange={event => {
                if (type === 'number' && decimal) {
                    const floatValue = parseFloat(parseFloat(event.target.value).toFixed(2));
                    event.target.value = floatValue.toString();
                    field.onChange(isNaN(floatValue) ? 0 : floatValue);
                }
                else if (type === 'number') {
                    const intValue = parseInt(event.target.value);
                    event.target.value = intValue.toString();
                    field.onChange(isNaN(intValue) ? 0 : intValue);
                }
                else {
                    field.onChange(event);
                }
                if (onChange) {
                    onChange(event);
                }
            }} type={type} value={value} {...textInputProps}/>)}/>);
};
exports.default = FormText;
