import Duration from "dayjs/plugin/duration";
import IsBetweenPlugin from "dayjs/plugin/isBetween"
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import RelativeTime from "dayjs/plugin/relativeTime";
import dayjs from 'dayjs';

dayjs.extend(IsBetweenPlugin);
dayjs.extend(LocalizedFormat);
dayjs.extend(RelativeTime);
dayjs.extend(Duration);

export default dayjs;
