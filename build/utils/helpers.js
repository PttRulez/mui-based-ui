"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNestedProp = void 0;
const getNestedProp = (obj, path) => path.split('.').reduce((acc, part) => acc && acc[part], obj);
exports.getNestedProp = getNestedProp;
