import dayjs from "dayjs";

const advancedFormat = require("dayjs/plugin/advancedFormat");
dayjs.extend(advancedFormat);

export const formatDate = dayjs;
