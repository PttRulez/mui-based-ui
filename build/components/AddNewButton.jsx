"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Add_1 = __importDefault(require("@mui/icons-material/Add"));
const RightBottomFab_1 = require("./styled/RightBottomFab");
const AddNewButton = ({ onClick, sx }) => {
    return (<RightBottomFab_1.RightBottomFab onClick={onClick} sx={sx}>
      <Add_1.default />
    </RightBottomFab_1.RightBottomFab>);
};
exports.default = AddNewButton;
